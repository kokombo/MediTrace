import { Pressable, Image } from "react-native";
import { icon } from "../../constants";

const NotificationBell = () => {
  return (
    <Pressable>
      <Image
        source={icon.bell}
        resizeMode="contain"
        style={{ height: 24, width: 24 }}
      />
    </Pressable>
  );
};

export default NotificationBell;
