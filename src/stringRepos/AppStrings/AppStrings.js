
//
/* PLOP_INJECT_IMPORT */

import 'intl-pluralrules';
import i18next from 'i18next';
import { ReactNativeLanguageDetector } from 'react-native-localization-settings';


/**
 * AppStrings
 * est une bibliothèque de strings multilingues
 *
 * il faut initialiser cette bibliothèque dans App.js,
 * avec la fonction d'init
 *
 */

// les strings selon pays
const translations = {
  en: {
    translation: {
      /* PLOP_INJECT_SRC_STRING */
      NO_API_KEY_GIVEN: "You don't have an API key... Go to your Settings page, and set your API key ;-)",
      SOME_SERVER_PROBLEM: "There was a server error. Check your Internet connection and try again.",
      UNKNOWN_API_KEY_GIVEN: "The API key you provided is unknown in our database. John Doe ;-)",
      UNKNOWN_GOOGLE_USER_IN_DATABASE: "Google user not found in the database",
      API_ACCOUNT_INACTIVE: "API account is inactive",
      API_CREDITS_EMPTY: "Your API credits bank is empty. Go to your Settings page to buy some more ;-)",
      KING_API_KEY_INACTIVE: "King API key is inactive",
      KING_API_KEY_INVALID: "King API key is invalid",
      GOOGLE_USER_UID_MISSING: "Google user UID is missing",
      GOOGLE_USER_EMAIL_MISSING: "Google user email is missing",
      GOOGLE_USER_UID_INVALID: "Google user UID is invalid",
      NO_FILE_UPLOADED: "No file was uploaded",
      UPLOAD_FAILED: "File upload failed",
      WEBHOOK_SIG_VERIF_FAILED: "Webhook signature verification failed",
      UNKNOWN_BULLMQ_JOB: "Unknown BullMQ job",
      "xYJkIqwm": "New instance cannot be created!!",
      "xO7ZBv8": "No access to camera",
      "xFjUd1xH": "File Saved to gallery!",
      "xHCVPMcX": "No QR code to download.",
      "xGmtzh7t": "Do you want to delete this work?",
      "x0vdnKW5": "Some work is already going on, brother!",
      "xWQ2YEPr": "Do you want to delete this work?",
      "xb9dUQ9T": "Some work is already going on, my dear brother!",
      "xc3lKws4": "Permission Denied! You need to give storage permission to download the file",
      "xtJmvMj6": "Deletion successful!! :",
      "xPRoIUP": "New instance cannot be created!",
      "x8dg9LRr": "Login successful! But.... This account doesn't exist!",
      "xGURyoWg": "Login successful!",
      "xgpEDcQ5": "Login stopped ;-)",
      "xMhxIbI3": "Login failed... Try again ;-)",
      "xko6nGyO": "Logout failed... Try again ;-)",
      "x6lEqMKs": "Logout successful!",
      "xfnALXBd": "Blue pill, Red pill? Choose a pill as you please.",
      "xNPv7aa": "Blue pill, Red pill? Choose a pill as you please.",
      "xlCyp2sY": "Option 2",
      "xmQbIBwM": "Option 1",
      "xoG44AdY": "Blue pill, Red pill? Choose a pill as you please.",
      "xRDM5lr2": "Blue pill, Red pill? Choose a pill if you please.",
      "xL6HQGEv": "Option 2",
      "xyyaUqVV": "Option 1",
      "x1KVUz3U": "Cannot create a new instance of PlayerGTA.",
      "xyjJ1GaA": "This button is useless",
      "xsQxpbdW": "Add some choices, dude, in your program",
      "xSoZVodD": "This button is useless",
      "xPgSenoH": "Add some questions, dude, in your program",
      "APIScreenMsg": "Use the button below to subscribe to the API, or to buy API Credits, or to get info about your API Subscription, then enter your API Key in the prompt, and finally, press the prompt button.",
      "EnterAPIKeyHere": "Enter your API Key here",
      "APIButtonText": "The powerful API button!",
      "SubAPIMsg": "Subscribe to the API",
      "Buy5KMsg": "Buy 5000 API Credits",
      "GetFreshAPIInfo": "Press this button to get your freshest API info",
      "LemonButton": "Press me",
      "LoginError": "There was a problem during the login.",
      "LoginCancel": "Login canceled",
      "Success": "Success",
      "Error": "Error",
      "GetToolboxChoice": "What do you want to do?",
      "APIKeySuccess": "API Key given successfully!",
      "APICreditsError": "We couldn't generate an API Credits checkout link for you.... Try again, soldier!",
      "LetsBuyAPICredits": "Let's go to the API Credits checkout page!",
      "APISubError": "We couldn't generate an API subscription link for you.... Try again, soldier!",
      "LetsAPISub": "Let's go to the API subscription page!",
      "Login": "Login (Google)",
      "Logout": "Logout (Google)",
      "xlEu9A5o": "This API key is not valid. Please enter a valid API key.",
      "xbfB9hke": "API Key",
      "AddAPIKey": "Add an API key, buddy",
      "x0qpHyto": "The cloud data restore failed! Try again, soldier!",
      "xSpTMl1n": "Your data is now locally restored, from the cloud!",
      "xAmgHBho": "The cloud save failed! Try again, soldier!",
      "xNUgKxo": "Your data is now safe in the cloud!",
      "xK6jy8ax": "Write the name of this thing, adventurer!",
      "xdBhrfN": "Oops... This value is not valid.",
      "xBlM1Zi": "Title",
      "xriErHWm": "This page is empty! Please fill me up.",
      "xE8cpvzD": "Fill me up!",
      "pressToDelete": "Press the button to remove this item from your list",
      "ZeFokinToolz": "The Tools",
      "Add": "Add",
      "Edit": "Edit",
      "country": "en",
      "typeHere": "Type here",
      "doWeDelete": "Do you really want to delete this item?",
      "poubelle": "Heading to the cosmic trash bin.",
      "DOB": "Date of birth",
      "TypeSomePlz": "Please type something.",
      "TypeBabyName": "Give him a name.",
      "askExtStoragePerm": "The app needs permission to store data on your device. Do you accept?",
      "annuler": "Cancel",
      "non": "No",
      "oui": "Yes",
      "besoinsDeBase": "Basic Needs",
      "besoinsSpirituels": "Spiritual Needs",
      "besoinsTerritoriaux": "Territorial Needs",
      "chooseCategory": "Which category of Maslow's Pyramid does your tutorial fall under?",
      "Toolbox": "Tools",
      "NoTools": "No tools available",
      "AddTool": "Add a tool",
      "WrongTool": "This tool is crap",
      "SaveDBCloud": "Save your user data in the cloud",
      "BackupDBCloud": "Recover your user data, stored in the cloud"

      /* PLOP_INJECT_SRC_END */
    },
  },
  /* PLOP_INJECT_INTL_STRINGS */

};

function InitAppStrings() {
  //const i18nApp2 = i18next.createInstance();

  i18next
    .use(ReactNativeLanguageDetector)
    .init({
      fallbackLng: 'en',
      resources: translations,
    });

  return i18next;
}

const app_strings = InitAppStrings();

export { InitAppStrings, app_strings };
