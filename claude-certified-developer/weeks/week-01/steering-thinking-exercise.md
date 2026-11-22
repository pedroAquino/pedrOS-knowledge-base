# Exercise: steering thinking

Goal: measure how each steering lever changes thinking tokens, latency and answer quality.

Build file: [`projects/week-01/steering-thinking.ts`](../../projects/week-01/steering-thinking.ts)

Sources (Claude docs, checked 2026-11-22):
- [Steering thinking](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost)
- [Effort](https://platform.claude.com/docs/en/build-with-claude/effort)
- [Per-message effort](https://platform.claude.com/docs/en/build-with-claude/effort-per-message) (beta)

## The three levers

The docs say to try them in this order.

| Lever | Where it goes | Notes |
|---|---|---|
| Effort | `output_config.effort`: `low`, `medium`, `high`, `xhigh`, `max` | Main lever. A behavioural signal, not a token cap. Affects all output, not only thinking. Default is `medium` on Opus 5.5 and Haiku 5.5, and `high` on most other models |
| Prompt steering | System prompt or user message | Use only if effort isn't enough. Sensitive to exact wording. Doesn't work reliably on Sonnet 5.5, Haiku 5.5, or Fable 5.2 at `medium` and above |
| Per-message effort | A `{ role: "system", content: [], output_config: { effort } }` message between turns, plus the header `anthropic-beta: mid-conversation-output-config-2026-07-01` | Changes effort mid-conversation without invalidating the prompt cache |

## Setup

- Model: `claude-opus-5-5`, because prompt steering works reliably on it.
- `thinking: { type: "adaptive", display: "summarized" }`. Claude 5 models hide the thinking text by default.
- Read thinking cost from `usage.output_tokens_details.thinking_tokens`.

Prompts:
- **Easy:** "What's the capital of Portugal?"
- **Hard:** "Three boxes are mislabeled 'apples', 'oranges' and 'mixed'. You can pick one fruit from one box. How do you fix all the labels?"

## Part A: effort sweep

- [ ] Run both prompts at `low`, `medium` and `high`, and fill in the table

| Prompt | Effort | Thinking block? | `thinking_tokens` | `output_tokens` | Latency (ms) | Correct? |
|---|---|---|---|---|---|---|
| Easy | low | | | | | |
| Easy | medium | | | | | |
| Easy | high | | | | | |
| Hard | low | | | | | |
| Hard | medium | | | | | |
| Hard | high | | | | | |

## Part B: prompt steering

- [ ] Keep effort at `medium` and run the hard prompt with each system prompt below

| System prompt | Thinking block? | `thinking_tokens` | Latency (ms) | Correct? |
|---|---|---|---|---|
| None (same as Part A) | | | | |
| "Answer directly without deliberating." | | | | |
| "This task involves multistep reasoning. Think carefully before responding." | | | | |

## Part C (stretch): cache

- [ ] Use a long system prompt (2k+ tokens) with `cache_control`. Send three requests: effort `medium`, `medium`, then `low`. Check `cache_read_input_tokens` on each. It should drop to 0 on the third
- [ ] Do the same change with a per-message effort message instead. Check that the cache still hits

| Request | How effort changed | `cache_read_input_tokens` | `cache_creation_input_tokens` |
|---|---|---|---|
| 1 | top-level `medium` | | |
| 2 | top-level `medium` | | |
| 3 | top-level `low` | | |
| 3b | per-message `low` | | |

## Questions

- [ ] Did `low` skip thinking on the easy prompt? Did it still get the puzzle right?
- [ ] Which moved thinking tokens more: one effort level, or the prompt wording?
- [ ] Why does the docs' order (effort first, prompt second) make sense, given what you measured?

[← Back to week 1](week-01.md)
