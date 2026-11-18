import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const buggyCode = `
    function add(a, b) {
        return a - b;
    }
`;

const response = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 2048,
    system: "You are a terse senior code reviewer. Give feedback on one paragraph.",
    messages: [
        { role: "user", content: `Review this code ${buggyCode}` },
    ],
});

for (const block of response.content) {
    if (block.type === "text") {
        console.log(block.text);
    }
}
