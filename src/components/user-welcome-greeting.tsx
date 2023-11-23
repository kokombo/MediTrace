import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE } from "../../constants";
import { useSelector } from "react-redux";
import { StateType } from "../redux/store";

const UserWelcomeGreeting = () => {
  const { user } = useSelector((state: StateType) => state.user);

  console.log(user);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>Hello Samuel,</Text>

      <Text style={styles.welcome_prompt}>Welcome back</Text>
    </View>
  );
};

export default UserWelcomeGreeting;

const styles = StyleSheet.create({
  wrapper: {
    gap: 1,
  },

  name: {
    fontSize: SIZE.sm,
    fontWeight: "400",
    letterSpacing: 0.02,
    color: COLORS.black,
  },

  welcome_prompt: {
    fontSize: SIZE.md,
    fontWeight: "500",
    letterSpacing: 0.02,
    color: COLORS.black,
  },
});
