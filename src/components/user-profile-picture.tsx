import { Pressable, Image, ActivityIndicator, Alert } from "react-native";
import { useSelector } from "react-redux";
import type { StateType } from "../redux/store";
import { useSelectProfilePicture } from "../hooks";
import { COLORS } from "../../constants";
import * as MediaLibrary from "expo-media-library";
import { useUploadProfilePicture } from "../hooks/useUploadProfilePicture";

const UserProfilePicture = () => {
  const { user } = useSelector((state: StateType) => state.user);
  const [response, requestPermission] = MediaLibrary.usePermissions();
  const { isPending, data: picture } = useUploadProfilePicture();

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
        backgroundColor: COLORS.cloud,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isPending ? (
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
