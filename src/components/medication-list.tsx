import { FlatList, StyleSheet, Text, View, ListRenderItem } from "react-native";
import { MedicationData } from "../../type";
import BlueButton from "./blue-button";

const data: MedicationData[] = [];

const MedicationList = () => {
  const renderMedicationCard: ListRenderItem<MedicationData> = ({ item }) => (
    <Text></Text>
  );

  return (
    <View>
      <Text>MedicationList</Text>

      <FlatList
        data={data}
        renderItem={renderMedicationCard}
        keyExtractor={(item: MedicationData) => item.id?.toString()}
      />

      <View style={{ width: 103, alignSelf: "flex-end" }}>
        <BlueButton label="Add" onPress={() => {}} />
      </View>
    </View>
  );
};

export default MedicationList;

const styles = StyleSheet.create({});
