import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { uploadProfilePicture } from "../redux/slices/user";
import { DispatchType } from "../redux/store";
import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

export const useSelectProfilePicture = () => {
  const dispatch: DispatchType = useDispatch();

  const pickImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!res.canceled) {
      if (res.assets[0].uri) {
        const file: File = {
          // @ts-ignore
          uri: res.assets[0].uri,
          name: res.assets[0].uri.split("/").pop() as string,
          type: "image/jpeg",
        };

        dispatch(uploadProfilePicture(file));
      }
    } else {
      return;
    }
  };

  return { pickImage };
};
