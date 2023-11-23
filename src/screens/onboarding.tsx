import { StyleSheet, View, Text, Image } from "react-native";
import { BlueButton, WhiteButton } from "../components";
import { COLORS, PADDING, SIZE, icon } from "../../constants";
import {
  NavigationProp,
  useNavigation,
  ParamListBase,
} from "@react-navigation/native";

const Onboarding = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View style={styles.body}>
      <Image
        source={icon.exploreapp}
        resizeMode="contain"
        style={{ height: 284, width: 256 }}
      />

      <View style={styles.info_container}>
        <View style={styles.text_container}>
          <Text style={styles.h1}>Explore the app</Text>

          <Text style={styles.h2}>
            Effortlessly manage your medication regimens with ease and Simplify
            Your Health Journey.
          </Text>
        </View>

        <View style={styles.button_container}>
          <BlueButton
            label="Log in"
            onPress={() => navigation.navigate("login")}
          />

          <WhiteButton
            label="Create account"
            onPress={() => navigation.navigate("createAccount")}
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: PADDING.normal,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  info_container: {
    gap: 40,
  },

  text_container: {
    alignItems: "center",
    gap: 8,
  },

  h1: {
    fontSize: SIZE.xl,
    color: COLORS.black,
    fontWeight: "700",
  },

  h2: {
    fontSize: SIZE.base,
    color: COLORS.lightblack,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 24,
  },

  button_container: {
    gap: 16,
  },
});
