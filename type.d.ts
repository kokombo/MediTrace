import { ImageSourcePropType } from "react-native";
import { NavigationProp } from "@react-navigation/native";

type User = {
  uid: string;
  fullName: string;
  email: string;
  picture: ImageSourcePropType;
  refreshToken: string;
};

type Button = {
  label: string;
  onPress: () => void | NavigationProp<ReactNavigation.RootParamList>;
};
