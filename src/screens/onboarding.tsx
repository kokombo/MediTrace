import { StyleSheet, View, Text } from "react-native";
import { BlueButton, WhiteButton } from "../components";
import { COLORS, PADDING, SIZE } from "../../constants";
import {
  NavigationProp,
  useNavigation,
  ParamListBase,
} from "@react-navigation/native";

const Onboarding = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.info_container}>
        <View style={styles.text_container}>
          <Text style={styles.h1}>Explore the app</Text>

          <Text style={styles.h2}>
            Now your finances are in one place and always under control.
          </Text>
        </View>

        <View style={styles.button_container}>
          <BlueButton label="Log in" onPress={() => {}} />

          <WhiteButton
            label="Create account"
            onPress={() => {
              navigation.navigate("createAccount");
            }}
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
  },

  info_container: {
    gap: 40,
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    bottom: 120,
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
    // maxWidth: 250,
  },

  button_container: {
    gap: 16,
  },
});
