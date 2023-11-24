import { StyleSheet, View } from "react-native";
import { EmptyMedicationList, BlueButton } from "../components";
import { PADDING, icon } from "../../constants";
import { AddMedicationDetails } from "../containers";
import { useModal } from "../hooks";
import { useSelector } from "react-redux";
import { StateType } from "../redux/store";
import MedicationList from "../components/medication-list";

const Home = () => {
  const {
    addMedicationModalVisible,
    closeAddMedicationModal,
    openAddMedicationModal,
  } = useModal();

  const { data: medication } = useSelector(
    (state: StateType) => state.medication
  );

  return (
    <View style={styles.body}>
      {medication?.length > 1 ? (
        <>
          <MedicationList />

          <View
            style={{
              width: 103,
              alignSelf: "flex-end",
              position: "absolute",
              bottom: 60,
              right: 15,
            }}
          >
            <BlueButton
              label="Add"
              icon={icon.pill}
              onPress={() => openAddMedicationModal()}
            />
          </View>
        </>
      ) : (
        <View style={styles.empty_list}>
          <EmptyMedicationList />

          <BlueButton
            label="Add Medication"
            icon={icon.pill}
            onPress={() => openAddMedicationModal()}
          />
        </View>
      )}

      <AddMedicationDetails
        modalVisible={addMedicationModalVisible}
        closeModal={closeAddMedicationModal}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: PADDING.normal,
  },

  empty_list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 105,
    marginTop: 20,
  },
});
