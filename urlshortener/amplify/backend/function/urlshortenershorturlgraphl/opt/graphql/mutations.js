"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.updateShorturl = exports.updateExercise = exports.deleteUser = exports.deleteShorturl = exports.deleteExercise = exports.createUser = exports.createShorturl = exports.createExercise = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const createShorturl =
/* GraphQL */
`
  mutation CreateShorturl(
    $input: CreateShorturlInput!
    $condition: ModelShorturlConditionInput
  ) {
    createShorturl(input: $input, condition: $condition) {
      id
      shorturl
      originalurl
      createdAt
      updatedAt
    }
  }
`;
exports.createShorturl = createShorturl;
const updateShorturl =
/* GraphQL */
`
  mutation UpdateShorturl(
    $input: UpdateShorturlInput!
    $condition: ModelShorturlConditionInput
  ) {
    updateShorturl(input: $input, condition: $condition) {
      id
      shorturl
      originalurl
      createdAt
      updatedAt
    }
  }
`;
exports.updateShorturl = updateShorturl;
const deleteShorturl =
/* GraphQL */
`
  mutation DeleteShorturl(
    $input: DeleteShorturlInput!
    $condition: ModelShorturlConditionInput
  ) {
    deleteShorturl(input: $input, condition: $condition) {
      id
      shorturl
      originalurl
      createdAt
      updatedAt
    }
  }
`;
exports.deleteShorturl = deleteShorturl;
const createUser =
/* GraphQL */
`
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
exports.createUser = createUser;
const updateUser =
/* GraphQL */
`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
exports.updateUser = updateUser;
const deleteUser =
/* GraphQL */
`
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
exports.deleteUser = deleteUser;
const createExercise =
/* GraphQL */
`
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
exports.createExercise = createExercise;
const updateExercise =
/* GraphQL */
`
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
exports.updateExercise = updateExercise;
const deleteExercise =
/* GraphQL */
`
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
exports.deleteExercise = deleteExercise;