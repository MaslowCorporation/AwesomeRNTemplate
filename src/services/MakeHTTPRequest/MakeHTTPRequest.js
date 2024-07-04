/* PLOP_INJECT_IMPORT */
//import React from "react";

import { BeforeDuringAfterPattern } from "../BeforeDuringAfterPattern/BeforeDuringAfterPattern";

import { _MakeHTTPRequest } from "./_MakeHTTPRequest";
import { _OnHTTPRequestDone } from "./_OnHTTPRequestDone";
import { _OnHTTPRequestError } from "./_OnHTTPRequestError";

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
 * callback fournissant les headers de la requête
 *
 * @param {*} body
 * callback fournissant le body de la requête
 *
 * @param {*} onBefore
 * callback avant requête
 *
 * @param {*} onDone
 * callback de résultat de requête
 *
 * @param {*} onError
 * callback de problême durant requête
 *
 * @param {*} onGrabCanceller
 * callback de récup de 'cancelleur/annuleur' de requête HTTP
 *
 *
 * @param {*} onFailSafe
 * ...
 *
 * @param {*} onProgress
 * ...
 *
 * @returns
 *
 * encapsule le processus de création,
 * et traitement dune requete HTTP
 * (conversion en Objet, gestion succès/erreur etc...)
 */
const MakeHTTPRequest = async ({
  url,
  requestType,
  headers,
  body,
  onBefore,
  onDone,
  onError,
  onProgress,
  onFailSafe,
  onGrabCanceller,
}) => {

  return BeforeDuringAfterPattern({
    onBefore: onBefore,
    onDuring: async () => {
      return _MakeHTTPRequest({
        onGrabCanceller,
        requestType: requestType,
        url: url,
        headers: headers != null ? headers() : {},
        body: body != null ? body() : null,
      });
    },
    onDone: (result) => {
      _OnHTTPRequestDone(onDone, result);
    },
    onError: (e) => {
      //

      if (onFailSafe != null) {
        onFailSafe();
      } else {
        _OnHTTPRequestError(e, onError, onFailSafe);
      }
    },
  });
};

export { MakeHTTPRequest };
