import { StyleSheet, View } from "react-native";
import {
  DormantSearchFrame,
  EmptyMedicationList,
  BlueButton,
} from "../components";
import { PADDING } from "../../constants";

const Home = () => {
  return (
    <View style={styles.body}>
      <DormantSearchFrame />

      <EmptyMedicationList />

      <BlueButton label="Add Medication" onPress={() => {}} />
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
