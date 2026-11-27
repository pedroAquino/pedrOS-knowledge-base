import Anthropic from "@anthropic-ai/sdk";

export const sendMessage = async (messages: string[]) => {
    const client = new Anthropic();
    const response = await client.messages.create({
        model: 'claude-haiku-4-5',
        max_tokens: 2048,
        messages: messages.map(
            (m) => ({ role: "user", content: m })
        )

    });
    for (const block of response.content) {
        if (block.type === "text") {
            return block.text;
        }
    }
};
