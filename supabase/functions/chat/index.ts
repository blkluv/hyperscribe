import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Maximum number of messages to keep in the context window
const MAX_CONTEXT_MESSAGES = 10;

// Predefined questions and answers to simulate a team agent
const predefinedQA = {
  "what services do you offer": "HyperScriber offers AI-powered content creation services including blog writing, email campaigns, social media content, and SEO optimization. We specialize in creating high-converting content for SaaS companies.",
  "how much do your services cost": "Our pricing starts at $499/month for our basic package, which includes 4 blog posts per month. We also offer custom pricing for enterprise clients with specific needs. Check out our pricing page for more details.",
  "what is your turnaround time": "For standard blog posts, our turnaround time is 2-3 business days. For more complex projects, it may take 4-5 business days. We also offer rush delivery options for an additional fee.",
  "do you offer revisions": "Yes, we offer unlimited revisions until you're satisfied with the content. We want to make sure the content we create matches your brand voice and meets your expectations.",
  "how does the process work": "Our process is simple: 1) You provide us with a brief, 2) Our AI analyzes your requirements, 3) We create content tailored to your needs, 4) You review and request revisions if needed, 5) We deliver the final content optimized for your audience.",
  "what industries do you work with": "While we specialize in SaaS companies, we also work with clients in finance, healthcare, e-commerce, education, and technology. Our AI can adapt to various industries and niches.",
  "can you help with seo": "Absolutely! SEO is at the core of our content strategy. We conduct keyword research, optimize meta descriptions and titles, ensure proper heading structure, and create content that both search engines and humans love.",
  "do you write in different languages": "Currently, we primarily create content in English, but we can accommodate requests for content in Spanish, French, and German for an additional fee.",
  "what makes you different from other content agencies": "Unlike traditional content agencies, we leverage AI to create content at scale without sacrificing quality. Our approach combines the efficiency of AI with human expertise to ensure content that converts and drives growth.",
  "can i see samples of your work": "Yes, we'd be happy to share samples of our work. Please contact our team at samples@hyperscriber.com, and we'll send you relevant samples based on your industry and content needs."
};

function findBestMatch(query, predefinedQuestions) {
  // Convert the query to lowercase and remove punctuation
  const normalizedQuery = query.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  
  // Find the best match
  let bestMatch = null;
  let highestScore = 0;
  
  for (const question in predefinedQuestions) {
    const normalizedQuestion = question.toLowerCase();
    
    // Simple matching algorithm - check if the normalized question contains or is contained in the query
    const containsWords = normalizedQuestion.split(" ").some(word => 
      normalizedQuery.includes(word) && word.length > 3 // Only consider words longer than 3 characters
    );
    
    // Calculate similarity based on common words
    const queryWords = new Set(normalizedQuery.split(" ").filter(w => w.length > 3));
    const questionWords = new Set(normalizedQuestion.split(" ").filter(w => w.length > 3));
    
    // Count common words
    let commonWords = 0;
    for (const word of queryWords) {
      if (questionWords.has(word)) {
        commonWords++;
      }
    }
    
    // Calculate score - higher score means better match
    const score = commonWords + (containsWords ? 1 : 0);
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = question;
    }
  }
  
  // Return the best match if the score is above a threshold
  return highestScore > 0 ? bestMatch : null;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, previousMessages, stream = true } = await req.json();
    const apiKey = Deno.env.get('PERPLEXITY_API_KEY');
    
    // For development/testing, temporarily disable strict auth checking
    // We'll still log the auth header for debugging purposes
    const authHeader = req.headers.get('Authorization');
    console.log('Auth header:', authHeader);
    
    // Check for predefined answers first
    const bestMatch = findBestMatch(message, predefinedQA);
    if (bestMatch) {
      const answer = predefinedQA[bestMatch];
      return new Response(JSON.stringify({ 
        response: answer,
        isPredefinded: true
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // If no predefined answer and no API key, return an error
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Limit the conversation history to prevent token limit issues
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
          content: 'You are a friendly customer support agent for HyperScriber, an AI-powered content agency that creates high-converting content for SaaS companies. You provide concise, helpful answers about our services, pricing, and process. Be professional but conversational. If you don\'t know the answer to a specific question, recommend that the user contact our team directly at support@hyperscriber.com.'
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
