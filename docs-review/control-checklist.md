# Docs control checklist

A task-based test of the documentation. Each question is one that a real reader asks. For each, try to answer it from the site the way that reader would: open the navbar tab for their role, read the section landing page, then follow the sidebar. Use site search only as a fallback.

Re-run this checklist after every round of documentation changes and update the grades.

## Grades

Apply the first row that matches, top to bottom. The same rubric is used by the `docs-persona-test` Claude Code skill in `.claude/skills/docs-persona-test/`.

| Grade | Rule |
|---|---|
| ❌ | No page answers it, including search |
| 🔀 | Two pages give conflicting answers, or the answer is only in another persona's tab, or a page needed first comes later in the sidebar |
| 🟡 | The answer is partial, or only in release notes, or needs 3 or more hops from the tab's landing page, or only findable with search |
| ✅ | A complete answer on a page reachable from the start tab's landing page in 2 hops or fewer |

A hop is one click: a card, a sidebar item, or a link inside a page. A grade changes only when the docs change or a different rubric row applies.

> **Note:** only the Sysadmin persona has been graded with this rubric so far. The other personas used looser definitions in the first run. Re-run them before comparing totals.

## Scorecard

| Persona | Questions | ✅ | 🟡 | ❌ | 🔀 | Last run |
|---|---|---|---|---|---|---|
| Consultant or end user | 15 | 1 | 9 | 5 | 0 | 2026-09-29 |
| Sysadmin | 15 | 1 | 9 | 1 | 4 | 2026-09-29 (c061d056d + uncommitted, refactor/docs-ia) |
| Plugin developer | 15 | 2 | 6 | 4 | 3 | 2026-09-29 |
| Integrator | 12 | 3 | 5 | 4 | 0 | 2026-09-29 |
| Frontend developer | 15 | 2 | 8 | 4 | 1 | 2026-09-29 |
| Evaluator | 12 | 1 | 7 | 3 | 1 | 2026-09-29 |
| AI agent | 6 | 3 | 1 | 1 | 1 | 2026-09-29 |
| **Total** | **90** | **13** | **45** | **22** | **10** | |

## Consultant or end user

Starts at: Guide tab.

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| C1 | What is the demo URL and login? | 🟡 | URLs in `guide/introduction.md`, credentials in `guide/login.md` |
| C2 | What is a Tenant, an Organization and "*"? | ✅ | `guide/vocabulary.md` |
| C3 | How do I enter a Sales Order and complete it? | ❌ | Only mentions in passing |
| C4 | What do Complete, Void, Reverse and Close mean? | ❌ | Only in `develop/` and `release-notes/` |
| C5 | How do I create a Product and a Price List? | ❌ | Concept only in `guide/vocabulary.md` |
| C6 | How do I create a Business Partner? | 🟡 | `guide/business_partner.md`, vendor section unfinished |
| C7 | How do I set up a new company (Initial Client Setup)? | 🟡 | Only `release-notes/v2.1/ease-initial-client-setup.md` |
| C8 | How do accounting and posting work? | 🟡 | Concepts only in `guide/vocabulary.md` |
| C9 | How do roles and access work? | 🟡 | Definition in `guide/vocabulary.md`, how-to only in release notes |
| C10 | How do I find records (Lookup, Info Windows)? | 🟡 | `guide/getting-started.md`, dangling "Info Window section below" |
| C11 | How do I run and export a report? | 🟡 | `guide/getting-started.md`, steps are broken |
| C12 | How do I import data from CSV? | 🟡 | Three release notes: v1.0, v2.1, v11 |
| C13 | How do I set the language or translate? | ❌ | Login language drop-down only |
| C14 | What changed in the latest version? | 🟡 | `release-notes/v14/`, no summary page |
| C15 | How do I receive and ship goods, and count inventory? | ❌ | Only mentions in passing |

## Sysadmin

Starts at: Install & upgrade tab.

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| S1 | Which Java, database, RAM and CPU do I need? | 🔀 | `install/installing-for-execution/install-prerequisites.md` says PostgreSQL 14+, `install/docker.md` says 11+, `installing-from-installers.md` says 10+. No RAM or CPU sizing |
| S2 | Which version is stable, and which is in development? | 🔀 | `install/installing-for-execution/downloading-installer.md` says 13 is stable. `install/docker.md` uses `12-release`, `post-installation.md` calls 13 the development build |
| S3 | What is the fastest way to try it? | ✅ | `install/docker.md`, but it uses the old `12-release` tag |
| S4 | What are the production install steps? | 🟡 | `install/installing-for-execution/`, overview says "future chapter" |
| S5 | Where is the configuration, and how do I change the database connection? | 🟡 | `install/installing-for-execution/installing-from-installers.md`, setup only, no "change it later" steps |
| S6 | How do I run it as a systemd service? | 🟡 | `install/installing-for-execution/running-idempiere-from-installers.md`, init.d script only |
| S7 | Which ports does it use, and how do I set up HTTPS and a reverse proxy? | 🟡 | `install/installing-for-execution/post-installation.md`, links to the wiki only |
| S8 | What are the first login credentials? | 🔀 | Only GardenAdmin and GardenUser in `guide/login.md`. `post-installation.md` names the five default users, no passwords |
| S9 | How do I back up and restore? | 🟡 | What to back up in `install/upgrade/upgrade-guide.md` "Backup Strategy" and `post-installation.md`. No commands, no restore |
| S10 | Where are the log files? | ❌ | Not documented. Only the setup LOG LEVEL parameter |
| S11 | How do I install a plugin in production? | 🟡 | `update-prd.sh` in `install/upgrade/upgrade-guide.md`, Felix console only in `develop/package-and-ship/distributing-plugins.md`, Extension Manager only in v14 migration notes |
| S12 | How do I apply a minor update? | 🔀 | `install/installing-for-execution/post-installation.md` and `install/upgrade/upgrade-guide.md` give different `update.sh` commands |
| S13 | How do I upgrade a major version, for example 12 to 14? | 🟡 | `install/upgrade/upgrade-guide.md`, generic, no link to Compare versions |
| S14 | What breaks when I upgrade? | 🟡 | `install/upgrade/migration-notes/<version>/`, 4 hops from the landing page. Compare versions is only in the Releases menu |
| S15 | How do I monitor, tune memory and harden security? | 🟡 | Security steps in `install/installing-for-execution/post-installation.md` (wiki links). "Performance Tuning" in `upgrade-guide.md` is generic. No monitoring or memory settings |

## Plugin developer

Starts at: Develop tab.

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| D1 | What is the Application Dictionary, and how does it relate to my code? | ❌ | Never defined |
| D2 | What is the architecture: OSGi, ZK, PO and X_/I_/M classes? | 🔀 | Buried in `develop/extend-the-data-model/plugin-modelfactory.md` |
| D3 | How do I set up the development environment? | 🟡 | `develop/development-environment/`, no page to choose a path, IntelliJ only in release notes |
| D4 | How do I create my first plugin, run it and debug it? | 🟡 | `develop/create-a-plugin/`, no single tutorial, no debugging |
| D5 | How do I add a column to an existing table and show it in a window? | ❌ | Not documented |
| D6 | When do I use a callout, an event handler, a model validator or a process? | 🟡 | Partial comparisons in two pages |
| D7 | How do I generate model classes? | 🔀 | Inside `develop/extend-the-data-model/plugin-modelfactory.md` |
| D8 | How do I run code when a document is completed? | 🟡 | Topic list in `develop/add-business-logic/plugin-eventhandler.md` |
| D9 | How do I add a process with parameters? | 🟡 | `develop/add-business-logic/plugin-process.md`, no Application Dictionary setup |
| D10 | How do I add a new window or form? | ✅ | `develop/extend-the-data-model/creating-windows.md`, `develop/customize-the-ui/plugin-forms.md` |
| D11 | How do I ship Application Dictionary changes, and which entity type do I use? | 🔀 | 2Pack in `develop/package-and-ship/`, migration scripts only in `develop/contribute/` |
| D12 | How do I build with Maven and install the plugin? | ✅ | `develop/package-and-ship/` |
| D13 | How do I write tests? | ❌ | Not documented |
| D14 | Where is the Javadoc or API reference? | ❌ | Not linked |
| D15 | How do I debug a plugin that does not start? | 🟡 | Spread over three groups |

## Integrator

Starts at: Integrate tab.

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| I1 | Which API should I use? | ✅ | `integrate/overview.md` |
| I2 | How do I install the REST API on a server? | ❌ | Not in Integrate |
| I3 | How do I get a local iDempiere with REST to test against? | ❌ | `install/docker.md` is not linked and does not mention REST |
| I4 | How do I log in and pick a tenant, role and organization? | ✅ | `integrate/rest-api.md` |
| I5 | How do I list, filter and page records, for example products with prices? | 🟡 | `integrate/rest-api.md`, no price example |
| I6 | How do I create a Sales Order with lines and complete it? | 🟡 | External REST docs only, no order example |
| I7 | How do I run a report and download the PDF? | 🟡 | External Processes page |
| I8 | How do I get notified when an order is completed? | ✅ | `integrate/rest-api.md` webhooks |
| I9 | How do I generate TypeScript types? | 🟡 | `integrate/connect-a-frontend.md`, no generator shown |
| I10 | How do I configure CORS for a browser app? | ❌ | Not documented here or in the REST docs |
| I11 | How do I restrict what the API user can see? | 🟡 | REST resource access only, not data access |
| I12 | What do table and column names mean, and where is the data model? | ❌ | Not documented |

## Frontend developer

Starts at: Integrate tab for a separate app (H), Develop → Customize the UI for the built-in web UI (ZK).

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| F1 | Should I build a separate frontend or customize the built-in web UI? | ❌ | Not documented |
| F2 | (H) How do I run a local backend with the REST API for my dev server? | 🟡 | `install/docker.md`, no REST setup |
| F3 | (H) How do I log in from a single-page app and keep the session? | ✅ | `integrate/connect-a-frontend.md`, `integrate/rest-api.md` |
| F4 | (H) How do I handle CORS or set up a dev proxy? | ❌ | Listed as not documented in `integrate/connect-a-frontend.md` |
| F5 | (H) How do I generate TypeScript types from OpenAPI? | 🟡 | `integrate/connect-a-frontend.md`, no generator shown |
| F6 | (H) How do I build screens from window and field metadata? | 🟡 | One row in `integrate/rest-api.md`, links out |
| F7 | (H) How do I page, sort and filter lists, show translated labels and show a report as PDF? | 🟡 | Querying in `integrate/rest-api.md`, no report or translation example |
| F8 | (ZK) What is ZK, and how does a ZK page work? | ❌ | Never introduced |
| F9 | (ZK) How do I change the logo, colors and branding? | 🔀 | `develop/customize-the-ui/plugin-webui-themes.md` covers pre-9; current approach only in release notes v8.2 and v12 |
| F10 | (ZK) How do I add custom CSS or JavaScript? | 🟡 | Release notes v8.2 and v12 only |
| F11 | (ZK) How do I build a custom form? | ✅ | `develop/customize-the-ui/plugin-forms.md` |
| F12 | (ZK) How do I add a dashboard widget? | 🟡 | `develop/customize-the-ui/plugin-dashboard-panels.md`, no-code options only in release notes |
| F13 | (ZK) How do I show a status line or an HTML or Markdown widget? | ❌ | Release notes v2.1, v10 and v12 only |
| F14 | (ZK) How do I create a custom field editor? | 🟡 | `develop/customize-the-ui/plugin-editor-factory.md`, last in the sidebar |
| F15 | (ZK) Is the web UI responsive? Is there a mobile app? | 🟡 | Only `release-notes/v5.1/mobile-compatibility.md` |

## Evaluator

Starts at: home page, then Guide, Start here.

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| E1 | What is iDempiere? | 🟡 | `guide/introduction.md`, the home page does not say |
| E2 | Who uses it, and in which industries? | ❌ | Not documented |
| E3 | Is the project active? | 🟡 | Releases tab, no dates |
| E4 | What does it cost, and what is the license? | 🟡 | GPLv2 only in `develop/contribute/how-to-contribute.md` |
| E5 | Which modules and features does it have? | 🟡 | `guide/menue_overview.md` |
| E6 | How does it compare with other ERP systems? | ❌ | Not documented |
| E7 | How extensible is it? | ✅ | Develop tab |
| E8 | How do I try it now? | 🔀 | Demo links at the bottom of two pages, with different versions |
| E9 | What is the release cadence and support policy? | 🟡 | One line in `install/installing-for-execution/downloading-installer.md` |
| E10 | What is the tech stack? | 🟡 | Spread over several pages |
| E11 | Is there commercial support? Who are the partners? | ❌ | Not documented |
| E12 | What is the roadmap and the latest release? | 🟡 | Releases tab, no status per version |

## AI agent

Starts at: any page; relies on page metadata.

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| A1 | What is the current stable version, and which Java does it need? | 🔀 | Three pages give three answers |
| A2 | What is the recommended way to register an OSGi component? | ✅ | `develop/create-a-plugin/annotations-instead-xml.md` |
| A3 | What is the difference between a callout and an event handler? | ✅ | `develop/add-business-logic/plugin-eventhandler.md` |
| A4 | Which API should a client app use? | ✅ | `integrate/overview.md` |
| A5 | Can I get a one-line summary of each page from its metadata? | 🟡 | 350 release notes have boilerplate descriptions, Guide and Plugins have none |
| A6 | Is there an llms.txt or other machine-readable index? | ❌ | None |

## Known contradictions

| Fact | Conflicting sources |
|---|---|
| Current stable version | `guide/introduction.md` says 12, `develop/introduction.md` and `install/installing-for-execution/downloading-installer.md` say 13, `install/docker.md` uses `12-release`, `install/upgrade/migration-notes/v14/technical-notes.md` says 14 is not released |
| Minimum PostgreSQL | `install/docker.md` says 11, `install/installing-for-execution/install-prerequisites.md` says 14, `install/installing-for-execution/installing-from-installers.md` says 10 |
| Update command | `install/installing-for-execution/post-installation.md` and `install/upgrade/upgrade-guide.md` differ, and the first uses a `job/iDempiere11` URL labelled as 12 |
| Production readiness of the installer guide | `install/introduction.md` says production-quality instructions are "a future chapter", `install/installing-for-execution/downloading-installer.md` recommends the same steps "for implementation and production purposes" |
| Silent setup script name | `install/installing-for-execution/installing-from-installers.md` says `silentsetup-alt.sh` in the command and `silent-setup-alt.sh` in the note below it |
| Default users | `guide/login.md` gives only GardenAdmin and GardenUser, `install/installing-for-execution/post-installation.md` lists five default users (SuperUser, System, GardenAdmin, GardenUser, WebService) without passwords |

## Other findings

Problems seen during a run that no question covers.

- Sysadmin: `install/introduction.md` mentions an "installation script" for Ubuntu 24.04, but no page describes or links it.
- Sysadmin: `install/introduction.md` has two `#` headings ("Purpose", "iDempiere Installation"), so the page title is "Purpose".
- Sysadmin: `install/upgrade/upgrade-guide.md` links "Release notes for your target version" to the migration notes index, not to release notes.
- Sysadmin: the Upgrade category description names the Compare versions page but does not link it. Compare versions is reachable only from the Releases menu.
- Sysadmin: the Compose file in `install/docker.md` publishes ports 5432 and 12612 (OSGi console) on the host with no warning. `post-installation.md` says to open only 443.
- Sysadmin: `install/installing-for-execution/downloading-installer.md` and `install/upgrade/upgrade-guide.md` use the deprecated `:::caution` admonition.
- Sysadmin: `install/installing-for-execution/installing-from-installers.md` has the typo `utisl/oracle/ImportIdempiere.sh`.
- Sysadmin: `install/installing-for-execution/install-prerequisites.md` warns against "trust instead of md5", but the config it shows uses `scram-sha-256`.

## Proposed questions

New questions suggested by reviewers. Move a question into its persona table once agreed.

To do: check the question list against real community questions (forums, mailing list, Mattermost) from the CloudEmpiere knowledge hub, once that source is available.

| Persona | Proposed question | Why |
|---|---|---|
| Sysadmin | Is it safe to expose the Docker Compose stack as shown, and which ports must stay closed? | The Compose example publishes the database and OSGi console ports |
| Sysadmin | How do I install the REST API or SOAP plugin on a server? | SOAP leaves core in v14 and REST is a plugin, but the Install tab covers neither end to end |
| Sysadmin | How do I set up outgoing email for the server? | Common first production task, not covered in the Install tab |

## Run log

| Date | Commit | Personas | Grade changes |
|---|---|---|---|
| 2026-09-29 | uncommitted, branch refactor/docs-ia | All | First run |
| 2026-09-29 | c061d056d + uncommitted, branch refactor/docs-ia | Sysadmin | S1 🟡 → 🔀: rubric row "conflicting answers" (PostgreSQL minimum: install-prerequisites.md 14, docker.md 11, installing-from-installers.md 10) |
| | | | S2 ❌ → 🔀: rubric row "conflicting answers" (downloading-installer.md says 13 stable, docker.md uses 12-release, post-installation.md calls 13 the development build) |
| | | | S9 ❌ → 🟡: rubric row "answer is partial" (upgrade-guide.md "Backup Strategy" says what to back up, no commands, no restore) |
| | | | S12 🟡 → 🔀: rubric row "conflicting answers" (post-installation.md vs upgrade-guide.md `update.sh` commands) |
| | | | S14 ✅ → 🟡: rubric row "3+ hops" (landing → Upgrade → Migration notes → version → notes) |
| | | | S15 ❌ → 🟡: rubric row "answer is partial" (security steps in post-installation.md, no monitoring or memory) |
| | | | Scorecard recount: Consultant row was 1/10/4/0 by hand, the C table gives 1/9/5/0 |
