/* PLOP_INJECT_IMPORT */
//import React from "react";

import notifee from '@notifee/react-native';

/**
 *
 * @param {*} title
 * le titre de la notif
 *
 * @param {*} body
 * le sous titre de la notif
 *
 * @param {*} extra
 * payload données
 *
 * @param {*} id
 * lidentifiant de notif (nombre)
 *
 * Affiche une notif dans le status bar (la ou ya lheure)
 *
 * Construit avec laide de:
 *
 * https://github.com/wix/react-native-notifications/issues/533#issuecomment-625818174
 * https://github.com/wix/react-native-notifications/issues/533#issuecomment-676199941
 */
const ShowNotification = async ({ title, body, extra, id }) => {
  /* PLOP_INJECT_CODE */

  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });


  // Display a notification
  await notifee.displayNotification({
    title,
    body: body,
    android: {
      channelId,
      smallIcon: 'notification_icon', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });


};

export { ShowNotification };
