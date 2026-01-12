import Groq from "groq-sdk";

// Use a dummy key during build/dev if not present, to prevent crashes.
// The actual API calls will fail at runtime if the key is missing.
const apiKey = process.env.GROQ_API_KEY || "dummy_key_for_build";

export const groq = new Groq({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
});

export const MODEL = "llama-3.3-70b-versatile";
