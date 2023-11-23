import * as FileSystem from "expo-file-system";

export const useImageToFile = async (uri: string) => {
  const fileInfo = await FileSystem.getInfoAsync(uri);
  const { uri: localUri } = fileInfo;

  const file = {
    uri: localUri,
  };

  return { file };
};
