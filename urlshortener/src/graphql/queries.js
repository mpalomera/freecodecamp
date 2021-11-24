/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShorturl = /* GraphQL */ `
  query GetShorturl($id: ID!) {
    getShorturl(id: $id) {
      id
      shorturl
      originalurl
      createdAt
      updatedAt
    }
  }
`;
export const listShorturls = /* GraphQL */ `
  query ListShorturls(
    $filter: ModelShorturlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShorturls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        shorturl
        originalurl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
