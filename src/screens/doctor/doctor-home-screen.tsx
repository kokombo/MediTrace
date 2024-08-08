import {
  StyleSheet,
  Text,
  View,
  FlatList,
  type ListRenderItem,
} from "react-native";
import { COLORS, PADDING, SIZE } from "../../../constants";
import { PatientCard, SearchFrame } from "../../components";

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
        ListHeaderComponent={
          <View>
            <SearchFrame value="" onChangeText={() => {}} />

            <Text
              style={{
                fontSize: SIZE.mdl,
                fontWeight: "bold",
                color: COLORS.black,
              }}
            >
              Patients
            </Text>
          </View>
        }
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
