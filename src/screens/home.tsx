import { StyleSheet, TextInput, View } from "react-native";
import {
  DormantSearchFrame,
  EmptyMedicationList,
  BlueButton,
} from "../components";
import { PADDING, icon } from "../../constants";
import { AddMedicationDetails, SearchMedication } from "../containers";
import { useModal } from "../hooks";

const Home = () => {
  const {
    addMedicationModalVisible,
    closeAddMedicationModal,
    openAddMedicationModal,
    openSearchModal,
    closeSearchModal,
    searchModalVisible,
  } = useModal();

  return (
    <View style={styles.body}>
      <>
        <DormantSearchFrame onPress={() => openSearchModal()} />

        <EmptyMedicationList />

        <BlueButton
          label="Add Medication"
          icon={icon.pill}
          onPress={() => openAddMedicationModal()}
        />
      </>

      <>
        <AddMedicationDetails
          modalVisible={addMedicationModalVisible}
          closeModal={closeAddMedicationModal}
        />

        <SearchMedication
          modalVisible={searchModalVisible}
          closeModal={closeSearchModal}
        />
      </>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: PADDING.normal,
    justifyContent: "space-between",
    paddingBottom: 100,
    paddingTop: 20,
  },
});
