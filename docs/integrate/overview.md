---
sidebar_position: 1
sidebar_label: Overview
description: Ways to connect external applications and frontends to iDempiere, and where each one is documented.
---

# Integrate with iDempiere

This section is for developers who connect other applications to iDempiere, for example a web shop, a mobile app or a custom frontend.

## Choose an integration method

| You want to | Use | Start here |
|---|---|---|
| Read and write iDempiere data from another application | REST API | [REST API](./rest-api.md) |
| Build a web or mobile frontend on iDempiere | REST API | [Connect a frontend](./connect-a-frontend.md) |
| Notify another system when records or documents change | REST API outbound webhooks | [Webhooks](./rest-api.md#react-to-changes-with-webhooks) |
| Keep an existing XML integration running | SOAP web services | [SOAP web services](./soap-web-services.md) |

The REST API is the recommended way to integrate with iDempiere. Since iDempiere 14, SOAP web services are an optional plugin.

## Where the documentation lives

| Topic | Location |
|---|---|
| Overview and how the REST API fits iDempiere | This section |
| Full REST API reference | [iDempiere REST documentation](https://bxservice.github.io/idempiere-rest-docs/) |
| Try requests in the browser | [Swagger UI](https://hengsin.github.io/idempiere-rest-swagger-ui) |
| REST API source code | [idempiere-rest on GitHub](https://github.com/bxservice/idempiere-rest) |
| SOAP web services source code | [idempiere-soap-webservices on GitHub](https://github.com/idempiere/idempiere-soap-webservices) |
