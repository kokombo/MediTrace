import * as Notifications from "expo-notifications";

export const scheduleNotification = async (
  title: string,
  body: string,
  triggerTime: number
) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: {
      seconds: triggerTime,
    },
  });
};
