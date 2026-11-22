import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response  = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 16000,
    thinking: {
        type: "enabled",
        budget_tokens: 1024
    },
    messages: [
        {
            role: "user",
            content: "Are there an infinite number of prime numbers such that n mod 4 == 3 ?"
        }
    ]
});

for (const block of response.content) {
    switch(block.type) {
        case "thinking":
            console.log(`\nThinking summary: ${block.thinking}`);
            break;
        case "text":
            console.log(`\nResponse: ${block.text}`);
            break;
    }
}
