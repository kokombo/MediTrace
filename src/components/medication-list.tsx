import { FlatList, StyleSheet, Text, View, ListRenderItem } from "react-native";
import { Medication } from "../../type";
import MedicationCard from "./medication-card";
import DormantSearchFrame from "./dormant-search-frame";
import { useModal } from "../hooks";
import { useSelector } from "react-redux";
import { StateType } from "../redux/store";
import { SearchMedication } from "../containers";
import { SIZE } from "../../constants";

const MedicationList = () => {
  const { openSearchModal, searchModalVisible, closeSearchModal } = useModal();

  const { data } = useSelector((state: StateType) => state.medication);

  const renderMedicationCard: ListRenderItem<Medication> = ({
    item,
    index,
  }) => {
    const borderColors = ["#4285F4", "#F44242", "#FFE600"];

    const miniCardColors = ["#F3F8FF", "#FFEEEE", "#FFFCE1"];

    const borderColor = borderColors[index % borderColors.length];

    const miniCardBackgroundColor =
      miniCardColors[index % miniCardColors.length];

    return (
      <MedicationCard
        item={item}
        borderColor={borderColor}
        miniCardBackgroundColor={miniCardBackgroundColor}
      />
    );
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={data}
        renderItem={renderMedicationCard}
        keyExtractor={(item: Medication) => item.id?.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
        ListHeaderComponent={
          <View style={{ gap: 32 }}>
            <DormantSearchFrame onPress={() => openSearchModal()} />

            <Text style={{ fontSize: SIZE.base, fontWeight: "600" }}>
              Upcoming Medication Reminders
            </Text>
          </View>
        }
      />

      <SearchMedication
        modalVisible={searchModalVisible}
        closeModal={closeSearchModal}
      />
    </View>
  );
};

export default MedicationList;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    gap: 32,
    paddingVertical: 24,
  },
});
