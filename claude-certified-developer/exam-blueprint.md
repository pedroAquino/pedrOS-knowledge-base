# CCDV-F Exam Blueprint and Self-Assessment

Taken from the official exam guide v1.0 (July 2026), section 6. Weights are each sub-skill's share of the **whole** exam. With 53 items, 1% is roughly half a question.

**Rating scale:** 0 = never heard of it · 1 = know the idea · 2 = have used it · 3 = could explain the trade-offs. Fill in the **Start** column in week 1 and **Wk 8** in week 8. Target is 3 for everything at 4% or above, and at least 2 for the rest.

**Week** = the week file in `weeks/` where the sub-skill is covered.

## Domain 1: Agents and Workflows (14.7%)

| | Sub-skill | Weight | What's in scope | Week | Start | Wk 8 |
|---|---|---|---|---|---|---|
| [ ] | Agent Architecture | 4.5% | When to use a workflow vs an agent, manager/supervisor hierarchies, how subagents improve task execution | 7 | | |
| [ ] | Agent Construction with Claude | 5.3% | Claude Agent SDK, custom agent loops and harnesses, managed agents (self-hosted vs Anthropic-hosted), hooks for deterministic actions | 7 | | |
| [ ] | Agent Patterns and Frameworks | 4.9% | Tool-use loops, sub-agents, memory, context-window management, frameworks (Strands, LangGraph, PydanticAI) | 7 | | |

## Domain 2: Applications and Integration (33.1%), the biggest domain

| | Sub-skill | Weight | What's in scope | Week | Start | Wk 8 |
|---|---|---|---|---|---|---|
| [ ] | Understanding Requirements | 3.4% | Turning business requirements and solution architecture into functional and infrastructure requirements | 9 | | |
| [ ] | Systems Life Cycle | 2.8% | Life-cycle frameworks for building, running and maintaining IT systems | 9 | | |
| [ ] | Claude API Mechanics | 6.8% | Messages, tools, streaming, vision, thinking, caching, third-party vendors (Bedrock / Vertex), Messages API data access patterns, Batch API, realtime vs batch | 2–3 | | |
| [ ] | Software Engineering Foundations | 7.4% | REST, JSON, async code, version control, SDLC integration, code review, refactoring (small and large) | light review, 9 | | |
| [ ] | Claude Application Design | 8.6% | How Claude reads instructions in each interface (Claude Code, Desktop, claude.ai, API, SDKs), content boundaries, schema design, session hygiene, plugin management | 4, 9 | | |
| [ ] | Configuration Management | 4.1% | CLAUDE.md, settings.json, model version pinning, prompt versioning, plugin dependencies | 3, 8 | | |

## Domain 3: Claude Code (3.1%)

| | Sub-skill | Weight | What's in scope | Week | Start | Wk 8 |
|---|---|---|---|---|---|---|
| [ ] | Claude Code Operation | 3.1% | Rules, Skills, Commands, Agents, Agent Memory, session management, slash commands (built-in and custom), headless mode, streaming mode, auto mode, the CLAUDE.md hierarchy, repo init, settings.json | light review, 8 | | |

## Domain 4: Eval, Testing, and Debugging (2.6%)

| | Sub-skill | Weight | What's in scope | Week | Start | Wk 8 |
|---|---|---|---|---|---|---|
| [ ] | Debugging and Error Handling | 2.6% | Identifying error types, choosing a recovery strategy, trace analysis, telling integration-layer problems apart from model-output problems | 2, 8 | | |

> The domain is small, but sections 2 and 7 of the guide also mention evals, trace analysis and production monitoring. Expect evals to come up inside other domains as well.

## Domain 5: Model Selection and Optimization (16.8%)

| | Sub-skill | Weight | What's in scope | Week | Start | Wk 8 |
|---|---|---|---|---|---|---|
| [ ] | LLM Fundamentals | 5.2% | Tokens, context windows, sampling, non-determinism, next-token generation; fast mode, extended and adaptive thinking, effort levels; zero-shot, single-shot and multi-shot prompting | 1 | | |
| [ ] | Technical Fundamentals | 6.1% | Integrating with SDKs that wrap REST APIs, websockets | 1–2 | | |
| [ ] | Model Selection and Tradeoffs | 2.7% | When to use Opus, Sonnet or Haiku, adaptive thinking support, quality vs latency vs cost, breaking changes between model releases | 1 | | |
| [ ] | Cost and Token Management | 2.8% | Tracking token usage, cost modeling, prompt caching, cache checkpointing | 3 | | |

## Domain 6: Prompt and Context Engineering (11.0%)

| | Sub-skill | Weight | What's in scope | Week | Start | Wk 8 |
|---|---|---|---|---|---|---|
| [ ] | Context Engineering | 3.8% | Managing the context window, avoiding drift and bloat (pruning tool output, compaction), isolating context with subagents or multi-step workflows | 4, 7 | | |
| [ ] | Prompt Engineering | 4.6% | Clear instructions, few-shot examples, system vs user placement, output constraints, where instructions go across components, iterative refinement, input sanitization | 4 | | |
| [ ] | Output Handling | 2.6% | Structured output, validating responses, defensive parsing, being skeptical of confident output | 4 | | |

## Domain 7: Security and Safety (8.1%)

| | Sub-skill | Weight | What's in scope | Week | Start | Wk 8 |
|---|---|---|---|---|---|---|
| [ ] | AI Application Security | 3.2% | Prompt injection, jailbreak defense, handling untrusted input, preventing data leaks, PII, authentication and authorization (authN/Z), confidentiality and integrity | 8 | | |
| [ ] | Guardrails and Safe Deployment | 2.3% | Content policy, layered guardrails, secure-by-design, identity and access management (IAM), least privilege | 8 | | |
| [ ] | Claude Hooks | 1.0% | Hooks as guardrails against destructive actions | 7–8 | | |
| [ ] | Identity, Secrets, and Key Management | 1.6% | Secrets and API keys in dev vs prod, identity validation, access approval and access levels, monitoring | 8 | | |

## Domain 8: Tools and MCPs (10.6%)

| | Sub-skill | Weight | What's in scope | Week | Start | Wk 8 |
|---|---|---|---|---|---|---|
| [ ] | Tool Implementation | 4.4% | Tool use and function calling, writing tool descriptions, error handling, dispatching tools in an agent loop, client-side vs server-side tools, approval patterns, designing a tool set | 5 | | |
| [ ] | MCP Server Development | 2.1% | Writing and deploying servers, connecting them to Claude apps, resources, tools and prompts, transports (stdio, sockets), client vs server | 6 | | |
| [ ] | Agentic Customization | 4.1% | Choosing between built-in tools, custom tools, Skills and MCP | 6 | | |

## Biggest sub-skills (prioritise these)

1. Claude Application Design: 8.6%
2. Software Engineering Foundations: 7.4% (you already know most of it, so review only)
3. Claude API Mechanics: 6.8%
4. Technical Fundamentals: 6.1%
5. Agent Construction with Claude: 5.3%
6. LLM Fundamentals: 5.2%
7. Agent Patterns and Frameworks: 4.9%

Together these seven make up **about 44%** of the exam.
