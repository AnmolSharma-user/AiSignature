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
    const { name, style, isMoreSignatures } = await req.json();

    if (!name) {
      return new Response(
        JSON.stringify({ error: "Name is required" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }

    let stylePrompt = "";
    if (style && style !== "default") {
      const styleMap: Record<string, string> = {
        "steve-jobs": "Steve Jobs - minimalist, clean, confident strokes with slight forward slant",
        "elon-musk": "Elon Musk - bold, decisive, angular with strong personality",
        "bill-gates": "Bill Gates - neat, precise, professional with consistent lettering",
        "warren-buffett": "Warren Buffett - traditional, wise, flowing cursive style",
        "oprah-winfrey": "Oprah Winfrey - warm, expressive, rounded with flourishes",
        "jeff-bezos": "Jeff Bezos - sharp, forward-thinking, dynamic angles",
        "mark-zuckerberg": "Mark Zuckerberg - modern, efficient, straightforward style",
        "taylor-swift": "Taylor Swift - artistic, elegant, flowing with heart motifs"
      };
      stylePrompt = `Generate signatures in the style of ${styleMap[style] || style}. `;
    }

    const prompt = `${stylePrompt}Generate exactly 10 ${isMoreSignatures ? 'completely NEW and different' : ''} unique and creative signature variations for the name "${name}".
    Each signature should be different in style - include elegant cursive, modern minimalist, bold artistic, classic, flowing, geometric, professional, casual, decorative, and sophisticated styles.
    Also, for EACH signature, provide a brief personality analysis (2-3 sentences) explaining what this signature style reveals about the person's character, ambitions, and personality traits.
    
    Return ONLY a valid JSON object in this exact format:
    {
      "signatures": ["signature1", "signature2", ...],
      "analyses": ["analysis1", "analysis2", ...]
    }
    
    Make sure both arrays have exactly 10 items and the analyses correspond to each signature.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: "You are a professional signature designer. Generate creative signature variations and return them as a JSON array of strings.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI API Error:", response.status, errorText);

      let errorMessage = "Failed to generate signatures";
      if (response.status === 429) {
        errorMessage = "Too many requests. Please try again in a moment.";
      } else if (response.status === 402) {
        errorMessage = "AI service quota exceeded";
      }

      return new Response(
        JSON.stringify({ error: errorMessage }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: response.status }
      );
    }

    const data = await response.json();
    let responseText = data.choices?.[0]?.message?.content?.trim() || "{}";

    // Try to extract JSON object from the response
    let signatures: string[] = [];
    let analyses: string[] = [];
    
    try {
      // Remove markdown code blocks if present
      responseText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "");
      const parsed = JSON.parse(responseText);

      signatures = parsed.signatures || [];
      analyses = parsed.analyses || [];

      // Ensure we have exactly 10 signatures and analyses
      if (!Array.isArray(signatures) || signatures.length < 10) {
        signatures = Array(10)
          .fill(null)
          .map((_, i) => `${name}`);
      }
      
      if (!Array.isArray(analyses) || analyses.length < 10) {
        analyses = Array(10)
          .fill(null)
          .map(() => "This signature reflects confidence and professionalism. The fluid strokes indicate creativity while maintaining clarity, suggesting a balanced personality with strong communication skills.");
      }
    } catch (error) {
      console.error("Failed to parse AI response:", error);
      // If parsing fails, create simple variations
      signatures = Array(10)
        .fill(null)
        .map((_, i) => `${name}`);
      analyses = Array(10)
        .fill(null)
        .map(() => "This signature reflects confidence and professionalism. The fluid strokes indicate creativity while maintaining clarity, suggesting a balanced personality with strong communication skills.");
    }

    return new Response(JSON.stringify({ 
      signatures: signatures.slice(0, 10),
      analyses: analyses.slice(0, 10)
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in generate-signature:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Internal server error" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
