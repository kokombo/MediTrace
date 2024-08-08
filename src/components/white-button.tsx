import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS, SIZE } from "../../constants";
import type { ButtonType } from "../types/types";

const WhiteButton = ({ onPress, label }: ButtonType) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label} </Text>
    </Pressable>
  );
};

export default WhiteButton;

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: COLORS.gray,
    borderWidth: 1,
  },

  label: {
    color: COLORS.blue,
    fontSize: SIZE.base,
    fontWeight: "600",
  },
});
