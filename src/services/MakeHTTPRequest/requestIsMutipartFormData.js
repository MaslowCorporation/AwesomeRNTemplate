/**
 *
 * @param {*} headers
 * les headers de la requête HTTP
 *
 * @returns si oui ou non la requete
 * est multipart
 */
export const _requestIsMutipartFormData = (headers) => {
  return headers != null && headers["Content-Type"] == "multipart/form-data";
};
