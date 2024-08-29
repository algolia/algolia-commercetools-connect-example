import { apiSuccess } from '../api/success.api.js';
import CustomError from '../errors/custom.error.js';
import { logger } from '../utils/logger.utils.js';
import { readConfiguration } from '../utils/config.utils.js';
import { transform } from '../functions/transformer.js';

/**
 * Exposed service endpoint.
 * - Receives a POST request with the algoliaProducts to transform
 * and returns the transformed algoliaProducts
 */
export const post = async (request, response) => {

  const config = readConfiguration();

  await validateToken(config, request.headers);

  if ( !request.body ) throw new CustomError(400, 'No request body found');
  if ( typeof(request.body.algoliaProducts) == 'undefined') throw new CustomError(400, 'No algolia products found to transform');

  const algoliaProducts = request.body?.algoliaProducts;
  const newalgoliaProducts = [];
  
  logger.info(`transforming ${algoliaProducts.length} algoliaProducts`);
  for ( let i = 0;i < algoliaProducts.length;i++ ) {
    const newVariant = transform(algoliaProducts[i]);
    newalgoliaProducts.push(newVariant);
  }
  const jsonResponse = {
    algoliaProducts: newalgoliaProducts
  }

  apiSuccess(200, jsonResponse, response);

};


const validateToken = async (config, headers) => {
  const bearer = headers['authorization'];
  const token = bearer.substring("Bearer ".length, bearer.length);

  const clientId = config.clientId;
  const clientSecret = config.clientSecret;
  const region = config.region;

  const base64 = Buffer.from(clientId + ":" + clientSecret).toString('base64');

  const authParams = new URLSearchParams();
  authParams.append("token", token);

  const authHeaders = {
      method: 'POST',
      headers: {
          'Authorization': `Basic ${base64}`
      },
      body: authParams
  }
  const res = await fetch(`https://auth.${region}.commercetools.com/oauth/introspect`, authHeaders)
      .then((response) => response.json())
      .catch((error) => {
          logger.error(`error in introspect token call ${error.message}`, error);
      });
  if ( !res.active ) throw new CustomError(400, `token is not active`);
  if ( res.client_id !== clientId ) throw new CustomError(400, 'token clientId does not match client Id');
}
