# Description
This is an extension service that is called from the [algolia-commercetools-connector](https://github.com/algolia/algolia-commercetools-connector)

This is a commercetools connect app that has 1 app that's a service.  It's meant to be called remotely, passing in variants in order to transform them.

# Connector Properties
The connector has the following properties to add when deploying the connector or installing it locally.
All of the settings should match the settings in the [algolia-commercetools-connector](https://github.com/algolia/algolia-commercetools-connector)

| Property Name | Description |
| ------------- | ----------- |
| CTP_CLIENT_ID | commercetools client ID, which is generated when you create an API Client in the Merchant Center |
| CTP_CLIENT_SECRET | commercetools client secret, which is generated when you create an API Client in the Merchant Center |
| CTP_REGION    | Region where the commercetools project is hosted.  Valid regions are us-central1.gcp, us-east-2.aws, europe-west1.gcp, eu-central-1.aws, australia-southeast1.gcp, cn-northwest-1.aws |
| CTP_PROJECT_KEY | commercetools Composable Commerce project key |
| CTP_SCOPE     | commercetools Composable Commerce client scope, for example manage_project:[CTP_PROJECT_KEY] |

# Before you Begin
To request access to Algolia Salesforce Connector  packages, please contact salesforce-algolia-solutions@algolia.com. Algolia offers the following packages, including service hours to assist with customization:
* Merchant Center App
* Event App
* Front-end Component

You will also need to [create a (free) Algolia account](https://www.algolia.com/users/sign_up) (if not already created).
You can use Algolia with [Standard or Premium plans](https://www.algolia.com/pricing/), but some features are only available in the Premium plan.

## Architecture principles for building or modifying this connect application 

* Connector solution should be lightweight in nature
* Connector solutions should follow test driven development. Unit , Integration (& E2E) tests should be included and successfully passed to be used
* No hardcoding of customer related config. If needed, values in an environment file which should not be maintained in repository
* Connector solution should be supported with detailed documentation
* Connectors should be point to point in nature, currently doesnt support any persistence capabilities apart from in memory persistence
* Connector solution should use open source technologies, although connector itself can be private for specific customer(s)
* Code should not contain console.log statements, use [the included logger](https://github.com/commercetools/merchant-center-application-kit/tree/main/packages-backend/loggers#readme) instead.
