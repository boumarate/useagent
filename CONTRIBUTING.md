# Contributing to UseAgent

Thanks for helping. This page gets you from a fresh clone to a merged pull request.

## Pick an issue

- Browse [`good first issue`](https://github.com/useagenthq/useagent/issues?q=is%3Aopen+label%3A%22good+first+issue%22)
  for something you can finish in a few hours, or
  [`hacktoberfest`](https://github.com/useagenthq/useagent/issues?q=is%3Aopen+label%3Ahacktoberfest)
  for the full Hacktoberfest list.
- Comment on the issue that you're taking it. If nobody has pushed anything after a week,
  the issue is open again.
- Something not listed? Open an issue first and describe the change, so we can agree on the
  shape before you write it.

## Set up

You need [bun](https://bun.sh) (never npm) and Postgres 16+ with
[pgvector](https://github.com/pgvector/pgvector). The README's
[Get started](README.md#get-started) section has the commands. Each package installs on its
own; there are no workspaces.

Most UI and backend work needs no sandbox or model key: the tests run against a throwaway
database and fakes. A real agent run needs a sandbox provider key (Daytona is the easiest)
and a model key; see the [setup guide](https://useagent.org/docs/getting-started/quickstart/).

## Before you open a pull request

Run what CI runs: