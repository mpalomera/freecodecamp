"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateShorturl = exports.deleteShorturl = exports.createShorturl = void 0;

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