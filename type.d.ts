type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
  refreshToken: string;
  accessToken: string;
  email_confirmed: boolean;
  role: string;
};

type Button = {
  label: string;
  onPress: () =>
    | void
    | NavigationProp<ReactNavigation.RootParamList>
    | Promise<void>;
  icon?: ImageSourcePropType;
  disabled?: boolean;
};

type Input = {
  label: string;
  placeholder: string;
  textContentType: any;
  onChangeText: (text: string) => void;
  value?: string;
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
  user_id: string;
  name: string;
  start_date: string;
  duration: number;
  time_slots: string[];
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

type EachMedicationAlarm = {
  expired: boolean;
  has_taken: boolean;
  id: string;
  medication_id: string;
  time_of_day: string;
};

type Medication = {
  id: string;
  duration: number;
  expiredTime: Date;
  name: string;
  start_date: string;
  upcomingTime: EachMedicationAlarm[];
};

type Patient = {
  id: string;
  name: string;
};

type Notification = {
  notification: string;
};

type EmailVerificationData = {
  otp: string;
  email: string;
};
