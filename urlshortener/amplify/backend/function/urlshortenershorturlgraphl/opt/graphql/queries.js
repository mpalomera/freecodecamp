"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listUsers = exports.listShorturls = exports.listExercises = exports.getUser = exports.getShorturl = exports.getExercise = void 0;

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
const getUser =
/* GraphQL */
`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      logs {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
exports.getUser = getUser;
const listUsers =
/* GraphQL */
`
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
exports.listUsers = listUsers;
const getExercise =
/* GraphQL */
`
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      description
      duration
      date
      user {
        id
        username
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userLogsId
    }
  }
`;
exports.getExercise = getExercise;
const listExercises =
/* GraphQL */
`
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        duration
        date
        createdAt
        updatedAt
        userLogsId
      }
      nextToken
    }
  }
`;
exports.listExercises = listExercises;