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
import { MedicationModal } from "../../type";
import { COLORS, PADDING, SIZE } from "../../constants";
import { BlueButton, Select, TimePicker } from "../components";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../redux/store";
import { DurationData, FrequencyData } from "../../constants/data";
import { requestPermissionsAsync } from "../utilities";

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
    const res = await requestPermissionsAsync();

    if (res?.granted) {
      closeModal();
    } else {
      Alert.alert("permission is required to created reminder");
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
