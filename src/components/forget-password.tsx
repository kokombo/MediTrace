import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE } from "../../constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const ForgetPassword = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

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
