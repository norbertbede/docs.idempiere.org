# Documentation review: persona test report

This report explains why the documentation was reorganized, how we tested it, what we found, what this branch changes, and what is still required.

The reusable question list is in [control-checklist.md](./control-checklist.md).

## Contents

1. [Why we reviewed the docs](#why-we-reviewed-the-docs)
2. [Method](#method)
3. [Results](#results)
4. [What this branch changes](#what-this-branch-changes)
5. [What is still required](#what-is-still-required)
6. [How to re-run the test](#how-to-re-run-the-test)

## Why we reviewed the docs

Most of the site was moved from the old wiki (wiki.idempiere.org) page by page. The content is valuable, but it reads like a set of wiki pages rather than documentation for someone who wants to learn and use iDempiere.

A first review of the 491 pages found:

- **The site was organized by release, not by task.** 406 pages, about 65% of all text, were "New features" articles sorted by version. A consultant looking for how accounting works had to know which release introduced it.
- **Page metadata was wiki leftovers.** 352 of 461 page descriptions were lines such as `**Developer:** Carlos Ruiz`. Search results, link previews and AI tools had no summary of what a page covers.
- **Pages opened with filing labels.** 381 pages started with `**Goal:** Functional` or similar, not with what the feature does.
- **Many pages were very short.** 228 pages had fewer than 150 words. The median page had 164 words.
- **The same topic lived in several places.** There were three "Purpose" introductions, four pages on how to contribute, and four different 2Pack file naming rules.
- **The core concepts were never explained.** No page explained the Application Dictionary, even though every developer page depends on it.

We compared the site with documentation that works well for mixed audiences: React, Angular, Next.js and Vercel, Stripe, the Diátaxis framework, and ERP projects Odoo, metasfresh, ERPNext, Tryton and Microsoft Business Central. They share a few patterns:

- Separate top-level sections for each audience: users, administrators, developers, integrators.
- One early page that explains the mental model of the product.
- Evergreen how-to pages, with release notes kept separate.
- Integration and API documentation as a named section of its own.
- A real one-line summary on every page, and a machine-readable index for AI tools.

## Method

We tested the documentation the way readers use it: by trying to answer real questions.

### Personas

| Persona | Starts at | Goal |
|---|---|---|
| Consultant or end user | Guide | Set up and demo iDempiere for a small distribution company |
| Sysadmin | Install & upgrade | Install for a customer, run it in production, upgrade from 12 to 14 |
| Plugin developer | Develop | Customize iDempiere with plugins, without changing core |
| Integrator | Integrate | Sync an e-shop and other systems with iDempiere data |
| Frontend developer | Integrate, and Develop → Customize the UI | Build a custom web or mobile UI, and change the look of the built-in web UI |
| Evaluator | Home page | Decide in 30 minutes whether iDempiere fits |
| AI agent | Any page and its metadata | Get precise, current facts to help a developer |

### Steps

1. **Write the questions.** For each persona, we wrote the 6 to 15 questions a real person asks first, based on the common "top tasks" for that kind of documentation. For example, a sysadmin first asks about system requirements, the current stable version and backups.
2. **Answer from the docs only.** For each question, we navigated like that reader: the navbar tab for their role, then the section landing page, then the sidebar. Search was used only as a fallback. We noted when the only answer was in release notes or in another audience's section.
3. **Grade each answer.** Apply the first row that matches, top to bottom:

   | Grade | Rule |
   |---|---|
   | ❌ | No page answers it, including search |
   | 🔀 | Two pages give conflicting answers, or the answer is only in another persona's tab, or a page needed first comes later in the sidebar |
   | 🟡 | The answer is partial, or only in release notes, or needs 3 or more hops from the tab's landing page, or only findable with search |
   | ✅ | A complete answer on a page reachable from the start tab's landing page in 2 hops or fewer |

   A grade changes only when the docs change or a different rubric row applies, never because of a different opinion.

4. **Record evidence.** For each question we recorded the file where the answer is, what blocked the reader, and a suggested fix.
5. **Check facts across pages.** We listed facts that pages state differently, such as the current stable version.

### Limits of this test

- The personas were simulated by AI reviewers, not observed with real users. The questions and grades should be checked by community members in each role.
- Search was simulated by searching the source files, not with the site's search box.
- The test ran once, on the reorganized structure. There is no score for the old structure to compare against.
- External documentation, such as the REST API docs, was only checked where our pages link to it.
- The questions were written from best-practice "top tasks", not from real community questions. Questions asked in the forums, the mailing list and Mattermost were ingested into the CloudEmpiere knowledge hub, but that source was not available during this review. The production hub holds only Application Dictionary metadata.


## Results

### Scorecard

| Persona | Questions | ✅ | 🟡 | ❌ | 🔀 |
|---|---|---|---|---|---|
| Consultant or end user | 15 | 1 | 9 | 5 | 0 |
| Sysadmin | 15 | 1 | 9 | 1 | 4 |
| Plugin developer | 15 | 2 | 6 | 4 | 3 |
| Integrator | 12 | 3 | 5 | 4 | 0 |
| Frontend developer | 15 | 2 | 8 | 4 | 1 |
| Evaluator | 12 | 1 | 7 | 3 | 1 |
| AI agent | 6 | 3 | 1 | 1 | 1 |
| **Total** | **90** | **13** | **45** | **22** | **10** |

Only 13 of 90 questions, 14%, get a clear answer where the reader looks first. Most answers exist somewhere but are hard to find, incomplete or contradicted by another page.

The Sysadmin row was re-graded with the strict rubric from the `docs-persona-test` skill. The other rows come from the first run, which used looser grade definitions. Re-run them with the skill before comparing totals over time.

### Findings by persona

**Consultant or end user.** Only "What is a Tenant?" is answered well, in the Vocabulary page. The flows a consultant needs for a first demo have no pages: entering a Sales Order through to invoice, what Complete, Void and Reverse mean, creating Products and Price Lists, and receiving and shipping goods. For 10 of 15 topics, search leads to release notes or developer pages.

**Sysadmin.** Installing works: Docker and the installer pages are usable. Running in production is not covered. There is nothing on backups, log files, a systemd service, HTTPS, monitoring or memory tuning. Pages disagree on the current stable version and the minimum PostgreSQL version. The upgrade guide, the migration notes and the Compare versions page do not link to each other.

**Plugin developer.** No page explains the Application Dictionary, the architecture, or the X_, I_ and M model classes. The only explanation of the model classes is inside the Model Factory page. There is no page on adding a column to an existing table, testing, or where to find the Javadoc. No page says when to use a callout, an event handler, a model validator or a process. Migration scripts are documented only for core contributors.

**Integrator.** The Integrate section routes readers well, and every link works. Readers cannot find how to install the REST API, how to get a local test server, or how to configure CORS. The concepts an outsider needs, such as table naming and document status, are not explained. Integrate does not link to the Guide vocabulary.

**Frontend developer.** For a separate web or mobile app, the REST login and query pages work. A local backend with the REST API, CORS, typed models and showing a report as PDF are missing or only linked out. For the built-in web UI, ZK is never introduced, so a React or Angular developer does not see why a form is written in Java. Branding, custom CSS, status lines and no-code dashboard content are documented only in release notes, and the themes page covers the approach from before iDempiere 9. No page helps decide between building a separate frontend and customizing the built-in UI.

**Evaluator.** The home page says "Community Powered Documentation" and does not say what iDempiere is. There is no page on license and cost, modules, tech stack, partners, release cadence or roadmap. Demo links are at the bottom of two pages, and each gives different versions.

**AI agent.** Clear technical answers exist, for example on callouts versus event handlers. But the agent gets three different answers for the current stable version. There is no `llms.txt` index. 350 release notes have boilerplate descriptions, and the Guide and Plugins pages have none.

### Problems shared by several personas

| Problem | Personas affected |
|---|---|
| No single source for versions: stable, development, Java, database, Docker tag | Sysadmin, evaluator, AI agent, consultant |
| Core concepts never explained: Application Dictionary, table naming, document status | Plugin developer, integrator, consultant, frontend developer |
| No choice between a separate frontend and the built-in ZK UI, and ZK is never introduced | Frontend developer, integrator, evaluator |
| How-to content that exists only in release notes | Consultant, plugin developer, sysadmin |
| Missing links between related pages | Sysadmin, integrator, consultant |
| Missing or boilerplate page descriptions | AI agent, evaluator, everyone using search |

### Contradictions found

| Fact | What the pages say |
|---|---|
| Current stable version | 12 (`guide/introduction.md`, `install/docker.md`), 13 (`develop/introduction.md`, `install/installing-for-execution/downloading-installer.md`), and 14 "not released yet" (`install/upgrade/migration-notes/v14/technical-notes.md`) while release notes list v14 features |
| Minimum PostgreSQL | 10, 11 or 14, depending on the page |
| Update command | Two pages give different commands. One uses a `job/iDempiere11` URL labelled as version 12 |

## What this branch changes

This branch reorganizes the site and adds the Integrate section. Following the project rules in `CLAUDE.md`, it does not rewrite existing page text.

### New top-level structure

The site is split into six sections. Each has its own navbar tab, its own sidebar and a landing page with cards.

| Section | Audience | Contents |
|---|---|---|
| Guide | End users and consultants | Start here, vocabulary, login, UI tour, windows, Business Partner |
| Install & upgrade | Sysadmins | Docker, installers, upgrade guide, migration notes |
| Develop | Plugin developers and contributors | Environment, first plugin, data model, business logic, UI, packaging, contributing |
| Integrate | Integrators and frontend developers | Overview, REST API, connecting a frontend, SOAP web services |
| Plugins | Consultants and admins | Ready-made plugins and 2Packs |
| Releases | Everyone | Release notes by version, and the Compare versions page |

**Why:** each reader now sees only the part of the documentation for their job. This matches the pattern in Odoo, metasfresh and Business Central.

### Develop grouped by task

The Develop section was a flat list of about 25 pages, one per technology. It is now grouped by what the developer is trying to do:

1. Set up your environment
2. Create a plugin
3. Extend the data model
4. Add business logic
5. Customize the UI
6. Package and ship
7. Contribute to iDempiere

**Why:** the old list explained each technology in detail but did not show when to use which. The groups follow the order in which a developer builds a plugin.

### New Integrate section

Four new pages:

- **Overview:** which integration method to use for which job, and where each is documented.
- **REST API:** how the REST resources map to iDempiere concepts, the login flow, query options, OpenAPI and Swagger, webhooks and configuration. Each topic links to its page in the [iDempiere REST documentation](https://bxservice.github.io/idempiere-rest-docs/).
- **Connect a frontend:** the REST features a web or mobile app needs.
- **SOAP web services:** status and history, taken from the existing release notes.

These pages only state facts from the REST documentation and the existing release notes. Unknowns are marked with `TODO: verify` comments instead of guesses. CORS configuration and supported versions are examples of those unknowns.

**Why:** the site had no REST API content, although the v14 release notes call REST "the recommended and widely-adopted approach for integrating with iDempiere".

### Old links keep working

- All 560 old URLs still work. 530 of them redirect to the new location, using `@docusaurus/plugin-client-redirects` and `redirects.json`.
- Category pages have readable URLs, such as `/docs/install/upgrade/migration-notes/v14` instead of `/docs/category/v14-1`.
- 218 internal links were rewritten in the first move, and more in the second.
- The Compare versions page reads from the new folders. It shows the same data as before: 16 releases, 403 features and 14 migration note groups.

### Smaller fixes

- The three footer "Guide" links all pointed to the same page. The footer now links to the six sections.
- The "Next" version dropdown was removed. The site has had no versioned docs since 2023, so it had no function.
- Release notes and Compare versions share a "Releases" menu, so the navbar fits on one line down to 1024 pixels wide.
- Long API paths in tables wrap instead of forcing the table to scroll.
- Guide pages have a defined order: introduction, vocabulary, login, UI tour, windows, Business Partner.
- Four pages that all showed "Purpose" in the sidebar now show "Start here" or "Overview".

### Checks

- The production build passes. The build fails on any broken link, so every internal link resolves.
- Every old URL was checked against the new build.
- The navbar and pages were checked in a browser at 1200 and 1024 pixels wide.

## What is still required

Ordered by how many readers each fix helps. "Type" shows who can do the work:

- **Reorganize** and **Metadata** fixes can be done now, with no new facts.
- **Rewrite** fixes change existing text and need maintainer approval.
- **Author** fixes need someone with expert knowledge to write new content.

| # | Change | Type | Questions it answers |
|---|---|---|---|
| 1 | Add links between related pages: upgrade guide, migration notes and Compare versions; Integrate to the Guide vocabulary and to Docker; the REST install steps to the plugin install page | Reorganize | S13, I2, I3, I12 |
| 2 | Write a real one-line description for every page. Move author, sponsor and ticket lines in release notes into frontmatter fields | Metadata | A5, E1 |
| 3 | Publish an `llms.txt` index built from page titles and descriptions | Metadata | A6 |
| 4 | Keep one versions page: stable, development and end-of-life versions, Java, database, Docker tag. Other pages link to it. Needs a maintainer to confirm the current stable version | Rewrite | S1, S2, A1, E8, E12, C1 |
| 5 | Write a concepts page: Application Dictionary, Tenant and Organization, document status and actions, table naming, model classes | Author | D1, D2, I12, C4, I6, I8 |
| 6 | Add a decision table: callout, event handler, model validator or process | Author | D6, D8 |
| 7 | Move how-to content out of release notes into evergreen pages: Initial Client Setup, CSV import, Info Windows, IntelliJ setup, model generation | Rewrite | C7, C10, C12, D3, D7 |
| 8 | Rebuild the home page and Start here for evaluators: what iDempiere is, license, modules, tech stack, a demo button | Rewrite | E1, E4, E5, E8, E10 |
| 9 | Write consultant walkthroughs: Order to Cash, Procure to Pay, Products and Price Lists | Author | C3, C4, C5, C15 |
| 10 | Add an "Operate in production" group: service, ports and HTTPS, backups, logs, memory, monitoring | Author | S6, S7, S9, S10, S15 |
| 11 | Fill developer gaps: first plugin tutorial, add a column to an existing table, testing, Javadoc link, troubleshooting | Author | D4, D5, D13, D14, D15 |
| 12 | Fill integration gaps: installing the REST plugin, a local test server, worked examples, CORS | Author | I2, I3, I5, I6, I7, I10 |
| 13 | Write a "Choose your UI approach" page, and an overview for Customize the UI that introduces ZK and puts branding first | Author | F1, F8, F9, F15 |
| 14 | Consolidate UI how-to content from release notes: branding and custom CSS, status lines, no-code dashboard content | Rewrite | F9, F10, F12, F13 |
| 15 | Merge duplicate pages: the "Purpose" introductions, the login and menu tours, the home screen widget tours | Rewrite | C1, C10, E8 |
| 16 | Add a docs lint to the build that rejects boilerplate descriptions, `**Goal:**` lines and `:::caution` in changed files | Reorganize | Keeps the fixes from coming back |

## How to re-run the test

### With Claude Code

The repository includes a Claude Code skill, `docs-persona-test`, in `.claude/skills/docs-persona-test/SKILL.md`. Ask Claude Code, for example:

- "Run the docs persona test."
- "Re-run the persona test for Sysadmin and Integrator."

The skill:

1. Records the commit and branch.
2. Runs one reviewer per persona in parallel.
3. Grades every question with the rubric above.
4. Updates [control-checklist.md](./control-checklist.md): grades, "Last run", the run log with a reason for every grade change, contradictions, other findings and proposed questions.
5. Recounts the scorecard from the question tables.

It never edits `docs/` during a run. Testing and fixing are separate steps.

The skill was tested before it was adopted. Without it, an agent changed a grade as a "judgment call", did not record the commit, and reported findings only in chat. With it, the agent applied the rubric, logged each change with its reason, and caught a counting error in the scorecard.

### By hand

1. Open [control-checklist.md](./control-checklist.md).
2. For each persona, start at the tab listed and try to answer every question from the site.
3. Grade each answer with the rubric. Update "Where the answer is today".
4. Recount the scorecard, and add a line to the run log for every grade change.
5. Add new questions under "Proposed questions".

### Validate the questions with community data

When the knowledge hub with the ingested forum, mailing list and Mattermost questions is available again:

1. Pull the most-asked questions for each persona.
2. Compare them with the checklist. Add frequent questions that are missing under "Proposed questions", with how often they were asked.
3. For each ❌ or 🟡 question, look for a community answer and record the thread as a source for the page that fixes it. Mark facts taken from threads with `TODO: verify` until a maintainer confirms them.

The Application Dictionary metadata in the hub is already usable. Window, field and process help texts can be a source for Guide reference pages.

Run the test after each group of changes in [What is still required](#what-is-still-required). The goal is for every question to reach ✅.
