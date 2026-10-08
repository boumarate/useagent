- Keep a pull request to one change. Small pull requests get reviewed fast.
- Add or update a test for the behaviour you changed.
- Match the code around you. Read [`AGENTS.md`](AGENTS.md) and, for UI work,
  [`frontend/AGENTS.md`](frontend/AGENTS.md) first.
- User-visible text: plain words, no em dashes.
- Commit subjects in the imperative ("Add the Discord transport"), no `type(scope):` prefixes.

## Where things plug in

| You want to add | Start from |
|---|---|
| A messaging channel (Discord, Telegram, Teams) | [`backend/src/connectors/`](backend/src/connectors/): the `Transport` and `Renderer` contracts in `types.ts`, with `email/` as the worked example |
| A sandbox provider | [`packages/sandbox-contract`](packages/sandbox-contract) and the provider packages next to it; [`packages/conformance`](packages/conformance) is the acceptance suite |
| A UI component | [`frontend/components/base/`](frontend/components/base/), the shared kit; compose it rather than writing a new one |
| A VS Code extension | [`apps/vscode/`](apps/vscode/) |
| Docs | [`docs-site/`](docs-site/README.md) |

## Using AI tools

AI help is fine. Blind AI output is not.

- Understand every line you submit, run it yourself, and show it working in the app with your own screenshots or recording.
- Pull requests that look generated and untested are closed without a reply and labeled `spam`, so they don't count for Hacktoberfest. Signs we look for: no proof from a real run, code that ignores this repo's patterns or reinvents helpers that already exist, unrelated files changed, a description that only restates the issue, and failing checks nobody looked at.
- One pull request per issue, by the person who claimed it. Pull requests on issues someone else has taken, or several near-identical pull requests for the same bounty, count as farming.
- Bounties are paid only for the verified outcome the issue describes, never for a write-up, a plan, or an unfinished attempt.
- Answer review questions in your own words. If you can't explain your change, we can't merge it.

## Hacktoberfest

Merged, approved or `hacktoberfest-accepted` pull requests count. Pull requests that only
reformat, rename or add noise get the `spam` label and do not count.

## License and CLA

UseAgent is AGPL-3.0. By opening a pull request you agree to the
[Contributor License Agreement](CLA.md): you keep ownership of your work and grant the
maintainers the rights to ship it, including under commercial terms.