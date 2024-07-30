/**
 * Send a success response to the client
 *
 * @typedef {import("@commercetools/sdk-client-v2").UpdateAction} UpdateAction
 * @typedef {import("express").Response} Response
 *
 * @param {Response} response Express response
 * @param {number} statusCode The status code of the operation
 * @returns Success response with 200 status code and the update actions array
 */
export const apiSuccess = (statusCode, variantJson, response) => {

  response.status(statusCode).json(variantJson);
};
