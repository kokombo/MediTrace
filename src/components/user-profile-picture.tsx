import { Pressable, Image } from "react-native";
import { useSelector } from "react-redux";
import { StateType } from "../redux/store";
import { useSelectProfilePicture } from "../hooks";

const UserProfilePicture = () => {
  const { user, picture } = useSelector((state: StateType) => state.user);

  console.log(picture);

  const { pickImageAsync, selectedImage } = useSelectProfilePicture();

  return (
    <Pressable onPress={() => pickImageAsync()}>
      <Image
        source={{ uri: selectedImage || user?.profile_picture }}
        resizeMode="contain"
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />
    </Pressable>
  );
};

export default UserProfilePicture;
