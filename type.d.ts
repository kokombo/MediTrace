import { ImageProps, ImageSourcePropType } from "react-native";
import { NavigationProp } from "@react-navigation/native";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: ImageSourcePropType;
  token: string;
  email_confirmed: string;
  role: string;
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
  isErrorActive?: boolean;
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

type SelectType = {
  label: string;
  value: string;
};

type Medication = {
  name: string;
  treatment: string;
  color: string;
};

type ErrorResponse = {
  message: string;
};
