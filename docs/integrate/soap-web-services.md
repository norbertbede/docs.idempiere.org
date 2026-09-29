---
sidebar_position: 4
sidebar_label: SOAP web services
description: The SOAP web services plugin, which provides the CompositeService and ModelADService endpoints for XML-based integration.
---

# SOAP web services

SOAP web services provide the `CompositeService` and `ModelADService` endpoints for XML-based integration. For new integrations, use the [REST API](./rest-api.md).

## History

- **iDempiere 14:** the web services bundle moved out of core into its own plugin, [idempiere-soap-webservices](https://github.com/idempiere/idempiere-soap-webservices). Install it with the Extension Manager. See [SOAP Web Services plugin](../release-notes/v14/soap-web-services-plugin.md).
- **iDempiere 9:** requests and responses can use JSON instead of XML. See [JSON request and response support for web services](../release-notes/v9/json-request-and-response-support-for-web-services.md).
- **iDempiere 1.0:** web services were converted to an iDempiere plugin. See [Web services improvements](../release-notes/v1.0/web-services-improvements.md).

:::warning

If you upgrade to iDempiere 14 and use SOAP web services, install the plugin after the upgrade. The SOAP endpoints are not available until you do.

:::
