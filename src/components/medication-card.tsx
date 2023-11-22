import { Pressable, StyleSheet, Text, View } from "react-native";
import { Medication } from "../../type";
import { COLORS, SIZE } from "../../constants";

const MedicationCard = ({ treatment, name, color }: Medication) => {
  return (
    <Pressable
      style={{
        borderColor: color,
        borderWidth: 2,
        height: 125,
        borderRadius: 10,
        paddingVertical: 18,
        paddingHorizontal: 24,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <View
          style={{
            width: 2,
            height: 38,
            backgroundColor: color,
          }}
        />

        <View style={{ gap: 2 }}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: SIZE.base,
              textTransform: "capitalize",
            }}
          >
            {treatment}
          </Text>

          <Text
            style={{
              fontWeight: "400",
              fontSize: SIZE.sm,
            }}
          >
            {name}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: color,
          borderRadius: 24,
          paddingVertical: 8,
          paddingHorizontal: 16,
          width: 158,
        }}
      >
        <Text style={{ fontSize: SIZE.xsm, fontWeight: "400" }}>
          Second Dose by 2pm
        </Text>
      </View>
    </Pressable>
  );
};

export default MedicationCard;

const styles = StyleSheet.create({});
