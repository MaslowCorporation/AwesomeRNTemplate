/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 * Ici, on stocke les constantes utiles dans notre appli
 */
const Constants = {

  // la longueur davancement retour arriere, forward backward,
  // lors de visionnage de vidéo
  TRAVEL_TIME_MSEC: 5000,

  // la couleur darrière plan par défaut de lappli
  defaultBackgroundColor: 'pink',

  // la couleur de contenu par défaut de lappli
  defaultContentColor: 'black',

  // le font par défaut
  defaultFontFamily: 'ComingSoon',

  // la durée maximale des vidéo filmées
  maxVideoDuration: 3,

  // les catégories de leçons.
  besoinsDeBase: 0,
  besoinsSpirituels: 1,
  besoinsTerritoriaux: 2,

  // le groupe par défaut de rows de DB
  defaultGroupName: 'groupe24',

  // oui, ou non ?
  true: 0,
  false: 1,

  // la hauteur/marge de barre (bottom, top, etc...)
  // par défaut
  defaultBarHeight: 75,
  defaultBarMargin: 5,

  apiErrorCodes: {
    400: "SOME_SERVER_PROBLEM",
    410: "NO_API_KEY_GIVEN",
    411: "UNKNOWN_API_KEY_GIVEN",
    412: "UNKNOWN_GOOGLE_USER_IN_DATABASE",
    413: "API_ACCOUNT_INACTIVE",
    414: "API_CREDITS_EMPTY",
    415: "KING_API_KEY_INACTIVE",
    416: "KING_API_KEY_INVALID",
    417: "GOOGLE_USER_UID_MISSING",
    418: "GOOGLE_USER_EMAIL_MISSING",
    419: "GOOGLE_USER_UID_INVALID",
    420: "NO_FILE_UPLOADED",
    421: "UPLOAD_FAILED",
    422: "WEBHOOK_SIG_VERIF_FAILED",
    423: "UNKNOWN_BULLMQ_JOB"
  }

};

export { Constants };
