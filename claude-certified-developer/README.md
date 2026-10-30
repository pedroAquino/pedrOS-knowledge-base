# Claude Certified Developer – Foundations (CCDV-F): Learning Plan

> Created 2026-10-26. This is a map of **what to learn and where**. It does not teach the topics themselves.

## Goal

Pass **CCDV-F** at the first attempt. Registration needs a Claude Partner Network affiliation, and Geoff is setting that up for Smaply. Study starts now so it isn't blocked on that.

## Exam at a glance (official exam guide v1.0, effective July 2026)

| | |
|---|---|
| Items | 53 multiple-choice and multiple-response (each item says how many answers to pick) |
| Time | 120 min, proctored (Pearson VUE, online or test center), closed book |
| Pass | Scaled 720 on a 100–1,000 scale |
| Fee | $125 USD per attempt (partner-tier discounts may apply) |
| Validity | 12 months. On-time renewal is a free, non-proctored assessment |
| Retakes | Waits of 14, 30 and then 90 days. Max 4 attempts in any 12 months |
| Registration | Anthropic Partner Academy, then Pearson VUE. Reschedule at least 24 h ahead |

Source: [official exam guide PDF](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542875/Claude+Certified+Developer+%E2%80%93+Foundations+Exam+Guide.pdf). Once you have Partner Academy access, re-download it from there, because the guide is "subject to change without notice".

## Decisions behind this plan

- **Scope:** CCDV-F only.
- **Pace:** 8–10 weeks at about 3–4 h/week, roughly 35 h in total.
- **Baseline:** already comfortable with software-engineering basics and daily Claude Code use, so these are only light reviews. The Claude API, agents, MCP, caching, batch and evals are new, so they get the most time.
- **Budget:** mostly free resources, plus **one** paid practice-exam pack for the final readiness phase.
- **Hands-on:** small, generic **TypeScript** builds, one per domain block (1–3 h each). That includes one LangGraph comparison build, plus a final mini-app that ties everything together.
- **Order:** topics run in dependency order. Time per topic follows the exam weight.
- **Practice tests:** a diagnostic in week 1, checkpoint quizzes after each block, then full mocks. **Book the exam once mocks are at 80% or higher.**

## Files

| File | What it's for |
|---|---|
| [`exam-blueprint.md`](exam-blueprint.md) | All 8 domains and 25 sub-skills, with weights and a self-assessment checklist |
| [`study-plan.md`](study-plan.md) | Overview of the plan, with a link to each week and the time budget |
| `weeks/week-NN/week-NN.md` | One file per week: topics, resources, builds and checkpoints |
| [`resources.md`](resources.md) | Free and paid resources, mapped to the sub-skills they cover |

## How to use it

1. In week 1, rate every sub-skill in `exam-blueprint.md` (0 = never heard of it, 1 = know the idea, 2 = have used it, 3 = could explain the trade-offs).
2. Work through the weeks in `weeks/` one at a time, starting from `study-plan.md`. Tick off each build and checkpoint as you finish it.
3. Re-rate the blueprint after each checkpoint. Anything still at 2 or below by week 8 goes on the review list.
4. Book the exam only when two full mocks in a row are at 80% or higher **and** the partner signup is done.

## Notes

- Questions test judgment: several answers can look plausible. The best answer is usually the simplest, safest or cheapest option that meets the requirement (see the guide's sample questions).
- All third-party practice material is unofficial. Use it to practise the question style, not as a source of truth. When it disagrees with the Anthropic docs, trust the docs.
- Don't use real exam content ("dumps"). It breaks the exam NDA and can get the credential revoked.
