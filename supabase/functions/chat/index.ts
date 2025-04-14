
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Maximum number of messages to keep in the context window
const MAX_CONTEXT_MESSAGES = 10;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, previousMessages, stream = true } = await req.json();
    const apiKey = Deno.env.get('PERPLEXITY_API_KEY');

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Authentication required. Please sign in.' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Limit the conversation history to prevent token limit issues
    // We keep the most recent messages, dropping older ones if needed
    const limitedPreviousMessages = previousMessages && previousMessages.length > MAX_CONTEXT_MESSAGES 
      ? previousMessages.slice(-MAX_CONTEXT_MESSAGES) 
      : previousMessages || [];

    // Convert previous messages to the format expected by the API
    const conversationHistory = limitedPreviousMessages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const payload = {
      model: 'llama-3.1-sonar-small-128k-online',
      messages: [
        {
          role: 'system',
          content: 'You are HyperScriber AI, a helpful AI assistant focused on helping users improve their writing and content creation. You provide concise but informative responses, always maintaining context of the conversation. Your goal is to help users express their ideas clearly and effectively.'
        },
        ...conversationHistory,
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.2,
      max_tokens: 1000,
      stream: stream,
    };

    // Return streamed response if requested
    if (stream) {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream',
        },
        body: JSON.stringify(payload),
      });

      // Check if the API request was successful
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Perplexity API error: ${response.status} - ${errorText}`);
        return new Response(
          JSON.stringify({ error: `API error: ${response.status}` }),
          { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Return the stream directly to the client
      return new Response(response.body, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    } else {
      // Non-streaming mode (fallback)
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Check if the API request was successful
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Perplexity API error: ${response.status} - ${errorText}`);
        return new Response(
          JSON.stringify({ error: `API error: ${response.status}` }),
          { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const data = await response.json();
      
      return new Response(JSON.stringify({ 
        response: data.choices[0].message.content 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error in chat function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'An unknown error occurred' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
