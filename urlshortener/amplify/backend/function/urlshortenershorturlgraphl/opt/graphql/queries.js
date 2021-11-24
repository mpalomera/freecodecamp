"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listShorturls = exports.getShorturl = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const getShorturl =
/* GraphQL */
`
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
exports.getShorturl = getShorturl;
const listShorturls =
/* GraphQL */
`
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
exports.listShorturls = listShorturls;