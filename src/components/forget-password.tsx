import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE } from "../../constants";

const ForgetPassword = () => {
  return (
    <Pressable>
      <Text style={styles.label}>Forgot Password?</Text>
    </Pressable>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  label: {
    fontSize: SIZE.sm,
    fontWeight: "400",
    color: COLORS.black,
  },
});
