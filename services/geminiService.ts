
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAssistantResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the King Kai Assistant, a master martial artist and tech mentor from the Dragon Ball universe.
        You speak with a mix of Goku's cheerful optimism and King Kai's wise (and punny) guidance.
        Refer to the user as "Friend" or "Z-Fighter". 
        Your goal is to explain the portfolio of this developer, who has trained in the Hyperbolic Time Chamber of Coding.
        Mention things like "Power Levels", "Senzu Beans" for debugging, and "Spirit Bombs" for big launches.
        Keep it high-energy and motivating!`,
        temperature: 0.8,
      },
    });
    return response.text || "My telepathy is fuzzy! Must be a solar flare from Planet Vegeta!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Scouter just exploded! I can't read your power level right now.";
  }
};