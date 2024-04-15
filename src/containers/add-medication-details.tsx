import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";
import { COLORS, PADDING, SIZE } from "../../constants";
import { BlueButton, Select, TimePicker } from "../components";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../redux/store";
import { DurationData, FrequencyData } from "../../constants/data";
import { requestPermissionsAsync } from "../utilities";
import Toast from "react-native-toast-message";
import { setMedication } from "../redux/slices/medication-slice";

const AddMedicationDetails = ({
  modalVisible,
  closeModal,
}: MedicationModal) => {
  const [medicationName, setMedicationName] = useState("");
  const [selectedDurationOption, setSelectedDurationOption] = useState(1);
  const [selectedFrequencyOption, setSelectedFrequencyOption] = useState(1);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  const { user } = useSelector((state: StateType) => state.user);

  const dispatch: DispatchType = useDispatch();

  const renderAlarmCards = () => {
    const Alarms: React.JSX.Element[] = [];

    for (let i = 0; i < selectedFrequencyOption; i++) {
      Alarms.push(<TimePicker key={i} timeSlots={timeSlots} />);
    }

    return Alarms;
  };

  const canAddMedicationReminder = Boolean(
    medicationName &&
      selectedDurationOption &&
      selectedFrequencyOption &&
      timeSlots.length > 0
  );

  const medicationReminderInfo: MedicationData = {
    user_id: user?.id as string,
    name: medicationName,
    start_date: new Date().toLocaleString(),
    duration: Number(selectedDurationOption),
    time_slots: timeSlots,
  };

  const createMedicationReminder = async () => {
    const permissionResponse = await requestPermissionsAsync();

    if (permissionResponse?.granted) {
      dispatch(setMedication(medicationReminderInfo));
      closeModal();
    } else {
      Alert.alert("permission is required to create a medication reminder");
    }
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
            <Pressable
              style={styles.close_form}
              onPress={() => {
                closeModal();
                setTimeSlots([]);
              }}
            >
              <Text>Close</Text>
            </Pressable>

            <View style={{ gap: 16 }}>
              <Text style={styles.label}>Drug name</Text>

              <TextInput
                style={styles.input}
                placeholder="e.g. Amatem Fort Artemether Lumefantrine"
                placeholderTextColor={COLORS.placeholder}
                value={medicationName}
                onChangeText={setMedicationName}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  gap: 16,
                }}
              >
                <Text style={styles.label}>Duration (in days)</Text>

                <Select
                  width={150}
                  data={DurationData}
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
                  data={FrequencyData}
                  selectedOption={selectedFrequencyOption}
                  setSelectedOption={setSelectedFrequencyOption}
                />
              </View>
            </View>

            <View style={{ gap: 16 }}>
              <Text style={styles.label}>
                Select your medication notification times for each day
              </Text>

              {renderAlarmCards()}
            </View>

            <BlueButton
              label="Create Reminder"
              onPress={createMedicationReminder}
              disabled={!canAddMedicationReminder}
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
