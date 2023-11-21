import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Pressable,
} from "react-native";
import { MedicationModal } from "../../type";
import { COLORS, PADDING } from "../../constants";
import { SearchFrame } from "../components";
import { useState } from "react";

const SearchMedication = ({ modalVisible, closeModal }: MedicationModal) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      presentationStyle="fullScreen"
      onRequestClose={closeModal}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.modal_body}>
          <Pressable onPress={() => closeModal()}>
            <Text>Close</Text>
          </Pressable>

          <SearchFrame value={searchQuery} onChangeText={setSearchQuery} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default SearchMedication;

const styles = StyleSheet.create({
  modal_body: {
    paddingHorizontal: PADDING.normal,
  },
});
