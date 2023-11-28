import * as Haptics from "expo-haptics";

const useHaptic = () => {
  const triggerVibration = async () => {
    try {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (error) {
      return;
    }
  };

  return { triggerVibration };
};

export default useHaptic;
