import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE, icon } from "../../constants";

const EmptyMedicationList = () => {
  return (
    <View style={{ alignItems: "center", gap: 50 }}>
      <Image
        source={icon.medication}
        resizeMode="contain"
        style={{ height: 304, width: 304 }}
      />

      <Text
        style={{
          color: COLORS.placeholder,
          fontSize: SIZE.sm,
          fontWeight: "500",
        }}
      >
        Your latest activities will appear here
      </Text>
    </View>
  );
};

export default EmptyMedicationList;

const styles = StyleSheet.create({});
