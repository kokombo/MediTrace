import { Pressable, StyleSheet, Text, Image } from "react-native";
import { Button } from "../../type";
import { COLORS, SIZE } from "../../constants";

const BlueButton = ({ onPress, label, icon }: Button) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      {icon && (
        <Image
          source={icon!}
          resizeMode="contain"
          style={{ height: 24, width: 24 }}
        />
      )}

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
    flexDirection: "row",
    gap: 5,
  },

  label: {
    color: COLORS.white,
    fontSize: SIZE.base,
    fontWeight: "600",
  },
});
