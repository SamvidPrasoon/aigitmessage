import { commitPrompt } from "../prompts.js";

const OLLAMA_URL =
  process.env.OLLAMA_URL || "http://localhost:11434/api/generate";
const MODEL = process.env.OLLAMA_MODEL || "llama3.2:latest"; // change if you pulled another model

async function callOllama(prompt) {
  const payload = {
    model: MODEL,
    prompt,
    stream: false,
  };

  const res = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    // no auth by default for local Ollama
  });

  //error
  if (!res.ok) {
    const txt = await res.text().catch(() => "<non-text>");
    throw new Error(`Ollama error ${res.status}: ${txt}`);
  }

  const json = await res.json();
  // Ollama output shapes vary by version. Try common fields: taken from net
  const maybe =
    json.response ?? json.output?.[0]?.content ?? json.output ?? json;

  return typeof maybe === "string" ? maybe : JSON.stringify(maybe);
}

export async function generateCommitMessage(diff) {
  const prompt = commitPrompt(diff);
  return callOllama(prompt);
}
