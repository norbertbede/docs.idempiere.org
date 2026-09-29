---
name: docs-persona-test
description: Use when asked to run, re-run or extend the documentation persona test, grade the docs against reader questions, or update docs-review/control-checklist.md after documentation changes.
---

# Docs persona test

## Overview

Grade the docs by trying to answer real reader questions the way that reader navigates. The grade must depend only on the docs, so two runs on the same commit give the same result.

Files:
- `docs-review/control-checklist.md`: questions, grades, scorecard, contradictions.
- `docs-review/persona-test-report.md`: method, findings, backlog.

## Run

1. Record the run: `git rev-parse --short HEAD` and `git branch --show-current`.
2. Pick personas: the ones the user named, else all in the checklist.
3. For two or more personas, dispatch one read-only reviewer per persona, in parallel, with the reviewer brief below. For one persona, follow the brief yourself.
4. Merge the results into `control-checklist.md` (see Output).
5. Recount the scorecard from the question tables. Never edit totals by hand.
6. Tell the user: scores before and after, every grade change with its reason, new contradictions.

Do not edit anything under `docs/` during a run. Testing and fixing are separate steps.

## Grading rubric

Apply the first row that matches, top to bottom.

| Grade | Rule |
|---|---|
| ❌ | No page answers it, including search |
| 🔀 | Two pages give conflicting answers, **or** the answer is only in another persona's tab, **or** a page needed first comes later in the sidebar |
| 🟡 | The answer is partial, **or** only in `docs/release-notes/`, **or** needs 3+ hops from the tab's landing page, **or** only findable with search |
| ✅ | A complete answer on a page reachable from the start tab's landing page in 2 hops or fewer |

A hop is one click from the start tab's landing page: a card or a sidebar item. Following a link inside a page is also one hop.

A question's grade changes only when the docs changed or the rubric row applies differently. A different opinion is not a reason.

## Reviewer brief

Each reviewer receives: the persona row (start tab, goal), its question table, the rubric above, and these steps:

1. Open the start tab's sidebar (`sidebars.js`, `_category_.json`, `sidebar_position`). Read the landing page, then follow the sidebar.
2. For each question, find the answer, then apply the rubric.
3. Grep `docs/` as the search fallback.
4. Return one row per question: `id | grade | rubric row used | file path(s) | blocker (quote, one line)`.
5. Return a separate list of problems seen that no question covers.
6. Return new questions only under "Proposed questions". Never replace existing ones.

## Output

In `control-checklist.md`:
- Update each persona table (grade and "Where the answer is today").
- Set "Last run" to `date (commit)` for each tested persona.
- Append to `## Run log`: date, commit, personas, and one line per grade change: `S2 ❌ → 🔀: rubric row "conflicting answers" (install/docker.md vs downloading-installer.md)`.
- Add conflicts to `## Known contradictions`.
- Add unscored problems to `## Other findings`.
- Add proposed questions under `## Proposed questions`. The user decides whether they join the test.

## Common mistakes

| Mistake | Fix |
|---|---|
| Changing a grade because it "seems fairer" | Only a docs change or a different rubric row changes a grade |
| Grading by search hits alone | Navigate from the start tab first. Search only lowers a grade to 🟡 |
| Fixing docs during the run | Report the problem. Fix it in a separate step |
| Reporting findings only in chat | Write them to the checklist sections above |
| Comparing scores across rubric versions | After a rubric change, re-run every persona before comparing totals |
