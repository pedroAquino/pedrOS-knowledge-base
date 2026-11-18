// Smoke test for the setup. It doesn't call the API.
// Run: npm start week-01/hello.ts
import Anthropic from "@anthropic-ai/sdk";

const hasKey = Boolean(process.env.ANTHROPIC_API_KEY);
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY ?? "missing" });

console.log(`Node ${process.version}`);
console.log(`SDK client ready: ${client instanceof Anthropic}`);
console.log(`ANTHROPIC_API_KEY loaded from .env: ${hasKey}`);
