"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onUpdateUser = exports.onUpdateShorturl = exports.onUpdateExercise = exports.onDeleteUser = exports.onDeleteShorturl = exports.onDeleteExercise = exports.onCreateUser = exports.onCreateShorturl = exports.onCreateExercise = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const onCreateShorturl =
/* GraphQL */
`
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
exports.onCreateShorturl = onCreateShorturl;
const onUpdateShorturl =
/* GraphQL */
`
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
exports.onUpdateShorturl = onUpdateShorturl;
const onDeleteShorturl =
/* GraphQL */
`
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
exports.onDeleteShorturl = onDeleteShorturl;
const onCreateUser =
/* GraphQL */
`
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
exports.onCreateUser = onCreateUser;
const onUpdateUser =
/* GraphQL */
`
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
exports.onUpdateUser = onUpdateUser;
const onDeleteUser =
/* GraphQL */
`
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
exports.onDeleteUser = onDeleteUser;
const onCreateExercise =
/* GraphQL */
`
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
exports.onCreateExercise = onCreateExercise;
const onUpdateExercise =
/* GraphQL */
`
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
exports.onUpdateExercise = onUpdateExercise;
const onDeleteExercise =
/* GraphQL */
`
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
exports.onDeleteExercise = onDeleteExercise;