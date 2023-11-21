import { ImageProps, ImageSourcePropType } from "react-native";
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
  icon?: ImageSourcePropType;
  disabled?: boolean;
};

type Input = {
  label: string;
  placeholder: string;
  textContentType: any;
  onChangeText: (text: string) => void;
};

type Heading = {
  heading: string;
};

type PasswordInput = {
  label: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
};

type AuthCTAType = {
  label: string;
  cta: string;
  onPress: () => void;
};

type CheckBoxType = {
  value: boolean;
  isChecked: boolean;
  onValueChange: Dispatch<SetStateAction<boolean>>;
};

type MedicationData = {
  id: string;
  drugName: string;
  time: string;
};

type MedicationModal = {
  modalVisible: boolean;
  closeModal: () => void;
};

type Search = {
  value: string;
  onChangeText: (text: string) => void;
};
