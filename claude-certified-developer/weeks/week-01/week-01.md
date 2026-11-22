# Week 1: Orientation and LLM / model fundamentals (~3.5 h)
**Domain 5** (LLM Fundamentals, Model Selection and Tradeoffs, Technical Fundamentals)

- [x] Read the whole exam guide, including the 3 sample questions (30 min)
- [x] **Diagnostic:** [Tutorials Dojo free 20-question sampler](https://portal.tutorialsdojo.com/courses/free-claude-certified-developer-foundations-ccdv-f-practice-exams-sampler/) (unofficial), timed. Write your score here: 16/20 (80%), 23 min. Taken 2026-11-15
- [x] Rate every sub-skill in `exam-blueprint.md` (Start column)
- [x] Course: [*Claude Platform 101*](https://anthropic.skilljar.com/claude-platform-101) (Anthropic Academy, free). The demos need a Console account, an API key and a little prepaid credit. Checked 2026-11-15. This week, do only the lessons that match week 1:
  - [x] Section 1, *What is the Claude Platform?*: all 3 lessons ("What is the Claude Platform?", "Your first API call", "Choosing the right model")
  - [x] Section 2, *Teaching your Agent*: only "What is thinking?"
  - The rest is split across [week 5](../week-05/week-05.md), [week 6](../week-06/week-06.md) and [week 7](../week-07/week-07.md)
- [x] Docs (Claude docs, checked 2026-11-20):
  - [x] [Models overview](https://platform.claude.com/docs/en/models/overview)
  - [x] [Choosing a model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model)
  - [x] [Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
  - [x] [Extended thinking](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)
  - [x] [Steering thinking](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost). This used to be the "Adaptive thinking" page.
    - [x] Exercise: [steering thinking](steering-thinking-exercise.md)
  - [x] [Effort](https://platform.claude.com/docs/en/build-with-claude/effort)
  - [x] [Fast mode](https://platform.claude.com/docs/en/build-with-claude/fast-mode)
- [x] Learn (Claude docs, checked 2026-11-20):
  - [x] Tokens: [Glossary, "Tokens"](https://platform.claude.com/docs/en/about-claude/glossary#tokens)
  - [x] Context window: [Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows)
  - [x] Sampling and temperature: [Glossary, "Temperature"](https://platform.claude.com/docs/en/about-claude/glossary#temperature) and the `temperature` parameter in the [Messages API reference](https://platform.claude.com/docs/en/api/messages/create)
  - [x] Non-determinism: the same glossary entry (temperature 0 is still not fully deterministic) and [Increase output consistency](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/increase-consistency)
  - [x] When Opus vs Sonnet vs Haiku: the model selection matrix in [Choosing a model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model#model-selection-matrix)
  - [x] Zero-shot, one-shot and few-shot: [Prompting best practices, "Use examples effectively"](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#use-examples-effectively)
- [x] **Build 0:** set up a TypeScript project with the Anthropic SDK and the API key read from env. Make one call to each model tier with the same prompt, and compare the latency, the `usage` token counts and the cost

[← Back to the study plan](../../study-plan.md)
