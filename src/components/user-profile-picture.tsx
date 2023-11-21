import { Pressable, Image } from "react-native";
import { icon } from "../../constants";

const UserProfilePicture = () => {
  return (
    <Pressable>
      <Image
        source={icon.profilepicture}
        resizeMode="contain"
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />
    </Pressable>
  );
};

export default UserProfilePicture;
