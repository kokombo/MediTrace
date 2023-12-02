import { Pressable, Image, ActivityIndicator, Alert } from "react-native";
import { useSelector } from "react-redux";
import { StateType } from "../redux/store";
import { useSelectProfilePicture } from "../hooks";
import { COLORS } from "../../constants";
import * as MediaLibrary from "expo-media-library";

const UserProfilePicture = () => {
  const { user, picture, error, status } = useSelector(
    (state: StateType) => state.user
  );
  const [response, requestPermission] = MediaLibrary.usePermissions();

  if (response === null) {
    requestPermission();
  }

  const { pickImage } = useSelectProfilePicture();

  const handlePickImage = () => {
    if (response?.granted) {
      pickImage();
    } else {
      Alert.alert("Permission is required to access media");
    }
  };

  return (
    <Pressable
      onPress={handlePickImage}
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
