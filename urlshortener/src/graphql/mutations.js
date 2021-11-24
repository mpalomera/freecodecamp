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
