import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

import styles from "./styles";

const NOTIFICATION_KEY = "UdaciCards:notifications";
const STORAGE_KEY = "UdaciCards:storage";

export const centerAll = [
  styles.flexOne,
  styles.justifyCenter,
  styles.alignCenter
];

export const calculatePercent = (correct, attempts) =>
  Math.round(correct / attempts * 100);

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
};

const createNotification = () => ({
  title: "You have not studied today.",
  body: "You should study one of your decks every day.",
  ios: { sound: true },
  android: { sound: true, priority: "high", sticky: false, vibrate: true }
});

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY).then(JSON.parse).then(data => {
    if (data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
        if (status === "granted") {
          Notifications.cancelAllScheduledNotificationsAsync();

          let tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(20);
          tomorrow.setMinutes(0);

          Notifications.scheduleLocalNotificationAsync(createNotification(), {
            time: tomorrow,
            repeat: "day"
          });

          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
        }
      });
    }
  });
};

export const rehydrateState = () => {
  AsyncStorage.getItem(STORAGE_KEY)
    .then(JSON.parse)
    .then(state => (state ? state : {}));
};

export const storeState = state =>
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
