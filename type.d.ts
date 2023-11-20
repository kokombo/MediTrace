import { ImageSourcePropType } from "react-native";
import { NavigationProp } from "@react-navigation/native";

type User = {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: ImageSourcePropType;
  refreshToken: string;
};

type Button = {
  label: string;
  onPress: () => void | NavigationProp<ReactNavigation.RootParamList>;
};

type Input = {
  label: string;
  placeholder: string;
  textContentType: any;
  value: string;
  onChangeText: (text: string) => void;
};

type Heading = {
  heading: string;
};

type PasswordInput = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
};

type AuthCTAType = {
  label: string;
  cta: string;
  onPress: () => void;
};
