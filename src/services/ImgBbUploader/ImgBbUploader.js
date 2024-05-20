/* PLOP_INJECT_IMPORT */
//import React from "react";

import { Constants } from "src/constants/Constants";
import { MakeHTTPRequest } from "../MakeHTTPRequest/MakeHTTPRequest";
import { RequestTypes } from "../MakeHTTPRequest/RequestTypes";

/**
 *
 * @param {*} onDone
 * @param {*} onError
 * @param {*} grabCanceller
 * @param {*} imgPath
 * @param {*} apiKey
 *
 * @returns luploader de photo sur un compte ImgBB, via API
 */
const ImgBbUploader = ({ onDone, onError, grabCanceller, imgPath, apiKey }) => {
  /* PLOP_INJECT_CODE */

  //

  MakeHTTPRequest({
    onGrabCanceller: grabCanceller,
    requestType: RequestTypes.POST,
    url: `${Constants.imgBBEndpoint}?key=${apiKey}`,
    onDone: onDone,
    onError: onError,
    headers: () => {
      return {
        "Content-Type": "multipart/form-data",
      };
    },
    body: () => {
      return {
        image: imgPath,
      };
    },
  });

  return;
};

export { ImgBbUploader };
