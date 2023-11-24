import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useDispatch } from "react-redux";
import { uploadProfilePicture } from "../redux/slices/user";
import { DispatchType } from "../redux/store";

export const useSelectProfilePicture = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const dispatch: DispatchType = useDispatch();

  const pickImageAsync = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!res.canceled) {
      setSelectedImage(res.assets[0].uri);

      const file: File = {
        //@ts-ignore
        uri: res.assets[0].uri,
        name: res.assets[0].uri,
        type: "image/jpeg",
      };

      if (res.assets[0].uri) {
        dispatch(uploadProfilePicture(file));
      }
    }
  };

  return { pickImageAsync, selectedImage };
};
