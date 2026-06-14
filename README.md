# review-bot-test

<p align="center">
  <strong>End-to-end sandbox repository for testing the Code Review Agent GitHub App.</strong>
</p>

<p align="center">
  A tiny repo with one job: create predictable pull requests that prove the review bot works.
</p>

<p align="center">
  <a href="https://github.com/mitanshj07/code-review-agent"><strong>Main Agent Repo</strong></a>
  ·
  <a href="#how-to-use-this-repo"><strong>How To Test</strong></a>
  ·
  <a href="#what-this-repo-is-for"><strong>Purpose</strong></a>
</p>

---

## What This Repo Is For

`review-bot-test` is a fixture repository for validating [`code-review-agent`](https://github.com/mitanshj07/code-review-agent).

Use it to test:

- GitHub App installation flow
- pull request webhook delivery
- inline review comments
- secret scanning
- PR size cards
- auto-label behavior
- commit/branch naming feedback
- stale PR reminders
- conversational `@codescopeboit` replies

## Why Keep A Separate Test Repo?

Testing a GitHub App against its own source repo gets messy fast. A dedicated sandbox keeps review experiments safe:

| Benefit | Why it matters |
| --- | --- |
| Disposable PRs | Break things without touching production code |
| Predictable diffs | Easier to verify bot behavior |
| Safe secret fixtures | Test scanners with fake credentials only |
| Webhook confidence | Confirm install, permissions, and event payloads |
| Regression testing | Re-run the same scenario after agent changes |

## How To Use This Repo

1. Install the Code Review Agent GitHub App on this repository.
2. Create a branch.
3. Add a small intentional issue.
4. Open a pull request.
5. Confirm the bot posts:
   - PR size card
   - labels
   - inline findings
   - optional security alert comments
6. Mention the bot in a PR conversation to test chat replies.

Example test branch:

```bash
git checkout -b test/review-agent-smoke
echo "const apiKey = 'fake_test_key_1234567890';" > fake-secret.js
git add fake-secret.js
git commit -m "test: add review bot smoke fixture"
git push -u origin test/review-agent-smoke
```

Then open a PR and watch the agent respond.

## Suggested Test Cases

| Scenario | Expected agent behavior |
| --- | --- |
| Fake secret in added line | Secret scanner flags it before AI review |
| Huge generated file | PR size guard warns or blocks expensive review |
| Missing test near source change | Static dev guard suggests test coverage |
| Risky regex | Static guard flags possible performance issue |
| Bad branch name | Branch naming feedback appears |
| Weak commit message | Commit linter suggests improvement |
| `@codescopeboit` mention | Conversational reply is posted |

## Safety Notes

- Use fake secrets only.
- Do not commit real API keys, tokens, private keys, or passwords.
- Keep test PRs small and intentional.
- Close old PRs after validation so stale-reminder tests stay readable.

## Related

- Main project: https://github.com/mitanshj07/code-review-agent
- GitHub Apps docs: https://docs.github.com/apps

If the main agent is the engine, this repo is the crash-test track.
