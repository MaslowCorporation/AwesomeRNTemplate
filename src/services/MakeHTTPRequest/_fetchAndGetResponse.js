import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

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
export async function _fetchAndGetResponse({
  requestType,
  url,
  headers,
  body,
  onGrabCanceller,
}) {
  // permet cancel requête
  const controller = new AbortController();
  const signal = controller.signal;

  // récupère si possible le controller
  // permettant entre le cancel de la requete
  RunIfPossible({ func: onGrabCanceller, args: controller });

  // lance la requête HTTP
  const response = await fetch(url, {
    method: requestType,
    headers: headers,
    body: body,
    signal: signal,
  });

  // return le body de la réponse HTTP, format JSONifié
  const jsonResponse = await response.json();
  return jsonResponse;
}
