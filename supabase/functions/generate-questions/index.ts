import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { studyContent, numQuestions = 1 } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert GCSE chemistry teacher creating BLURT-STYLE recall questions.

BLURT QUESTIONS ARE DIFFERENT FROM EXAM QUESTIONS:
- Blurt questions test rapid recall and memory
- They ask "Write down everything you know about..."
- They are open-ended and encourage brain dumps
- They typically award 5-10 marks based on coverage

Your task is to:
1. Analyze the provided study content
2. Generate ${numQuestions} blurt-style question(s) that encourage students to recall everything
3. Each question should prompt comprehensive recall of a topic area
4. Questions should be between 5-10 marks each
5. Use phrases like "Write down everything you know about...", "Explain all you can remember about...", "Describe in detail..."

IMPORTANT: Generate COMPLETELY DIFFERENT questions each time. Never repeat the same question.

Return a JSON array of questions with this structure:
{
  "questions": [
    {
      "question": "The actual question text",
      "marks": <number between 5-10>,
      "expectedKeyPoints": ["key point 1", "key point 2", ...]
    }
  ]
}`;

    const userPrompt = `Study Content:
${studyContent}

Generate ${numQuestions} UNIQUE blurt-style question(s) based on this content.

REQUIREMENTS:
- Each question must be COMPLETELY DIFFERENT
- Use varied opening phrases (not just "Explain...")
- Test different sections of the content
- Encourage comprehensive recall
- NEVER generate the same or similar question twice

Generate NOW with maximum variety.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    // Parse the JSON response from AI
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("Could not parse AI response:", aiResponse);
      throw new Error("Invalid AI response format");
    }
    
    const result = JSON.parse(jsonMatch[0]);
    
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in generate-questions function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
