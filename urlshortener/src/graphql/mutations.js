/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShorturl = /* GraphQL */ `
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
export const updateShorturl = /* GraphQL */ `
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
export const deleteShorturl = /* GraphQL */ `
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
export const createUser = /* GraphQL */ `
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
export const updateUser = /* GraphQL */ `
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
export const deleteUser = /* GraphQL */ `
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
export const createExercise = /* GraphQL */ `
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
export const updateExercise = /* GraphQL */ `
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
export const deleteExercise = /* GraphQL */ `
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
