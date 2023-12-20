import { strings_en } from "./translations/strings_en.js";
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_IMPORT */
import { I18n } from 'i18n-js';

/**
 *
 * Cette fonction initialise les parmètres par défaut du répertoire de strings.
 * Cette fonction retourne le répertoire de strings, loaded et initialized.
 * */
const AppStrings = () => {
  const i18n = new I18n({
    src: {
      /* PLOP_INJECT_SRC_STRING */
      APIScreenMsg: "Use the button below to subscribe to the API, or to buy API Credits, or to get info about your API Subscription, then enter your API Key in the prompt, and finally, press the prompt button.",
      EnterAPIKeyHere: "Enter your API Key here",
      APIButtonText: "The powerful API button !",
      SubAPIMsg: "Subscribe to the API",
      Buy5KMsg: "Buy 5000 API Credits",
      GetFreshAPIInfo: `Press this button to get your freshest API info`,
      LemonButton: "Press me",
      LoginError: 'There was a problem during the login.',
      LoginCancel: 'Login canceled',
      Success: "Success",
      Error: "Error",
      "GetToolboxChoice": "What do you want to do ?",

      APIKeySuccess: `API Key given successfully !`,
      APICreditsError: "We couldn't generate a API Credits checkout link for you.... Try again, soldier !",
      LetsBuyAPICredits: "Let's go to the API Credits checkout page !",
      APISubError: "We couldn't generate a API subscription link for you.... Try again, soldier !",
      LetsAPISub: "Let's go to the API subscription page !",
      asyncWorkSuccess: "The asynchronous work completed successfully ;-)",
      asyncWorkStarted: "The asynchronous work just started ;-)",



      Login: "Login (Google)",
      Logout: "Logout (Google)",

      xJ9h8fL1: "set checkInput to true",
      xOlvmwdF: "Oops... Try again",

      xpz3vNzy: "Scanner",

      xlEu9A5o: "This API key is not valid. Please enter a valid API key.",

      xbfB9hke: "API Key",

      AddAPIKey: "Add an API key, buddy",
      "x0qpHyto": `The cloud data restore failed ! Try again, soldier !`,
      "xSpTMl1n": `Your data is now locally restored, from the cloud !`,
      "xAmgHBho": `The cloud save failed ! Try again, soldier !`,
      "xNUgKxo": `Your data is now safe in the cloud !`,

      "xK6jy8ax": "Write the name of this thing, adventurer!",
      "xdBhrfN": "Oops... This value is not valid.",
      "xBlM1Zi": "Title",
      "xriErHWm": "This page is empty! Please fill me up.",
      "xE8cpvzD": "Fill me up!",
      "pressToDelete": "Press the button to remove this item from your list",
      "ZeFokinToolz": "The Tools",
      "Add": "Add",
      "Edit": "Modify",
      "cancel": "Mission cancelled",
      "country": "en",
      "typeHere": "Write here",
      "doWeDelete": "Do you really want to delete this item?",
      "poubelle": "Heading to the cosmic trash bin.",
      "DOB": "Date of birth",
      "OK": "OK",
      "TypeSomePlz": "You need to write something.",
      "TypeBabyName": "Give him a name.",
      "askExtStoragePerm": "The app needs to store data on your device. Do you accept?",
      "question": "What do you want to do?",
      "plzWait": "Please wait, if you please.",
      "annuler": "Cancel",
      "non": "No",
      "oui": "Yes",
      "besoinsDeBase": "D.I.Y., Food Production, Handicrafts, etc...",
      "besoinsSpirituels": "Human Relations, Psychology, Philosophy, Spirituality, etc...",
      "besoinsTerritoriaux": "Self-Defense, Martial Arts, etc...",
      "chooseCategory": "Which category of Maslow's Pyramid does your tutorial fall under?",
      "Toolbox": "Tools",
      "NoTools": "No tools available",
      "AddTool": "Add a tool",
      "WrongTool": "This tool is crap",
      "SaveDBCloud": "Save your user data in the cloud",
      "BackupDBCloud": "Recover your user data, stored in the cloud",


      /* PLOP_INJECT_SRC_END */
    },
    /* PLOP_INJECT_INTL_STRINGS */
    "en": strings_en,
  });

  // Set the locale once
  // at the beginning of your app.
  i18n.locale = Intl.DateTimeFormat().resolvedOptions().locale;
  i18n.defaultLocale = 'src';

  // When a value is missing from a language,
  // it'll fallback to another language with the key present.
  i18n.enableFallback = true;

  return i18n;
};

/**
 *
 * Bonjour, Holà, Hello,
 *
 * Ci dessous, se trouve une bibliothèque de strings
 * multilingues.
 *
 * ce petit bébé, nommé i18n,
 * contient les strings, ze graal, ze caviar kush champagne !
 * cet objet est destiné à être exporté et réutilisé
 * partout dans ton application !
 *
 */
const app_strings = AppStrings();

export { AppStrings, app_strings };
