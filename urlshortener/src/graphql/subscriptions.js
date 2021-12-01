/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShorturl = /* GraphQL */ `
  subscription OnCreateShorturl {
    onCreateShorturl {
      id
      shorturl
      originalurl
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateShorturl = /* GraphQL */ `
  subscription OnUpdateShorturl {
    onUpdateShorturl {
      id
      shorturl
      originalurl
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteShorturl = /* GraphQL */ `
  subscription OnDeleteShorturl {
    onDeleteShorturl {
      id
      shorturl
      originalurl
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise {
    onCreateExercise {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise {
    onUpdateExercise {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise {
    onDeleteExercise {
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
