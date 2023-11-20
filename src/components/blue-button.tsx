import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "../../type";
import { COLORS, SIZE } from "../../constants";

const BlueButton = ({ onPress, label }: Button) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label} </Text>
    </Pressable>
  );
};

export default BlueButton;

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: COLORS.blue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  label: {
    color: COLORS.white,
    fontSize: SIZE.base,
    fontWeight: "600",
  },
});
