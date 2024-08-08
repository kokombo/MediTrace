import type { NavigationProp, ParamListBase } from "@react-navigation/native";
import type { ImageSourcePropType, TextInputProps } from "react-native";

export type NavigationType = NavigationProp<ParamListBase>;

export type ButtonType = {
  label: string;
  onPress: () =>
    | void
    | NavigationProp<ReactNavigation.RootParamList>
    | Promise<void>;
  icon?: ImageSourcePropType;
  disabled?: boolean;
};

export type InputType = {
  label: string;
  placeholder: string;
  textContentType: TextInputProps["textContentType"];
  onChangeText: (text: string) => void;
  value?: string;
};
