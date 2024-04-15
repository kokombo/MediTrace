import { Pressable, StyleSheet, Text, Image } from "react-native";
import { COLORS, SIZE } from "../../constants";

const BlueButton = ({ onPress, label, icon, disabled }: Button) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        { backgroundColor: disabled ? COLORS.border : COLORS.blue },
        styles.button,
      ]}
      disabled={disabled}
    >
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
    width: "100%",
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
