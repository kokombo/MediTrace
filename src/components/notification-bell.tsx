import { Pressable, Image } from "react-native";
import { icon } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import type { NavigationType } from "../types/types";

const NotificationBell = () => {
  const navigation: NavigationType = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("notification")}>
      <Image
        source={icon.bell}
        resizeMode="contain"
        style={{ height: 24, width: 24 }}
      />
    </Pressable>
  );
};

export default NotificationBell;
