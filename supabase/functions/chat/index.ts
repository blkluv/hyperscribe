
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, previousMessages } = await req.json();
    const apiKey = Deno.env.get('PERPLEXITY_API_KEY');

    // Convert previous messages to the format expected by the API
    const conversationHistory = previousMessages?.map(msg => ({
      role: msg.role,
      content: msg.content
    })) || [];

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
      }),
    });

    const data = await response.json();
    
    return new Response(JSON.stringify({ 
      response: data.choices[0].message.content 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat function:', error);
    return new Response(
      JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
