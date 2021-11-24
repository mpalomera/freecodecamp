"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onUpdateShorturl = exports.onDeleteShorturl = exports.onCreateShorturl = void 0;

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