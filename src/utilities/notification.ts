import * as Notifications from "expo-notifications";

export const scheduleNotification = async (
  title: string,
  body: string,
  triggerTime: number,
  sound: string
) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound,
    },
    trigger: {
      seconds: triggerTime,
    },
  });
};
