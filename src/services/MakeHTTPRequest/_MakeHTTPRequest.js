import { RequestTypes } from "./RequestTypes";
import { _requestIsMutipartFormData } from "./requestIsMutipartFormData";
import { _fetchAndGetResponse } from "./_fetchAndGetResponse";
import { _multipartRequest } from "./_multipartRequest";

/**
 *
 * @param {*} url
 * LURL de la requête HTTP
 *
 * @param {*} requestType
 * Le type de requête HTTP
 * (POST, GET, PUT, DELETE)
 *
 * @param {*} headers
 * les headers de la requête
 *
 * @param {*} body
 * le body de la requête
 *
 * @returns une Promise contenant
 * la réponse obtenue en format JSONifié
 *
 * Fait la requete HTTP, selon besoins.
 */
export const _MakeHTTPRequest = async ({
  requestType,
  url,
  headers,
  body,
  onGrabCanceller,
}) => {

  // si on veut requete POST multipart
  if (requestType == RequestTypes.POST && _requestIsMutipartFormData(headers)) {
    return _multipartRequest({
      requestType: "POST",
      url: url,
      headers: headers,
      body: body,
      onGrabCanceller,
    });
  }
  // si on veut requete PUT multipart
  else if (
    requestType == RequestTypes.PUT &&
    _requestIsMutipartFormData(headers)
  ) {
    return _multipartRequest({
      requestType: "PUT",
      url: url,
      headers: headers,
      body: body,
      onGrabCanceller,
    });
  }
  // si on veut requete POST
  else if (requestType == RequestTypes.POST) {
    // reponse sous forme de json
    return _fetchAndGetResponse({
      requestType: "POST",
      url,
      headers,
      body,
      onGrabCanceller,
    });
  }
  // si on veut requete PUT
  else if (requestType == RequestTypes.PUT) {
    return _fetchAndGetResponse({
      requestType: "PUT",
      url,
      headers,
      body,
      onGrabCanceller,
    });
  }
  // si on veut requete GET
  else if (requestType == RequestTypes.GET) {
    return _fetchAndGetResponse({
      requestType: "GET",
      url,
      headers,
      onGrabCanceller,
    });
  }
  // si on veut requete DELETE
  else if (requestType == RequestTypes.DELETE) {
    return _fetchAndGetResponse({
      requestType: "DELETE",
      url,
      headers,
      onGrabCanceller,
    });
  } else {
    // si ça pue
    throw new Error(``);
  }
};
