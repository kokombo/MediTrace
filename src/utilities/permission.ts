import * as Notifications from "expo-notifications";

export const requestPermissionsAsync = async () => {
  try {
    const res = await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    });

    return res;
  } catch (error) {
    return;
  }
};
