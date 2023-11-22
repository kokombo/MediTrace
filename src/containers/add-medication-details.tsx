import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TextInput,
} from "react-native";
import { MedicationModal } from "../../type";
import { COLORS, PADDING } from "../../constants";
import {
  BlueButton,
  Select,
  CombinedDropdownInput,
  MedicationCard,
} from "../components";
import { ScrollView } from "react-native-gesture-handler";

const AddMedicationDetails = ({
  modalVisible,
  closeModal,
}: MedicationModal) => {
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
            <View style={{ gap: 16 }}>
              <Text>Drug name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Amatem Fort Artemether Lumefantrine"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>

            <View style={{ gap: 16 }}>
              <Text>Drug purpose</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Malaria medication"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CombinedDropdownInput
                label="Duration"
                width={100}
                data1={[
                  { value: "a", label: "Days" },
                  { value: "b", label: "b" },
                  { value: "c", label: "c" },
                ]}
                data2={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                ]}
              />

              <View style={{ gap: 16 }}>
                <Text>Drug form</Text>
                <Select width={150} data={[{ value: "b", label: "tablet" }]} />
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CombinedDropdownInput
                label="Dosage"
                width={100}
                data1={[
                  { value: "a", label: "mg" },
                  { value: "b", label: "b" },
                  { value: "c", label: "c" },
                ]}
                data2={[
                  { value: "a", label: "10" },
                  { value: "b", label: "20" },
                  { value: "c", label: "30" },
                ]}
              />

              <View style={{ gap: 16 }}>
                <Text>Frequency (daily) </Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. 1"
                  placeholderTextColor={COLORS.placeholder}
                />
              </View>
            </View>

            <MedicationCard
              treatment="Malaria medication"
              name="Amatem Fort Artemether Lumefantrine"
              color="#F44242"
            />

            <BlueButton label="Create Reminder" onPress={() => {}} />
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
    borderRadius: 15,
    padding: 15,
  },

  form: {
    gap: 20,
  },
});
