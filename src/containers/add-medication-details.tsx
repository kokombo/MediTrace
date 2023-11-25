import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import { useState } from "react";
import { MedicationModal } from "../../type";
import { COLORS, PADDING, SIZE } from "../../constants";
import {
  BlueButton,
  Select,
  CombinedDropdownInput,
  TimePicker,
} from "../components";
import { ScrollView } from "react-native-gesture-handler";
import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../redux/store";
import { setNotification } from "../redux/slices/notification-slice";
import { requestPermissionsAsync } from "../utilities";

const dummyFreqData = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const dummyDurData = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
];

const AddMedicationDetails = ({
  modalVisible,
  closeModal,
}: MedicationModal) => {
  const [medicationReminderInfo, setMedicationReminderInfo] = useState("");
  const [selectedDurationOption, setSelectedDurationOption] = useState(1);
  const [selectedFrequencyOption, setSelectedFrequencyOption] = useState(1);

  const { user } = useSelector((state: StateType) => state.user);

  const dispatch: DispatchType = useDispatch();

  const renderAlarmCards = () => {
    const Alarms: React.JSX.Element[] = [];

    for (let i = 0; i < selectedFrequencyOption; i++) {
      Alarms.push(<TimePicker key={i} />);
    }

    return Alarms;
  };

  const createMedicationReminder = async () => {
    const permission = await requestPermissionsAsync();

    if (permission.granted) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: `Hey ${user?.first_name}!, it's time to use your medication`,
          body: "We hope you get well soon, but for now please don't miss your medication. Go use it now!",
          sound: "../../assets/sounds/notification-sound4.wav",
        },
        trigger: {
          seconds: 5,
        },
      })
        .then((res) => {
          dispatch(setNotification(res));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Alert.alert("Permission is needed to set reminder");
    }
    closeModal();
  };

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={closeModal}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.modal_body}>
          <View style={styles.form}>
            <Pressable style={styles.close_form} onPress={closeModal}>
              <Text>Close</Text>
            </Pressable>

            <View style={{ gap: 16 }}>
              <Text style={styles.label}>Drug name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Amatem Fort Artemether Lumefantrine"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ gap: 16 }}>
                <Text style={styles.label}>Duration (in days)</Text>

                <Select
                  width={150}
                  data={dummyDurData}
                  selectedOption={selectedDurationOption}
                  setSelectedOption={setSelectedDurationOption}
                />
              </View>

              <View style={{ gap: 16 }}>
                <Text style={styles.label}>
                  Frequency (No of times per day)
                </Text>

                <Select
                  width={150}
                  data={dummyFreqData}
                  selectedOption={selectedFrequencyOption}
                  setSelectedOption={setSelectedFrequencyOption}
                />
              </View>
            </View>

            <View style={{ gap: 16 }}>
              <Text style={styles.label}>
                Select medication notification times for each day
              </Text>

              {renderAlarmCards()}
            </View>

            <BlueButton
              label="Create Reminder"
              onPress={async () => await createMedicationReminder()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default AddMedicationDetails;

const styles = StyleSheet.create({
  modal_body: {
    paddingHorizontal: PADDING.normal,
    paddingVertical: 40,
    flex: 1,
    width: "100%",
  },

  input: {
    height: 50,
    backgroundColor: COLORS.cloud,
    borderRadius: 10,
    padding: 15,
    width: "100%",
  },

  form: {
    gap: 20,
  },

  alarm_card: {
    width: 255,
  },

  close_form: {
    alignSelf: "flex-end",
  },

  label: {
    fontSize: SIZE.sm,
    fontWeight: "500",
  },
});
