---
sidebar_position: 3
sidebar_label: Connect a frontend
description: The REST API features to use when you build a web or mobile frontend on top of iDempiere, and what is not documented yet.
---

# Connect a frontend

A web or mobile frontend, for example an Angular app, talks to iDempiere through the [REST API](./rest-api.md). This page lists the REST API features that matter for a frontend. Each one links to its reference in the [iDempiere REST documentation](https://bxservice.github.io/idempiere-rest-docs/).

:::info

This site has no end-to-end frontend tutorial yet. The steps below only point to features that are documented.

:::

## Log the user in

Use the two-step login so users choose their tenant, role and organization, as they do on the iDempiere login screen.

1. Send `POST /api/v1/auth/tokens` with the user name and password.
2. Show the tenants, roles and organizations the user can pick.
3. Send `PUT /api/v1/auth/tokens` with the choices. Keep the returned `token` and `refresh_token`.

Tokens expire after 60 minutes by default. Call `POST /api/v1/auth/refresh` with the `refresh_token` to get a new one, and `POST /api/v1/auth/logout` when the user logs out.

See [Authentication](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/authentication).

## Give the frontend a clean data model

iDempiere tables have many columns with database-style names. A REST view lets you publish only the columns a screen needs, rename them for JSON, and set which related records to expand. The frontend then calls `/api/v1/views/{viewName}` instead of `/api/v1/models/{tableName}`.

Define REST views in the `Rest_View`, `Rest_ViewColumn` and `Rest_ViewRelated` windows. See [REST views](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/rest-views).

## Get types for your code

Each table and REST view has an OpenAPI 3.0.0 description:

```http
GET /api/v1/views/{viewName}/yaml
Accept: application/yaml
```

You can feed this file to an OpenAPI client generator to get typed models and request code. The REST documentation does not describe a specific generator. See [OpenAPI support](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/configuration/openapi_support).

## Load lists page by page

Use `$top` and `$skip` to page through lists, and `$select` to load only the columns a list shows. The server returns at most 100 records per request unless `REST_MAX_RECORDS_SIZE` is changed. See [Querying data](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/crud-operations/querying-data).

## Control what each role can call

With `REST_RESOURCE_ACCESS_CONTROL` set to `Y`, which is the default, the API checks the user's role before it serves a resource. Configure which roles can use which resources as described in [Role access control](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/configuration/role_access_control).

## Not documented yet

- **CORS.** A browser app served from another domain needs the server to allow cross-origin requests. Neither this site nor the REST documentation describes how to configure this for iDempiere.
- **Example app.** There is no sample frontend project to start from.

<!-- TODO: verify — needs an author: how to configure CORS for the REST API, and a small working example app (for example Angular) with login, a list and a form. -->
