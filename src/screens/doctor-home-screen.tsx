import { StyleSheet, Text, View, FlatList, ListRenderItem } from "react-native";
import { PADDING } from "../../constants";
import { Patient } from "../../type";
import { PatientCard } from "../components";

const data: Patient[] = [
  { id: "1", name: "Bola Tinubu" },
  { id: "2", name: "Tinubu Remi" },
];

const renderPatientCard: ListRenderItem<Patient> = ({ item }) => (
  <PatientCard patient={item} />
);

const DoctorHomeScreen = () => {
  return (
    <View style={styles.body}>
      <FlatList
        data={data}
        renderItem={renderPatientCard}
        keyExtractor={(item: Patient) => item?.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  );
};

export default DoctorHomeScreen;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: PADDING.normal,
  },
});
