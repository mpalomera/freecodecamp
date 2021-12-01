export type AmplifyDependentResourcesAttributes = {
    "api": {
        "urlshortener": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "resturlshortener": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "function": {
        "urlshortener": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "urlshortenershorturlgraphl": {
            "Arn": "string"
        }
    }
}