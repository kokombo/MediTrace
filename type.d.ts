import { ImageSourcePropType } from "react-native";

type User = {
  uid: string;
  fullName: string;
  email: string;
  picture: ImageSourcePropType;
  refreshToken: string;
};
