import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { studyContent, questionType } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    let systemPrompt = '';
    
    if (questionType === 'exam') {
      systemPrompt = `You are an AQA GCSE Chemistry examiner creating high-quality EXAM-STYLE questions.

EXAM QUESTIONS ARE DIFFERENT FROM BLURT QUESTIONS:
- Exam questions are structured with specific mark allocations
- They use command words (state, describe, explain, calculate)
- They test specific knowledge points, not broad recall
- They may include data, graphs, or require calculations

Generate 1 AQA-style exam question based on the study content. Include:
- Use varied question types: 1-mark (recall), 2-mark (explain), 4-6 mark (extended)
- May include calculations, data interpretation, or diagram requirements
- Use appropriate command words (state, describe, explain, calculate, compare)
- Each question should target specific learning points

IMPORTANT: Generate COMPLETELY DIFFERENT questions each time. Vary:
- The command words used
- The specific topic/concept being tested
- The question format (calculation vs explanation vs description)
- The marks allocated

For EACH question, provide:
1. The question text with clear mark allocation
2. Expected key points for marking

Return as JSON array:
[{
  "question": "question text [X marks]",
  "marks": X,
  "expectedKeyPoints": ["key point 1", "key point 2", ...]
}]`;
    } else {
      systemPrompt = `You are a GCSE chemistry teacher creating BLURT-STYLE recall questions.

BLURT QUESTIONS ARE DIFFERENT FROM EXAM QUESTIONS:
- Blurt questions test rapid recall and memory
- They ask "Write down everything you know about..."
- They are open-ended and encourage brain dumps
- They typically award 5-10 marks based on coverage

Generate 1 blurt-style question that encourages comprehensive recall. Use phrases like:
- "Write down everything you know about..."
- "Explain all you can remember about..."
- "Describe in detail everything related to..."
- "What do you remember about...?"

IMPORTANT: Generate COMPLETELY DIFFERENT questions each time.
- Never repeat the same opening phrase
- Test different sections of the content
- Vary the scope (broad topic vs specific concept)

Return as JSON array:
[{
  "question": "question text",
  "marks": <number between 5-10>,
  "expectedKeyPoints": ["key point 1", "key point 2", ...]
}]`;
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Study Content:\n\n${studyContent}\n\nGenerate a ${questionType === 'exam' ? 'EXAM-STYLE' : 'BLURT-STYLE'} question now. Make it UNIQUE and DIFFERENT from any previous questions. Use maximum creativity and variation.` }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('AI API error:', error);
      throw new Error('Failed to generate questions');
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    const parsed = JSON.parse(content);

    return new Response(
      JSON.stringify({ questions: parsed.questions || parsed }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );

  } catch (error) {
    console.error('Error in generate-varied-questions:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  }
});