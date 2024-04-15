import { StyleSheet, Text, View } from "react-native";
import CheckBox from "expo-checkbox";
import { COLORS, SIZE } from "../../constants";

const CheckPrivacyPolicy = ({
  value,
  onValueChange,
  isChecked,
}: CheckBoxType) => {
  return (
    <View style={styles.wrapper}>
      <CheckBox
        style={styles.checkbox}
        value={value}
        onValueChange={onValueChange}
        color={isChecked ? COLORS.blue : undefined}
      />
      <Text style={styles.label}> I accept the terms and privacy policy.</Text>
    </View>
  );
};

export default CheckPrivacyPolicy;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 100,
  },

  label: {
    fontSize: SIZE.sm,
    fontWeight: "400",
  },
});
