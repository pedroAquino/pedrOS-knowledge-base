/**
 * Steering thinking
 * On claude newer models you cant set a token budget for
 * how much you want the model to think on each request.
 * 
 * Instead of that claude provides a more nuanced way to control that through what they
 * call "levers"
 * 
 * 1. Effort - the main lever
 * The levels are low, medium, high, xhigh and max
 * Its a behavioral signal, not a token cap, less effort means less text
 * produced and less tool calls.
 * 
 * 2. Prompt Steering
 * If effort isnt enough you can add instructions to your prompt such
 * as:
 * - Less thinking: "Answer directly without deliberating." or "…When in doubt, respond directly."
 * - More thinking: "This task involves multistep reasoning. Think carefully before responding."
 * 
 * 3. Per-message effort (beta). This changes effort partway through a conversation. You insert a message like this between turns:
 * { role: "system", content: [], output_config: { effort: "low" } }
 * It needs the header anthropic-beta: mid-conversation-output-config-2026-07-01.
 *
 * The reason to use it: changing the top-level effort between requests invalidates the prompt cache, but this doesn't. Everything before the inserted message stays the same, so the cached part still matches.
*/

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

type Effort =  "low" | "medium" | "high" | "xhigh" | "max" | null;

const PROMPT_EASY = "What's the capital of Portugal?";
const PROMPT_COMPLEX = "Three boxes are mislabeled 'apples', 'oranges' and 'mixed'. You can pick one fruit from one box. How do you fix all the labels?"

const run = async (effort: Effort, prompt: string) => {
    const response = await client.messages.create({
        model: "claude-opus-5-5",
        max_tokens: 4096,
        output_config: { effort: effort },
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });

    console.log(`\n Running 
        ${prompt === PROMPT_EASY ? "easy" : "complex"} prompt
        with ${effort} effort
    `);

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
};

// easy prompt
run("low", PROMPT_EASY);
run("medium", PROMPT_EASY);
run("high", PROMPT_EASY);
run("xhigh", PROMPT_EASY);
run("max", PROMPT_EASY);

// complex prompt
run("low", PROMPT_COMPLEX);
run("medium", PROMPT_COMPLEX);
run("high", PROMPT_COMPLEX);
run("xhigh", PROMPT_COMPLEX);
run("max", PROMPT_COMPLEX);

// RESULTS

/**
 * pedroaquino@fedora:~/Projects/pedrOS-knowledge-base/claude-certified-developer/projects$ npm start week-01/steering-thinking.ts 

> start
> tsx --env-file-if-exists=.env week-01/steering-thinking.ts


 Running 
        easy prompt
        with low effort
    

Response: The capital of Portugal is **Lisbon** (Lisboa in Portuguese).

 Running 
        easy prompt
        with xhigh effort
    

Thinking summary: 

Response: The capital of Portugal is **Lisbon** (Lisboa in Portuguese). It's the country's largest city and sits on the Tagus River near the Atlantic coast.

 Running 
        easy prompt
        with high effort
    

Thinking summary: 

Response: The capital of Portugal is **Lisbon** (Lisboa in Portuguese). It's the country's largest city and sits on the Tagus River near the Atlantic coast.

 Running 
        easy prompt
        with medium effort
    

Thinking summary: 

Response: The capital of Portugal is **Lisbon** (Lisboa in Portuguese).

 Running 
        easy prompt
        with max effort
    

Thinking summary: 

Response: The capital of Portugal is **Lisbon** (*Lisboa* in Portuguese). It's the country's largest city and sits on the Tagus River estuary along the Atlantic coast.

 Running 
        complex prompt
        with high effort
    

Thinking summary: 

Response: **Draw one fruit from the box labeled "Mixed."**

The key fact is that *every* label is wrong. So the box labeled "Mixed" can't actually be mixed. It must contain only apples or only oranges, and the single fruit you draw tells you which.

**Case 1: You draw an apple.**
- The "Mixed" box is really **Apples**.
- The box labeled "Oranges" can't be oranges (wrong label) and can't be apples (already found), so it's **Mixed**.
- The box labeled "Apples" must be **Oranges**.

**Case 2: You draw an orange.**
- The "Mixed" box is really **Oranges**.
- The box labeled "Apples" can't be apples (wrong label) and can't be oranges (already found), so it's **Mixed**.
- The box labeled "Oranges" must be **Apples**.

**Why not pick from another box?** If you drew from the box labeled "Apples" and got an orange, that box could be either pure oranges or mixed, and you couldn't tell which. Only the "Mixed" box guarantees that one fruit reveals its full contents.

 Running 
        complex prompt
        with low effort
    

Thinking summary: 

Response: **Pick one fruit from the box labeled "Mixed."**

Since every label is wrong, the "Mixed" box can't actually be mixed. It must contain only apples or only oranges, so a single fruit tells you exactly what's in it.

**Case 1: You draw an apple.**
- The "Mixed" box is really **Apples**.
- The box labeled "Oranges" can't be oranges (wrong label) and can't be apples (already identified), so it's **Mixed**.
- The box labeled "Apples" must be **Oranges**.

**Case 2: You draw an orange.**
- The "Mixed" box is really **Oranges**.
- The box labeled "Apples" can't be apples and can't be oranges, so it's **Mixed**.
- The box labeled "Oranges" must be **Apples**.

**Why not pick from another box?** If you drew an apple from the box labeled "Oranges," it could be the apples box or the mixed box, and you couldn't tell which. Only the "Mixed" box guarantees a definitive answer from one fruit.

 Running 
        complex prompt
        with medium effort
    

Thinking summary: 

Response: **Pick one fruit from the box labeled "Mixed."**

Every label is wrong, so the box labeled "Mixed" can't actually be mixed. It must contain only apples or only oranges. The single fruit you draw tells you which.

**Case 1: You draw an apple.**
- The "Mixed" box is really **Apples**.
- The box labeled "Oranges" can't be oranges (its label is wrong), and it can't be apples (you just found those). So it's **Mixed**.
- The box labeled "Apples" is therefore **Oranges**.

**Case 2: You draw an orange.**
- The "Mixed" box is really **Oranges**.
- The box labeled "Apples" can't be apples, and it can't be oranges, so it's **Mixed**.
- The box labeled "Oranges" is therefore **Apples**.

**Why not pick from another box?** If you drew an apple from the box labeled "Oranges," it could be either the apples box or the mixed box, and you couldn't tell which. The "Mixed" box is the only one where a single fruit reveals its full contents.

 Running 
        complex prompt
        with xhigh effort
    

Thinking summary: 

Response: **Pick one fruit from the box labeled "Mixed."**

Since every label is wrong, the "Mixed" box can't actually be mixed. It must contain only apples or only oranges, so the single fruit tells you exactly what's in it.

**If you draw an apple:**
- The "Mixed" box is really **Apples**.
- The box labeled "Oranges" can't be oranges (its label is wrong) and can't be apples (already found), so it's **Mixed**.
- The box labeled "Apples" must be **Oranges**.

**If you draw an orange:**
- The "Mixed" box is really **Oranges**.
- The box labeled "Apples" can't be apples or oranges, so it's **Mixed**.
- The box labeled "Oranges" must be **Apples**.

**Why this box?** If you picked from "Apples" or "Oranges" instead, drawing a fruit might not settle anything. For example, an orange from the "Apples" box could mean that box is all oranges or mixed. The "Mixed" box is the only one guaranteed to be pure.

 Running 
        complex prompt
        with max effort
    

Thinking summary: 

Response: # Solution

**Pick a fruit from the box labeled "Mixed."**

Every label is wrong, so the "Mixed" box can't actually be mixed. It must contain **only apples or only oranges**, and a single fruit tells you which.

### If you pull an apple:
- "Mixed" box → **Apples**
- "Oranges" box can't be oranges (its label is wrong) and can't be apples (already found) → **Mixed**
- "Apples" box → **Oranges**

### If you pull an orange:
- "Mixed" box → **Oranges**
- "Apples" box can't be apples and can't be oranges → **Mixed**
- "Oranges" box → **Apples**

### Why not pick from another box?
If you drew from the "Apples" box and got an orange, that box could be either all oranges or mixed, and you couldn't tell which. Only the "Mixed" box guarantees that one fruit reveals its full contents.
 * **/