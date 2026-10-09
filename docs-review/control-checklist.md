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

`docs/release-notes/` is shared by all personas. An answer found only there is 🟡 ("only in release notes"), not 🔀 ("another persona's tab").

All personas were graded with this rubric on 2026-10-07 (743e6abe1). Compare totals only from that run on.

## Scorecard

| Persona | Questions | ✅ | 🟡 | ❌ | 🔀 | Last run |
|---|---|---|---|---|---|---|
| Consultant or end user | 15 | 1 | 8 | 4 | 2 | 2026-10-07 (743e6abe1) |
| Sysadmin | 15 | 1 | 9 | 1 | 4 | 2026-09-29 (c061d056d + uncommitted, refactor/docs-ia) |
| Plugin developer | 15 | 2 | 9 | 3 | 1 | 2026-10-07 (743e6abe1) |
| Integrator | 12 | 1 | 7 | 2 | 2 | 2026-10-07 (743e6abe1) |
| Frontend developer | 15 | 4 | 7 | 3 | 1 | 2026-10-07 (743e6abe1) |
| Evaluator | 12 | 1 | 2 | 3 | 6 | 2026-10-07 (743e6abe1) |
| AI agent | 6 | 3 | 2 | 0 | 1 | 2026-10-07 (743e6abe1) |
| **Total** | **90** | **13** | **44** | **16** | **17** | |

## Consultant or end user

Starts at: Guide tab.

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| C1 | What is the demo URL and login? | 🔀 | `guide/introduction.md` labels demo.globalqss.com 12 stable, `develop/introduction.md` labels the same URL 13 stable. Login is in `guide/login.md`, not linked |
| C2 | What is a Tenant, an Organization and "*"? | ✅ | `guide/vocabulary.md` |
| C3 | How do I enter a Sales Order and complete it? | ❌ | Not documented. Sales Order appears only as a window-path example |
| C4 | What do Complete, Void, Reverse and Close mean? | ❌ | Not documented. `release-notes/v1.0/confirmdocvoidclose.md` is a fragment |
| C5 | How do I create a Product and a Price List? | ❌ | Definition only in `guide/vocabulary.md`, no steps |
| C6 | How do I create a Business Partner? | 🟡 | `guide/business_partner.md`, no Location steps, ends "This part can be further completed" |
| C7 | How do I set up a new company (Initial Client Setup)? | 🟡 | Only `release-notes/v2.1/ease-initial-client-setup.md`. `guide/menue_overview.md` says company setup is not covered |
| C8 | How do accounting and posting work? | 🟡 | Concepts only in `guide/vocabulary.md`, nothing on posting or periods |
| C9 | How do roles and access work? | 🟡 | Role defined in `guide/vocabulary.md`, access setup only in release notes |
| C10 | How do I find records (Lookup, Info Windows)? | 🟡 | `guide/window_handling.md`, `guide/getting-started.md`, dangling "Info Window section below" |
| C11 | How do I run and export a report? | 🟡 | `guide/getting-started.md`, report steps are garbled, export is one line |
| C12 | How do I import data from CSV? | 🟡 | One line in `guide/window_handling.md`, steps only in release notes v1.0 and v2.1 |
| C13 | How do I set the language or translate? | 🟡 | Login language drop-down in `guide/login.md`, translation only in `release-notes/v1.0/translation-improvements.md` |
| C14 | What changed in the latest version? | 🔀 | Guide implies 12 stable, `downloading-installer.md` says 13, `release-notes/v14/` vs `migration-notes/v14` ("unreleased"). No link from Guide |
| C15 | How do I receive and ship goods, and count inventory? | ❌ | Only change notes in release notes v1.0, v10, v13 |

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
| D1 | What is the Application Dictionary, and how does it relate to my code? | ❌ | Never defined, only used as a menu path |
| D2 | What is the architecture: OSGi, ZK, PO and X_/I_/M classes? | 🟡 | OSGi in `develop/create-a-plugin/plugin-development-background.md`, PO and X_/I_/M in `plugin-modelfactory.md`. ZK never explained |
| D3 | How do I set up the development environment? | 🟡 | Full steps under Manual Install (3 hops), 2-hop page defers to the README |
| D4 | How do I create my first plugin, run it and debug it? | 🟡 | `develop/create-a-plugin/`, create and run covered, no debugging |
| D5 | How do I add a column to an existing table and show it in a window? | 🟡 | `creating-windows.md` covers a new table only. Existing table only in `release-notes/v2.1/create-fields-improvement.md` |
| D6 | When do I use a callout, an event handler, a model validator or a process? | 🟡 | Pairwise comparisons in `plugin-eventhandler.md` and `plugin-modelvalidator.md`, processes never compared |
| D7 | How do I generate model classes? | 🟡 | `plugin-modelfactory.md`, Developer Mode and launch config only in release notes v11, v12 |
| D8 | How do I run code when a document is completed? | 🟡 | `plugin-eventhandler.md` lists DOC_AFTER_COMPLETE. The "iDempiere 9+" annotation section is empty |
| D9 | How do I add a process with parameters? | 🟡 | `plugin-process.md`, AD setup is 4 lines, no parameter mapping |
| D10 | How do I add a new window or form? | ✅ | `develop/extend-the-data-model/creating-windows.md`, `develop/customize-the-ui/plugin-forms.md` |
| D11 | How do I ship Application Dictionary changes, and which entity type do I use? | 🔀 | Entity type: `U` in `creating-windows.md` vs own `AD_EntityType` in `extension-registry-contributing.md`. 2Pack file names differ across 3 pages |
| D12 | How do I build with Maven and install the plugin? | ✅ | `develop/package-and-ship/`, POMs pinned to 7.1 |
| D13 | How do I write tests? | ❌ | Not documented |
| D14 | Where is the Javadoc or API reference? | ❌ | Not linked |
| D15 | How do I debug a plugin that does not start? | 🟡 | `ss`/`start` only in `plugin-running-locally.md`, no `diag`, states or logs |

## Integrator

Starts at: Integrate tab.

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| I1 | Which API should I use? | ✅ | `integrate/overview.md` |
| I2 | How do I install the REST API on a server? | 🔀 | Only in Install (`upgrade-guide.md` `update-prd.sh`) and Develop (`distributing-plugins.md`) |
| I3 | How do I get a local iDempiere with REST to test against? | 🔀 | `install/docker.md` (12-release, no REST) and `update-prd.sh` in Install, never combined |
| I4 | How do I log in and pick a tenant, role and organization? | 🟡 | `integrate/rest-api.md`, no endpoint for listing roles and organizations |
| I5 | How do I list, filter and page records, for example products with prices? | 🟡 | `integrate/rest-api.md`, c_bpartner example, no prices, `$expand` or total count |
| I6 | How do I create a Sales Order with lines and complete it? | 🟡 | External CRUD docs only, no header plus lines or completion |
| I7 | How do I run a report and download the PDF? | 🟡 | One table row in `integrate/rest-api.md`, external Processes page |
| I8 | How do I get notified when an order is completed? | 🟡 | `integrate/rest-api.md` webhooks, fields, event filter and payload only external |
| I9 | How do I generate TypeScript types? | 🟡 | `integrate/connect-a-frontend.md`, "does not describe a specific generator" |
| I10 | How do I configure CORS for a browser app? | ❌ | Listed as not documented in `integrate/connect-a-frontend.md` |
| I11 | How do I restrict what the API user can see? | 🟡 | `REST_RESOURCE_ACCESS_CONTROL` only, nothing on data access |
| I12 | What do table and column names mean, and where is the data model? | ❌ | Not documented |

## Frontend developer

Starts at: Integrate tab for a separate app (H), Develop → Customize the UI for the built-in web UI (ZK).

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| F1 | Should I build a separate frontend or customize the built-in web UI? | ❌ | Not documented. Integrate and Customize the UI do not link to each other |
| F2 | (H) How do I run a local backend with the REST API for my dev server? | 🔀 | REST install only in Install and Develop tabs |
| F3 | (H) How do I log in from a single-page app and keep the session? | ✅ | `integrate/connect-a-frontend.md`, `integrate/rest-api.md` |
| F4 | (H) How do I handle CORS or set up a dev proxy? | ❌ | Listed as not documented in `integrate/connect-a-frontend.md` |
| F5 | (H) How do I generate TypeScript types from OpenAPI? | 🟡 | `integrate/connect-a-frontend.md`, OpenAPI URL, no generator |
| F6 | (H) How do I build screens from window and field metadata? | 🟡 | One row in `integrate/rest-api.md`, links out |
| F7 | (H) How do I page, sort and filter lists, show translated labels and show a report as PDF? | 🟡 | Paging and filtering in `integrate/rest-api.md`, no translated labels or PDF |
| F8 | (ZK) What is ZK, and how does a ZK page work? | ❌ | Never introduced |
| F9 | (ZK) How do I change the logo, colors and branding? | 🟡 | `plugin-webui-themes.md` is pre-9, logo never named. Current approach only in release notes v8.2, v12 |
| F10 | (ZK) How do I add custom CSS or JavaScript? | 🟡 | CSS only via full theme copy, `custom.css.dsp` only in release notes, JavaScript not covered |
| F11 | (ZK) How do I build a custom form? | ✅ | `develop/customize-the-ui/plugin-forms.md` |
| F12 | (ZK) How do I add a dashboard widget? | ✅ | `develop/customize-the-ui/plugin-dashboard-panels.md`. No-code options only in release notes |
| F13 | (ZK) How do I show a status line or an HTML or Markdown widget? | 🟡 | Release notes v2.1, v10 and v12 only |
| F14 | (ZK) How do I create a custom field editor? | ✅ | `develop/customize-the-ui/plugin-editor-factory.md` |
| F15 | (ZK) Is the web UI responsive? Is there a mobile app? | 🟡 | Only `release-notes/v5.1/mobile-compatibility.md` |

## Evaluator

Starts at: home page, then Guide, Start here.

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| E1 | What is iDempiere? | ✅ | `guide/introduction.md`, 1 hop from the home page "Get Started" button |
| E2 | Who uses it, and in which industries? | ❌ | Not documented |
| E3 | Is the project active? | 🟡 | "Founded in 2011" in `guide/introduction.md`, no recent activity outside release notes |
| E4 | What does it cost, and what is the license? | 🔀 | GPLv2 only in `develop/contribute/how-to-contribute.md`. Guide says only "open-source" |
| E5 | Which modules and features does it have? | 🟡 | `guide/menue_overview.md`, menu areas, no features |
| E6 | How does it compare with other ERP systems? | ❌ | Not documented |
| E7 | How extensible is it? | 🔀 | Only in Develop, Plugins and Integrate. Guide never mentions plugins |
| E8 | How do I try it now? | 🔀 | Same demo URL labelled 12 in `guide/introduction.md` and 13 in `develop/introduction.md`. Docker uses `12-release` |
| E9 | What is the release cadence and support policy? | 🔀 | Only "13 is maintained and stable" in `install/installing-for-execution/downloading-installer.md`. No cadence or EOL |
| E10 | What is the tech stack? | 🔀 | PostgreSQL 14+, 11+ and 13+ on three pages. Guide gives no stack |
| E11 | Is there commercial support? Who are the partners? | ❌ | Not documented |
| E12 | What is the roadmap and the latest release? | 🔀 | No roadmap. Guide says 12 stable, Develop says 13, release notes say v14 "integrated" |

## AI agent

Starts at: any page; relies on page metadata.

| # | Question | Grade | Where the answer is today |
|---|---|---|---|
| A1 | What is the current stable version, and which Java does it need? | 🔀 | `downloading-installer.md` says 13, `install/docker.md` uses 12. Java for 13 only in `platform-requirements/13.yml` |
| A2 | What is the recommended way to register an OSGi component? | ✅ | `develop/create-a-plugin/annotations-instead-xml.md` |
| A3 | What is the difference between a callout and an event handler? | ✅ | `develop/add-business-logic/plugin-eventhandler.md`, `plugin-callouts.md` |
| A4 | Which API should a client app use? | ✅ | `integrate/overview.md` |
| A5 | Can I get a one-line summary of each page from its metadata? | 🟡 | 114 of 495 pages have a real description. 351 release notes boilerplate, all 8 Guide and 2 Plugins pages none |
| A6 | Is there an llms.txt or other machine-readable index? | 🟡 | No `llms.txt`. `sitemap.xml` and the lunr search index exist, without summaries |

## Known contradictions

| Fact | Conflicting sources |
|---|---|
| Current stable version | `guide/introduction.md` says 12, `develop/introduction.md` and `install/installing-for-execution/downloading-installer.md` say 13, `install/docker.md` uses `12-release`, `install/upgrade/migration-notes/v14/technical-notes.md` says 14 is not released |
| Minimum PostgreSQL | `install/docker.md` says 11, `install/installing-for-execution/install-prerequisites.md` says 14, `install/installing-for-execution/installing-from-installers.md` says 10 |
| Update command | `install/installing-for-execution/post-installation.md` and `install/upgrade/upgrade-guide.md` differ, and the first uses a `job/iDempiere11` URL labelled as 12 |
| Production readiness of the installer guide | `install/introduction.md` says production-quality instructions are "a future chapter", `install/installing-for-execution/downloading-installer.md` recommends the same steps "for implementation and production purposes" |
| Silent setup script name | `install/installing-for-execution/installing-from-installers.md` says `silentsetup-alt.sh` in the command and `silent-setup-alt.sh` in the note below it |
| Default users | `guide/login.md` gives only GardenAdmin and GardenUser, `install/installing-for-execution/post-installation.md` lists five default users (SuperUser, System, GardenAdmin, GardenUser, WebService) without passwords |
| Demo server versions | `guide/introduction.md` labels demo.globalqss.com "12 Kudos Stable" and test.idempiere.org "13 Dev Build". `develop/introduction.md` labels the same URLs "13 Orion Stable" and "14 Dev Build" |
| Is v14 released? | `release-notes/v14/_category_.json` says "Features integrated in iDempiere v14", `install/upgrade/migration-notes/v14/_category_.json` says "unreleased, master" |
| Java version for the stable release | Stated only in `platform-requirements/13.yml` (Compare versions page). `install-prerequisites.md` says only that its examples use OpenJDK 17 |
| Entity type for plugin dictionary content | `develop/extend-the-data-model/creating-windows.md`, `plugin-modelfactory.md` and `plugin-editor-factory.md` use `U`. `develop/package-and-ship/extension-registry-contributing.md` says to register your own `AD_EntityType` |
| 2Pack file naming | `2pack/packin-packout-guide.md` says `2Pack_<Name>_<version>.zip`, `2pack/automatic-external-packin.md` and `extension-registry-contributing.md` say `2Pack_[version].zip`, `2pack/what-is-2pack.md` says `2Pack_1.0.0_MyPlugin.zip` |
| Activator for automatic pack-in | `create-a-plugin/plugin-development-background.md` names `AdempiereActivator`, `create-a-plugin/plugin-running-locally.md` recommends `Incremental2PackActivator` for `2Pack.zip`, `2pack/automatic-external-packin.md` says each handles a different file name |
| Custom table prefix | `plugin-modelfactory.md` says "3-letter prefix ... Use camelCase" and shows `CUST_This_Is_My_Table`. `upgrade-guide.md` suggests `XX_`, `LIT_`, `ORG_` |
| Canonical REST documentation | `integrate/*` links bxservice.github.io/idempiere-rest-docs, `release-notes/v14/soap-web-services-plugin.md` and `release-notes/v11/json-field-type.md` link the wiki REST page |

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

Run of 2026-10-07 (743e6abe1):

- Rubric: read literally, the 🔀 "another persona's tab" row matches release-notes answers before the 🟡 "only in release notes" row. Clarified above: release notes are shared, so they count as 🟡.
- Home page: the three feature cards have no links, and their names do not match any navbar tab (`src/components/HomepageFeatures/index.js`). The tagline "Community Powered Documentation" does not say what iDempiere is.
- Several pages have more than one `#` heading, so the page title is wrong: `guide/introduction.md` (4), `develop/introduction.md` (4), `guide/window_handling.md` (10), `guide/overview.md`, `install/introduction.md`, `plugins/quick-info-2packs.md`.
- `develop/introduction.md` is a copy of the site intro with drifted version labels. It gives developers no orientation.
- No `#` heading at all: `develop/package-and-ship/2pack/packin-packout-guide.md` and most `develop/contribute/*.md`.
- `:::caution` is still used in 7 pages, including `downloading-installer.md`, `plugin-modelfactory.md`, `plugin-process.md`, `plugin-callouts.md`, `plugin-forms.md`, `distributing-plugins.md`. `:::success` and `:::important` are used in `2pack/what-is-2pack.md`, `contribute/plugin-guidelines.md` and `manual-install/applying-additional-migration-scripts.md`.
- All 7 pages in `develop/customize-the-ui/` duplicate the H1 in a frontmatter `title`. `annotations-instead-xml.md` has a frontmatter `title` that differs from its H1.
- `guide/getting-started.md`: "See Info Window section below" and "See Activities Widget" point to nothing. It links the forum, the footer links Google Groups and Mattermost.
- `guide/business_partner.md`: says all fields are required, then lists two. Broken heading levels, typo "beend", placeholder "Outlook" section. "Essential Fields for Vendor: Tax ID, Surname" needs checking.
- `guide/login.md` and `guide/menue_overview.md` repeat the Menu section almost word for word. `window_handling.md` repeats the login intro.
- `guide/vocabulary.md`: "'Cash' and 'Accrual' costing methods" may confuse accounting basis with costing method. Missing terms: Warehouse, Locator, Document Type, Price List Version, Document Status.
- The Guide tab links to no other tab. Compare versions is reachable only from the navbar.
- `develop/add-business-logic/plugin-eventhandler.md`: the "iDempiere 9+ Event Annotation" section is empty and links to itself. Its "iDempiere 9 Event Annotations" link points to the process factory release note.
- `develop/add-business-logic/plugin-modelvalidator.md`: the example implements `docValidate()` but never registers document validation. Needs checking.
- `develop/extend-the-data-model/plugin-modelfactory.md`: troubleshooting checks `Service-Component` XML while the example uses `@Component`. The Generate Model parameters differ from `release-notes/v11/generate-model-template.md`.
- `develop/package-and-ship/plugin-maven-build.md` is pinned to `7.1.0-SNAPSHOT` and `idempiere-7.1`. `distributing-plugins.md` uses a Jenkins `/ws/` URL that `extension-registry-contributing.md` calls unstable.
- `develop/create-a-plugin/developing-plugins.md` requires an Eclipse environment but does not link Set up your environment. Manual Install sits before the quick setup page.
- `develop/development-environment/fast-linux-dev-setup.md` uses `--branch release-10`. `plugin-webui-themes.md` uses JavaSE-11.
- `integrate/rest-api.md` has an open TODO on supported iDempiere versions. No page gives the REST base URL or port, error responses, or an `$expand` example. The API gateway advice in `post-installation.md` is not linked from Integrate.
- Integrate never mentions installing REST through the Extension Manager, though `soap-web-services.md` does for SOAP.
- `platform-requirements/README.md`, `_schema.json` and `13.yml` still point to `docs/new-features/` and `docs/migration-notes/`.
- No page shows a last-updated date (`showLastUpdateTime` is off).
- `release-notes/v10/styles-on-html-report-columns.md:16` has a bare old path `/docs/new-features/v4.1/styles-on-fields`.
- `CLAUDE.md` says Docusaurus 2.4.0. `package.json` uses 3.10.1.

## Proposed questions

New questions suggested by reviewers. Move a question into its persona table once agreed.

To do: check the question list against real community questions (forums, mailing list, Mattermost) from the CloudEmpiere knowledge hub, once that source is available.

| Persona | Proposed question | Why |
|---|---|---|
| Sysadmin | Is it safe to expose the Docker Compose stack as shown, and which ports must stay closed? | The Compose example publishes the database and OSGi console ports |
| Sysadmin | How do I install the REST API or SOAP plugin on a server? | SOAP leaves core in v14 and REST is a plugin, but the Install tab covers neither end to end |
| Sysadmin | How do I set up outgoing email for the server? | Common first production task, not covered in the Install tab |
| Consultant | How do I enter a Purchase Order and match it to the vendor invoice? | Core buy-side flow for a distributor |
| Consultant | How do I create and send a customer Invoice and record the Payment? | Completes the order-to-cash demo |
| Consultant | How do I set up a Warehouse and Locators? | Needed before receiving or shipping |
| Consultant | Which Document Types exist and how do they change a Sales Order? | Chosen for every customer flow |
| Consultant | How do I set up Taxes for Products? | Orders and invoices need it |
| Consultant | Which demo user and role should I use? | Guide shows 2 users, `post-installation.md` lists 5 |
| Consultant | How do I reset demo data or create my own demo tenant? | Needed to prepare a customer demo |
| Consultant | Where do I find help for a specific window or field? | The Guide is thin |
| Plugin developer | How do I register my own entity type and table prefix? | Pages disagree (`U` vs own type) |
| Plugin developer | Should I ship dictionary changes as migration scripts or as a 2Pack? | Migration scripts covered for core only |
| Plugin developer | How do I update my plugin for a new major version? | Removed-API lists only in the Install tab |
| Plugin developer | How do I use transactions, the Query API and the context correctly? | Every example uses them unexplained |
| Plugin developer | How do I keep my plugin multi-tenant safe? | No page explains System vs tenant data |
| Plugin developer | How do I add messages and translations to my plugin? | `@Ok@` and `@Success@` unexplained |
| Plugin developer | How do I set up IntelliJ? | Only in `release-notes/v12` |
| Plugin developer | How do I add a Jasper report or print format to my plugin? | Listed as a plugin type, not covered |
| Integrator | Where is the REST API on my server: base URL, port, HTTPS? | Every first request needs it |
| Integrator | How does a backend authenticate without a user login? | Normal pattern for sync jobs |
| Integrator | How do I fetch only records changed since my last sync? | Core of incremental sync |
| Integrator | How do I match iDempiere records to my shop's IDs? | Idempotent sync needs a stable key |
| Integrator | How do I read stock on hand per product and warehouse? | E-shops need stock |
| Integrator | What do REST error responses look like? | Needed for retries |
| Integrator | Which REST plugin version works with my iDempiere version? | Open TODO in `rest-api.md` |
| Integrator | How do I receive orders through an inbound webhook? | Mentioned, no flow |
| Frontend developer | (H) How do I show product images and upload files? | Only an external link |
| Frontend developer | (H) How do I handle 401 responses and token refresh in a single-page app? | Error format not described |
| Frontend developer | (H) How do I serve my app on the same origin behind a reverse proxy? | Usual alternative to CORS |
| Frontend developer | (ZK) How do I add a toolbar button to an existing window? | Common customization |
| Frontend developer | (ZK) How do I translate labels in a custom form or panel? | Tutorials skip it |
| Frontend developer | (ZK) How do I see CSS or ZUL changes without a restart? | Fast iteration |
| Evaluator | Which countries, localizations and languages are supported? | Often rules an ERP in or out |
| Evaluator | What hardware and hosting does it need for N users? | "Runs on a small server" is not quantified |
| Evaluator | Can I migrate data from my current system? | Decides switching cost |
| Evaluator | Who governs the project and maintains the core? | Long-term reliability |
| Evaluator | What about SSO, audit and GDPR? | Common procurement checklist items |
| Evaluator | Does one instance support multi-company, multi-currency and multi-language? | Core fit criteria |
| AI agent | What are the Java, ZK, Jetty and PostgreSQL requirements for version N? | Data exists only in `platform-requirements/` |
| AI agent | Which iDempiere versions does the REST plugin support? | Open TODO |
| AI agent | When was this page last updated, or which version does it apply to? | No freshness metadata |
| AI agent | Which Docker image tag matches the current stable release? | Docker page pins 12 |

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
| 2026-10-07 | 743e6abe1, branch refactor/docs-ia | Consultant, Plugin developer, Integrator, Frontend developer, Evaluator, AI agent | First run with the strict rubric for these personas. No `docs/` changes since the last run, so every change below is a different rubric row |
| | | | C1 🟡 → 🔀: "conflicting answers" (demo URL labelled 12 in guide/introduction.md, 13 in develop/introduction.md) |
| | | | C13 ❌ → 🟡: "partial" (login language drop-down in guide/login.md) |
| | | | C14 🟡 → 🔀: "conflicting answers" (12, 13 and 14 named as current on different pages) |
| | | | D2 🔀 → 🟡: "partial" (OSGi and model classes on two pages, 2 hops each, ZK missing) |
| | | | D5 ❌ → 🟡: "partial" (creating-windows.md covers a new table, existing table only in release notes) |
| | | | D7 🔀 → 🟡: "partial" (plugin-modelfactory.md covers Generate Model, prerequisites only in release notes) |
| | | | I2 ❌ → 🔀: "only in another persona's tab" (update-prd.sh steps in Install and Develop) |
| | | | I3 ❌ → 🔀: "only in another persona's tab" (install/docker.md and update-prd.sh) |
| | | | I4 ✅ → 🟡: "partial" (no endpoint for listing roles and organizations) |
| | | | I8 ✅ → 🟡: "partial" (webhook fields, filter and payload only external) |
| | | | F2 🟡 → 🔀: "only in another persona's tab" (REST install only in Install and Develop) |
| | | | F9 🔀 → 🟡: "partial" (pre-9 theme page, current approach in release notes) |
| | | | F12 🟡 → ✅: "complete, 2 hops" (plugin-dashboard-panels.md) |
| | | | F13 ❌ → 🟡: "only in release notes" (v2.1, v10, v12) |
| | | | F14 🟡 → ✅: "complete, 2 hops" (plugin-editor-factory.md, position does not block it) |
| | | | E1 🟡 → ✅: "complete, 2 hops" (home page Get Started → guide/introduction.md) |
| | | | E4 🟡 → 🔀: "only in another persona's tab" (GPLv2 only in develop/contribute) |
| | | | E7 ✅ → 🔀: "only in another persona's tab" (Guide never mentions plugins) |
| | | | E9 🟡 → 🔀: "only in another persona's tab" (downloading-installer.md in Install) |
| | | | E10 🟡 → 🔀: "conflicting answers" (PostgreSQL 14, 11, 13) |
| | | | E12 🟡 → 🔀: "conflicting answers" (12, 13, 14 named as current) |
| | | | A6 ❌ → 🟡: "partial" (sitemap.xml and lunr index exist, no llms.txt) |
