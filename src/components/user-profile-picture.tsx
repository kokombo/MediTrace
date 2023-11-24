import { Pressable, Image, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { StateType } from "../redux/store";
import { useSelectProfilePicture } from "../hooks";
import { COLORS } from "../../constants";
import Toast from "react-native-toast-message";

const UserProfilePicture = () => {
  const { user, picture, error, status } = useSelector(
    (state: StateType) => state.user
  );

  const { pickImage } = useSelectProfilePicture();

  return (
    <Pressable
      onPress={() => pickImage()}
      style={{
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {status.uploadProfilePicture === "loading" ? (
        <ActivityIndicator size={"small"} color={COLORS.blue} />
      ) : (
        <Image
          source={{ uri: picture || user?.profile_picture }}
          resizeMode="contain"
          style={{ width: "100%", height: "100%", borderRadius: 100 }}
        />
      )}
    </Pressable>
  );
};

export default UserProfilePicture;
