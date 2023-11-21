import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import { MedicationModal } from "../../type";
import { COLORS, PADDING } from "../../constants";
import { BlueButton } from "../components";

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
        <View style={styles.modal_body}>
          <BlueButton label="Add Reminder" onPress={() => {}} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default AddMedicationDetails;

const styles = StyleSheet.create({
  modal_body: {
    paddingHorizontal: PADDING.normal,
  },
});
