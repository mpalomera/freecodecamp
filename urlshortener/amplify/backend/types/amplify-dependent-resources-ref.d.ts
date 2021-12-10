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
    },
    "auth": {
        "urlshortenera575f4c7": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "files": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}