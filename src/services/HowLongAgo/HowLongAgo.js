/* PLOP_INJECT_IMPORT */
//import React from "react";

// permet date de création jolie comme youtube.
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';

// multilingue
import { app_strings } from 'src/stringRepos/AppStrings/AppStrings';

/**
 *
 * @param {*} param1,
 *
 * @returns ...
 *
 * Cette fonction permet de ...
 */
const HowLongAgo = ({ creationDate }) => {
  /* PLOP_INJECT_CODE */

  // linstant T

  const formattedDate = GetFormattedDate();


  // ça fait combien de temps que ce truc est né
  const DOB = creationDate
    ? formattedDate
    : null;

  // date de naissance, en texte
  return DOB;
};

export function GetFormattedDate() {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  if (locale.startsWith('en')) {
    // For English locales, format the date as 'yyyy/MM/dd'
    return `${year}/${month}/${day}`;
  } else {
    // For other locales, you can use the default date formatting
    return date.toLocaleDateString(locale);
  }
}




export { HowLongAgo };

