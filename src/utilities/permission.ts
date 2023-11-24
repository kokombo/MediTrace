import * as Notifications from "expo-notifications";

export const requestPermissionsAsync = async () => {
  const res = await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });

  return res;
};
