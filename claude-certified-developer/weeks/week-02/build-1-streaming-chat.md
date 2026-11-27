# Build 1: streaming CLI chat

Goal: a terminal chat that holds a conversation, streams its replies, takes an image or a PDF, retries the failures that can be retried, and logs every request ID. Every part ends with something you can see in the terminal.

Sub-skills: Claude API Mechanics, Technical Fundamentals, Debugging and Error Handling (see the [blueprint](../../exam-blueprint.md)).

Build folder: `projects/week-02/build-1-streaming-chat/`, with `index.ts` as the entry point. The folder doesn't exist yet, so create it. Setup is in [`projects/README.md`](../../projects/README.md).

Run it from `projects/`: `npm start week-02/build-1-streaming-chat/index.ts`

Time: Parts A to G are the core, about 2 h. The stretch table is optional. The build is there to touch each topic, not to be a polished chat.

This file says what to build and where the facts are. The code is yours to write.

Sources (Claude docs and SDK, checked 2026-11-23). SDK names were checked against `@anthropic-ai/sdk` 1.10.0, the installed version. `npm ls @anthropic-ai/sdk` shows yours.

| Source | Parts | Look there for |
|---|---|---|
| [Using the Messages API](https://platform.claude.com/docs/en/build-with-claude/working-with-messages) | A | Request and response, [multiple turns](https://platform.claude.com/docs/en/build-with-claude/working-with-messages#multiple-conversational-turns) |
| [Create a Message](https://platform.claude.com/docs/en/api/messages/create) (API reference) | A, C | Every request and response field, such as [`system`](https://platform.claude.com/docs/en/api/messages/create#create.system) and [`stop_sequences`](https://platform.claude.com/docs/en/api/messages/create#create.stop_sequences) |
| [Prefix checks on thinking blocks](https://platform.claude.com/docs/en/build-with-claude/preserved-thinking/prefix-checks) | A, F | [The three habits](https://platform.claude.com/docs/en/build-with-claude/preserved-thinking/prefix-checks#prefix-check) of an append-only history |
| [Streaming messages](https://platform.claude.com/docs/en/build-with-claude/streaming) | B, C, E | [Event types](https://platform.claude.com/docs/en/build-with-claude/streaming#event-types), [delta types](https://platform.claude.com/docs/en/build-with-claude/streaming#content-block-delta-types), [error events](https://platform.claude.com/docs/en/build-with-claude/streaming#error-events), the example stream under [Basic streaming request](https://platform.claude.com/docs/en/build-with-claude/streaming#basic-streaming-request) |
| [Stop reasons and fallback](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons) | C | [Quick reference](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons#quick-reference), [stop reasons versus errors](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons#stop-reasons-vs-errors) |
| [Handle streaming refusals](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) | C | [Reset context after refusal](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals#reset-context-after-refusal) |
| [Vision](https://platform.claude.com/docs/en/build-with-claude/vision) | D | The `image` block, [formats](https://platform.claude.com/docs/en/build-with-claude/vision#supported-formats), [limits](https://platform.claude.com/docs/en/build-with-claude/vision#request-limits) |
| [PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support) | D | The `document` block, [limits](https://platform.claude.com/docs/en/build-with-claude/pdf-support#check-pdf-requirements), the [base64 example](https://platform.claude.com/docs/en/build-with-claude/pdf-support#option-2-base64-encoded-pdf-document) |
| [Errors](https://platform.claude.com/docs/en/api/errors) | E, F | [HTTP errors](https://platform.claude.com/docs/en/api/errors#http-errors), [error shapes](https://platform.claude.com/docs/en/api/errors#error-shapes), [request ID](https://platform.claude.com/docs/en/api/errors#request-id) |
| [Rate limits](https://platform.claude.com/docs/en/api/rate-limits) | E, F | [Response headers](https://platform.claude.com/docs/en/api/rate-limits#response-headers), `retry-after`, [the spend cap](https://platform.claude.com/docs/en/api/rate-limits#reaching-your-spend-cap) |
| [TypeScript SDK](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript) | B, E, F, G | [Streaming helpers](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#streaming-helpers), [errors](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#handling-errors), [request IDs](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#request-ids), [retries](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#retries), [timeouts](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#timeouts), [long requests](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#long-requests), [custom fetch](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#customizing-the-fetch-client), [log levels](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#log-levels) |
| SDK repo: [README](https://github.com/anthropics/anthropic-sdk-typescript) and [`helpers.md` at 1.10.0](https://github.com/anthropics/anthropic-sdk-typescript/blob/sdk-v1.10.0/helpers.md) | B, C | `MessageStream` events and methods |
| Installed SDK source: `projects/node_modules/@anthropic-ai/sdk/src/` | E, F, G | `core/error.ts` (error classes), `client.ts` (options, retry and timeout logic), `core/streaming.ts` (SSE parsing) |

## What it covers

| Week 2 topic | Part | Where it shows up |
|---|---|---|
| Messages API request and response shape | A, E | One response printed whole. The HTTP request as your own `fetch` sees it |
| Multi-turn conversation state | A, F | The history array. What happens to it when a turn fails |
| System prompts | A | Top-level `system`, fixed for the conversation |
| Streaming | B | `client.messages.stream()`, text printed as it arrives |
| Streaming event types | C, E | Table C1. The SSE frames you write by hand for the `midstream` fault |
| Stop reasons | C | Table C2 and the branch on `stop_reason` |
| Vision and PDF input | D | `/attach` with `image` and `document` blocks |
| Error codes | E | Table E1 |
| Rate limits | E, F | Rate-limit headers in table E2. `retry-after` on the fake 429 |
| Which errors to retry, which to fix | E, F | Last columns of table E1, then the retry policy |
| Retries with backoff | F | Your own backoff loop |
| SDK retry and timeout settings | G | `maxRetries` and `timeout`, tables G1 and G2 |
| Request IDs | A, B, E, F | Status line, error output, per-attempt log |

## Setup

- Model: `claude-haiku-5-5`. It's the cheapest current model, and it takes images and PDFs. IDs and prices are in the [models overview](https://platform.claude.com/docs/en/models/overview#latest-models-comparison).
- `max_tokens: 1024`, unless a part says otherwise.
- Thinking is on by default on this model, and the thinking text comes back empty ([Controlling thinking display](https://platform.claude.com/docs/en/build-with-claude/thinking#controlling-thinking-display)). Leave it alone. You'll meet the `thinking` block in Parts A and C.
- Chat text goes to stdout. Status lines, logs and debug output go to stderr. Then `2> trace.log` gives you a trace file.
- Keep the knobs as constants at the top of `index.ts`: model, `max_tokens`, system prompt, SDK `maxRetries`, SDK `timeout`, your own maximum attempts. The experiments change them.
- Sample files: one PNG or JPEG screenshot and one short PDF (2 or 3 pages). They and `trace.log` aren't git-ignored, so keep them out of commits.

Commands the chat understands:

| Command | What it does | Added in |
|---|---|---|
| `/reset` | Clears the history | A |
| `/exit` | Quits | A |
| `/attach <path>` | Attaches a file to the next message | D |
| `/fault <name> [n]` | Makes the next `n` HTTP calls fail (default 1). `/fault off` disarms it | E |

## Part A: multi-turn loop with a system prompt (~15 min)

Start without streaming: `client.messages.create()`.

- Read lines with `node:readline/promises`. No new dependency.
- Keep the conversation in one `Anthropic.MessageParam[]`. The API is stateless, so every request carries the whole array.
- After each reply, push the assistant turn back with its whole `content` array, not just the text. That's habit 1 of [the three habits](https://platform.claude.com/docs/en/build-with-claude/preserved-thinking/prefix-checks#prefix-check).
- Set `system` once, as a constant, and don't change it mid-conversation (habit 2). Pick a prompt whose effect is easy to see, such as "Answer in one short sentence." See [Give Claude a role](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#give-claude-a-role).
- On the first reply only, print the whole response object. Print `response._request_id` separately: `console.log` doesn't show it.
- After every reply, print `usage.input_tokens` and `usage.output_tokens` to stderr.
- Let TypeScript infer the response type. Annotating it as `Anthropic.Message` hides `_request_id`.

**Done when:**

- [ ] It knows in turn 3 the name you gave in turn 1, and has forgotten it after `/reset`
- [ ] Every reply follows the system prompt
- [ ] You found `id`, `role`, `content`, `stop_reason`, `usage` and the request ID in the printout, and noted which block types `content` holds
- [ ] Table A is filled in

| Turn | What you sent | `input_tokens` | `output_tokens` |
|---|---|---|---|
| 1 | "My name is …" | | |
| 2 | Any question | | |
| 3 | "What's my name?" | | |

## Part B: stream the reply (~15 min)

- Switch the request to `client.messages.stream()`. Print each piece of text with `process.stdout.write` as it arrives. Use `.on("text", …)`, or `for await` over the events.
- Take the complete message from `await stream.finalMessage()` and push its `content` to the history, as in Part A.
- After each reply, print a status line to stderr: request ID (`stream.request_id`), `stop_reason`, token counts, time to first text, total time.

**Done when:**

- [ ] A long answer appears bit by bit, not in one block
- [ ] The name test from Part A still passes
- [ ] Every status line carries a `req_…` ID
- [ ] Table B is filled in. Use the same prompt both ways: "Write about 300 words on why the sky is blue."

| Mode | Time to first visible text (ms) | Total time (ms) | `output_tokens` |
|---|---|---|---|
| Not streaming (Part A code) | | | |
| Streaming | | | |

## Part C: events and stop reasons (~20 min)

- Add a debug switch that prints every event's `type` to stderr as it arrives, plus `delta.type` on `content_block_delta`. Use `for await (const event of stream)` or `.on("streamEvent", …)`.
- After every reply, branch on `stop_reason`:

| `stop_reason` | What the build does |
|---|---|
| `end_turn`, `stop_sequence` | Nothing extra |
| `max_tokens` | Prints a "truncated" notice |
| `refusal` | Says so and prints `stop_details`. See [Reset context after refusal](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals#reset-context-after-refusal) |
| Anything else | Prints the value |

- A turn that ends with `refusal`, or with no `text` block at all, doesn't enter the history. Remove its user message too.

**Done when:**

- [ ] Table C1 is filled in for one short reply: "Explain server-sent events in two sentences."
- [ ] Under table C1, you wrote the order of event types you saw, with repeats collapsed
- [ ] Table C2 is filled in
- [ ] With `max_tokens: 16` the chat prints the notice, doesn't crash, and the next turn works. If you used `finalText()`, this is where it throws

Table C1: one reply, event by event.

| Event | Count | What it carries |
|---|---|---|
| `message_start` | | |
| `content_block_start` | | |
| `content_block_delta` with `thinking_delta` | | |
| `content_block_delta` with `signature_delta` | | |
| `content_block_delta` with `text_delta` | | |
| `content_block_stop` | | |
| `message_delta` | | |
| `message_stop` | | |
| `ping` | | |

Table C2: stop reasons.

| # | Condition | `stop_reason` | `stop_sequence` | Any text in the reply? | Error thrown? |
|---|---|---|---|---|---|
| 1 | Short question, `max_tokens: 1024` | | | | |
| 2 | "Write about 300 words on why the sky is blue.", `max_tokens: 100` | | | | |
| 3 | Same prompt, `max_tokens: 16` | | | | |
| 4 | `stop_sequences: ["END"]` and "Count from 1 to 5, write END, then count from 6 to 10." | | | | |

The docs list seven values ([Quick reference](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons#quick-reference)). `tool_use` and `pause_turn` need tools, which is week 5. Don't try to provoke a real `refusal`. The stretch table has a way to fake one.

## Part D: attach an image or a PDF (~15 min)

- `/attach <path>` reads the file with `node:fs/promises`, base64-encodes it and holds it for the next user message.
- That message's `content` is an array: the file block first, then a `text` block.
- An image is an `image` block with a `base64` source. Its `media_type` is one of `image/jpeg`, `image/png`, `image/gif`, `image/webp`.
- A PDF is a `document` block with a `base64` source and `media_type: "application/pdf"`.
- Pick the media type from the file extension. For an unknown extension or a missing file, print a local message and send nothing.
- Types to lean on: `Anthropic.ImageBlockParam`, `Anthropic.DocumentBlockParam`.

**Done when:**

- [ ] It describes your image correctly, and answers a text-only follow-up about it in the next turn
- [ ] The same works for the PDF
- [ ] `/attach notes.txt` and `/attach missing.png` each print a local message, and no status line appears
- [ ] Table D is filled in, all in one conversation

| Turn | What you sent | `input_tokens` | `output_tokens` |
|---|---|---|---|
| 1 | Text only | | |
| 2 | Image and "What is in this image?" | | |
| 3 | Text-only follow-up about the image | | |
| 4 | PDF and "Summarise this in two lines." | | |
| 5 | Text-only follow-up about the PDF | | |

## Part E: see every failure once (~25 min)

No handling yet. First find out what each failure looks like. Keep SDK `maxRetries: 0` in this part, so each failure surfaces at once.

For every caught error, print `err.name`, and if it is an `Anthropic.APIError` also `err.status`, `err.type`, `err.requestID` and `err.message`. The class list is the map at the bottom of the installed `core/error.ts`.

**Real failures.** Write a small `probe-errors.ts` next to `index.ts`. It makes one `client.messages.create()` call for each of rows 1 to 4 of table E1, each in its own `try`/`catch`, with `max_tokens: 16`. Run it with `npm start week-02/build-1-streaming-chat/probe-errors.ts`.

**Fake failures.** You can't order a real 429 or 529. So give the client a `fetch` of your own that answers some calls itself and passes the rest on:

```ts
import type { ClientOptions } from "@anthropic-ai/sdk";

const faultyFetch: NonNullable<ClientOptions["fetch"]> = async (input, init) => {
  // while a fault is armed: return a canned Response, or never return
  return fetch(input, init);
};
// new Anthropic({ fetch: faultyFetch, maxRetries: 0 })
```

Why a custom `fetch`: it is the lowest hook the SDK has. It sits under the SDK's retry loop and timeout timer, so a 429, a 529, a mid-stream error and a hang all go through the SDK's real code paths, in one file and with no server.

- Count every call. Print the call number, the time, the method, the URL and the `anthropic-version` and `x-stainless-retry-count` request headers to stderr. `init.headers` is a `Headers` object. Once, print the top-level keys of the JSON in `init.body`.
- Never print the `authorization` header. It holds your key.
- An error response is the docs' [error shape](https://platform.claude.com/docs/en/api/errors#error-shapes) as a JSON body, with `content-type: application/json` and a made-up `request-id` header such as `req_fake_1`.
- `/fault <name> [n]` arms a fault for the next `n` calls. After that, calls pass through again. `/fault off` disarms what is left: you need it after a count bigger than the calls a turn makes.

| Fault | What the fake `fetch` does | Stands for |
|---|---|---|
| `429` | Status 429, type `rate_limit_error`, header `retry-after: 2` | A rate limit |
| `529` | Status 529, type `overloaded_error` | Overload before the stream starts |
| `midstream` | Status 200 with `content-type: text/event-stream`. The body is one string of SSE frames: copy `message_start`, `content_block_start` and one `content_block_delta` from the example response under [Basic streaming request](https://platform.claude.com/docs/en/build-with-claude/streaming#basic-streaming-request), then add the frame under [Error events](https://platform.claude.com/docs/en/build-with-claude/streaming#error-events) | Overload after the 200 was already sent |
| `hang` | Never answers. Rejects when `init.signal` fires `abort` | A server that goes silent. Used in Part G |

`hang` must listen to `init.signal`. If it doesn't, the SDK's timeout can't end the call. Set the SDK `timeout` to a few seconds before you use it: the default is 10 minutes.

**Done when:**

- [ ] `/fault 529` followed by any message shows your call line, the fake request ID and the error fields
- [ ] Table E1 is filled in: rows 1 to 4 from `probe-errors.ts`, rows 5 to 7 from the chat
- [ ] The "Retry or fix?" column of table E1 is filled in from the docs' [HTTP errors](https://platform.claude.com/docs/en/api/errors#http-errors) list and the SDK's [Retries](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#retries) section, and the last column says what your build will do
- [ ] Table E2 is filled in from one real, successful response. Read the headers from `stream.response?.headers`, or from `.withResponse()` on a `create()` call

Table E1: the failures.

| # | Trigger | `status` | `type` | `name` | Request ID? | Retry or fix? | What the build does |
|---|---|---|---|---|---|---|---|
| 1 | A client with `apiKey: "sk-ant-not-a-real-key"` | | | | | | |
| 2 | `model: "claude-haiku-0-0"` | | | | | | |
| 3 | `messages` that ends with an `assistant` turn | | | | | | |
| 4 | Request option `timeout: 1` | | | | | | |
| 5 | `/fault 429` | | | | | | |
| 6 | `/fault 529` | | | | | | |
| 7 | `/fault midstream` | | | | | | |

Table E2: rate-limit headers.

| Response header | Your value |
|---|---|
| `anthropic-ratelimit-requests-limit` | |
| `anthropic-ratelimit-requests-remaining` | |
| `anthropic-ratelimit-input-tokens-limit` | |
| `anthropic-ratelimit-input-tokens-remaining` | |
| `anthropic-ratelimit-output-tokens-limit` | |
| `request-id` | |

## Part F: retry what can be retried (~20 min)

- Keep SDK `maxRetries: 0`. Your loop does the retrying here.
- Wrap the whole turn in a retry loop: opening the stream and reading it to the end.
- Retry only the rows you marked "retry" in table E1. For the others, print what to fix and the request ID, then go back to the prompt.
- Decide from `err.type` as well as `err.status` and the class. Row 7 of table E1 shows why.
- Backoff: exponential, capped, with jitter, and a maximum number of attempts. When the error has a `retry-after` header (`err.headers?.get("retry-after")`, in seconds), wait that long instead. Print every wait.
- A turn is all or nothing. If the stream breaks after some text was shown, print a notice and start the reply again from the top. If the turn fails for good, the history is what it was before the turn.
- Log one line to stderr per attempt: time, turn, attempt, request ID, outcome (`stop_reason` and tokens, or status and error type), wait before the next attempt.
- To compare your backoff with the SDK's, read `retryRequest` and `calculateDefaultRetryTimeoutMillis` in the installed `client.ts`.

**Done when:**

- [ ] `/fault 429 2`: the log shows two failed attempts with their fake request IDs and two waits of about 2 s, then the reply streams
- [ ] `/fault midstream`: some text, a notice, then the complete reply. In the next turn, "Repeat your last answer" shows one clean reply in the history
- [ ] `/fault 529 20`: the build gives up after your maximum attempts and prints the last request ID. After `/fault off`, the next turn works
- [ ] With a wrong model ID, the turn fails once, with no retry, and the message says what to fix
- [ ] With `2> trace.log`, one failed turn can be followed attempt by attempt in the file

## Part G: SDK retry and timeout settings (~15 min)

`maxRetries` and `timeout` (in milliseconds) exist on the client and per request. Per request, they go in the second argument of `create()` and `stream()`.

To watch the SDK's own retries, set `logLevel: "info"` on the client, or `ANTHROPIC_LOG=info`. Those lines go to stdout unless you also pass `logger: new console.Console(process.stderr)`.

- [ ] Fill in table G1. Count the HTTP calls with your fake `fetch`. "Your attempts: 1" means your own loop doesn't retry. Run `/fault off` between rows

| # | SDK `maxRetries` | Your attempts | Fault | HTTP calls | Waits between calls (ms) | Outcome |
|---|---|---|---|---|---|---|
| 1 | 2 | 1 | `/fault 429 2` | | | |
| 2 | 2 | 1 | `/fault 529 3` | | | |
| 3 | 2 | 1 | `/fault midstream` | | | |
| 4 | 2 | 4 | `/fault 529 20` | | | |

- [ ] Fill in table G2, with your own loop off and `/fault off` between rows. For rows 4 and 5, use a client that has your counting `fetch` and no `timeout` option

| # | Setup | HTTP calls | Elapsed (ms) | Error `name` |
|---|---|---|---|---|
| 1 | `/fault hang 10`, `timeout: 2000`, `maxRetries: 2` | | | |
| 2 | `/fault hang 10`, `timeout: 2000`, `maxRetries: 0` | | | |
| 3 | As row 2, plus request option `timeout: 500` | | | |
| 4 | No fault. `create()` without streaming, `max_tokens: 64000` | | | |
| 5 | As row 4, with `stream()` | | | |

The docs describe row 4 in two places, [Timeouts](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#timeouts) and [Long requests](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript#long-requests). Record what 1.10.0 does.

- [ ] Choose the chat's final settings (SDK `maxRetries`, `timeout`, your attempts) and write one line on why at the top of `index.ts`
- [ ] `npm run typecheck` passes

## Stretch

Optional. Nothing here is needed for the week.

| Idea | What to do | Source |
|---|---|---|
| More faults | `500` (type `api_error`), `network` (the fake throws `TypeError("fetch failed")`), `drop` (the body stream errors after two frames). Add a row to table E1 for each | [HTTP errors](https://platform.claude.com/docs/en/api/errors#http-errors) |
| Resume instead of restart | After a `midstream` failure, keep the partial text and ask the model to continue, the way the docs describe for Claude 4.6 and later | [Error recovery](https://platform.claude.com/docs/en/build-with-claude/streaming#error-recovery) |
| Fake refusal | A fault that returns a complete stream: `message_start`, a `message_delta` with `stop_reason: "refusal"` and a `stop_details` object, `message_stop`. Check your Part C branch | [Handle streaming refusals](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) |
| Ctrl+C stops the reply, not the chat | Call `stream.abort()` and catch `Anthropic.APIUserAbortError` | [`helpers.md`](https://github.com/anthropics/anthropic-sdk-typescript/blob/sdk-v1.10.0/helpers.md) |
| Raw SSE | Run the curl example under Basic streaming request with `-N`. Compare the frames with table C1 | [Basic streaming request](https://platform.claude.com/docs/en/build-with-claude/streaming#basic-streaming-request) |
| Other ways to pass a file | A `url` source. Or upload once with `client.files.upload()` and send a `file` source with the `file_id` | [PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support#send-your-first-pdf-request), [Files API](https://platform.claude.com/docs/en/build-with-claude/files) |
| A stream that outlives `timeout` | Set `timeout: 2000` and ask for an answer that streams for longer. Is it cut? Find the reason in `fetchWithTimeout` in the installed `client.ts` | Installed SDK source |
| New instruction mid-chat | A `/system` command that appends a `role: "system"` message instead of editing `system` | [System role in messages](https://platform.claude.com/docs/en/build-with-claude/working-with-messages#system-role-in-messages) |
| Mock server instead of a fake `fetch` | Point the client's `baseURL` at a small `node:http` server that returns the same canned responses. Note what you lose compared with the fake `fetch` | `ClientOptions` in the installed `client.ts` |

## Questions

Claude API Mechanics:

- [ ] The API is stateless. What went over the wire on turn 3 of table A? What did the image cost on the turn after you attached it (table D)?
- [ ] Which event carries `stop_reason`, and which carries the final `output_tokens`? What would your status line miss if you stopped reading at the last `text_delta`?
- [ ] You sent the file as base64. The docs give two other source types. When is each the better choice?

Technical Fundamentals:

- [ ] List what the SDK did for you that the REST API doesn't. Tables C1, E1 and G1 hold the evidence. Name one case where the wrapper hid something you needed to see
- [ ] The Messages API streams with server-sent events on one HTTP response. How does that differ from a websocket: who can send, how the next user turn travels, what a dropped connection means? Why is it enough for this chat?

Debugging and Error Handling:

- [ ] Sort these into "integration layer" and "model output", and give the recovery for each: a 401, row 3 of table E1, a 429, a timeout, `midstream`, `stop_reason: "max_tokens"`, `stop_reason: "refusal"`. Which of them never reach your `catch`?
- [ ] A 429 arrives with no `retry-after` header. Which case on the rate limits page won't go away with retries, and how can code tell it apart?
- [ ] Take one failed turn from `trace.log`. From the log alone: what failed, on which attempt, and was the retry right? What would you send to Anthropic support?
- [ ] Why turn the SDK's retries off when your own loop is on (table G1, row 4)? What's the worst-case wait for one turn with your final settings?

[← Back to week 2](week-02.md)
