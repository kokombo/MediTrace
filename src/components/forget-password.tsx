import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import type { NavigationType } from "../types/types";

const ForgetPassword = () => {
  const navigation: NavigationType = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("forgotPassword")}>
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
