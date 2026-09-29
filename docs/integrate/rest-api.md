---
sidebar_position: 2
sidebar_label: REST API
description: What the iDempiere REST API covers, how its resources map to iDempiere concepts, and where each topic is documented.
---

# REST API

The REST API is an iDempiere plugin that exposes the server over HTTP with JSON. Queries follow the OData standard. BX Service maintains it in the [idempiere-rest](https://github.com/bxservice/idempiere-rest) repository.

The full reference is the [iDempiere REST documentation](https://bxservice.github.io/idempiere-rest-docs/). This page gives you the overview and links to the right page there.

<!-- TODO: verify — which iDempiere versions the current plugin supports. The repository README says "Current Default 12". -->

## Resources

The API is organized by resource. Each resource maps to a part of iDempiere you already know.

| Resource | Works with | Reference |
|---|---|---|
| Models<br/>`/api/v1/models/{tableName}` | Records of any table, and their attachments | [CRUD operations](https://bxservice.github.io/idempiere-rest-docs/docs/category/crud-operations) |
| Views<br/>`/api/v1/views/{viewName}` | REST views: a JSON-friendly set of columns on top of a model | [REST views](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/rest-views) |
| Windows<br/>`/api/v1/windows` | Windows and tabs | [Windows](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/other-resources/windows) |
| Processes<br/>`/api/v1/processes` | Processes and reports | [Processes](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/processes) |
| Info windows<br/>`/api/v1/infos` | Info windows | [Info](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/other-resources/info) |
| Workflow<br/>`/api/v1/workflow` | Workflow nodes: approve, reject, forward, acknowledge | [Workflows](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/workflows) |
| Files<br/>`/api/v1/files` | Files created by `/api/v1/processes` | [Processes](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/processes) |
| Uploads<br/>`/api/v1/uploads` | Large files uploaded in chunks, for attachments, images and archives | [Uploads](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/uploads) |

Forms, references, caches, nodes, servers, charts, the menu tree and a health endpoint are listed under [other resources](https://bxservice.github.io/idempiere-rest-docs/docs/category/other-resources).

## Authentication

Logging in through the API follows the same steps as the iDempiere login screen. You pick a tenant, a role and an organization.

1. Send `POST /api/v1/auth/tokens` with `userName` and `password`. The response contains a `token` and the list of `clients` (tenants) the user can access.
2. Use that token to look up the roles, organizations and warehouses the user can choose.
3. Send `PUT /api/v1/auth/tokens` with `clientId`, `roleId`, `organizationId`, `warehouseId` and `language`. The response contains the final `token` and a `refresh_token`.

If you already know the IDs, send them in a `parameters` object with the first `POST` to log in in one step.

Send the token with every request:

```http
Authorization: Bearer <token>
```

| Topic | Default | Setting |
|---|---|---|
| Token lifetime | 60 minutes | `REST_TOKEN_EXPIRE_IN_MINUTES` |
| Refresh token lifetime | 1 day of inactivity | `REST_REFRESH_TOKEN_EXPIRE_IN_MINUTES` |
| Maximum session length | 1 week | `REST_TOKEN_ABSOLUTE_EXPIRE_IN_MINUTES` |

Get a new token with `POST /api/v1/auth/refresh` and end the session with `POST /api/v1/auth/logout`.

See [Authentication](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/authentication) for the full request and response formats.

## Query records

Read records with `GET /api/v1/models/{tableName}` and OData-style query options:

```http
GET /api/v1/models/c_bpartner?$filter=isCustomer eq true AND startswith(name,'Pa')&$orderby=Name desc&$top=10&$skip=5&$select=Name,IsActive
```

| Option | Use it to |
|---|---|
| `$filter` | Filter records. Supports `eq`, `neq`, `in`, `gt`, `ge`, `lt`, `le`, `and`, `or`, `not`, `contains()`, `startswith()` and `endswith()`. |
| `$select` | Return only the columns you need. |
| `$expand` | Include related detail records in the same response. |
| `$orderby` | Sort by one or more columns, `asc` or `desc`. |
| `$top`, `$skip` | Page through results. |
| `$valrule`, `$context` | Apply an iDempiere validation rule, with context variables. |

A single request returns at most 100 records by default. The `REST_MAX_RECORDS_SIZE` setting changes this limit.

See [Querying data](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/crud-operations/querying-data). Creating, updating and deleting records are covered in the same [CRUD operations](https://bxservice.github.io/idempiere-rest-docs/docs/category/crud-operations) section.

## Explore the API

- **Swagger UI.** Try requests in the browser with the public [Swagger UI](https://hengsin.github.io/idempiere-rest-swagger-ui).
- **OpenAPI.** Get an OpenAPI 3.0.0 description of a table with `GET /api/v1/models/{tableName}/yaml`, or of a REST view with `GET /api/v1/views/{viewName}/yaml`. Send the header `Accept: application/yaml`. See [OpenAPI support](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/configuration/openapi_support).
- **Postman.** The repository includes a [Postman collection](https://github.com/bxservice/idempiere-rest/tree/master/postman).

## React to changes with webhooks

- **Outbound webhooks** send a signed `POST` to your endpoint when a record is created, updated or deleted, or when a document changes status. Configure them in the Webhook Outbound window.
- **Inbound webhooks** accept a signed `POST` at `/api/v1/webhooks/{key}` and pass the payload to an iDempiere process. Configure them in the Webhook Inbound window.

Both follow the Standard Webhooks specification. Turn them on with the `REST_WEBHOOK_ENABLED` and `REST_WEBHOOK_INBOUND_ENABLED` settings. See [Webhooks](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/webhooks).

## Configure the API

| Task | Reference |
|---|---|
| Change token lifetimes, record limits and other settings | [SysConfig keys](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/configuration/sysconfig_keys) |
| Limit which roles can use which resources | [Role access control](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/configuration/role_access_control) |
| Connect another server without a user login | [Server to server tokens](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/configuration/server-to-server) |
| Add your own endpoints | [Custom endpoints](https://bxservice.github.io/idempiere-rest-docs/docs/api-guides/configuration/custom_endpoints) |

## Get help

Ask questions in the [REST channel on Mattermost](https://mattermost.idempiere.org/idempiere/channels/rest).
