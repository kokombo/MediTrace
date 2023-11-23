import { Pressable, Image } from "react-native";
import { icon } from "../../constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const NotificationBell = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

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
