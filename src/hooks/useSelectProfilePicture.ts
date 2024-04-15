import * as ImagePicker from "expo-image-picker";
import { useUploadProfilePicture } from "./useUploadProfilePicture";

export const useSelectProfilePicture = () => {
  const { uploadProfilePicture } = useUploadProfilePicture();

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

        uploadProfilePicture(file);
      }
    } else {
      return;
    }
  };

  return { pickImage };
};
