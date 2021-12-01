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
export const getUser = /* GraphQL */ `
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
export const listUsers = /* GraphQL */ `
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
export const getExercise = /* GraphQL */ `
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
export const listExercises = /* GraphQL */ `
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
