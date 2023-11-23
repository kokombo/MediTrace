import { Image, StyleSheet, Text, View } from "react-native";
import { BlueButton } from "../components";
import { PADDING, SIZE, icon } from "../../constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const EmailVerificationSuccess = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View style={styles.body}>
      <Image
        source={icon.emailverified}
        resizeMode="contain"
        style={{ height: 215, width: 268 }}
      />

      <View style={{ alignItems: "center", gap: 18, maxWidth: 279 }}>
        <Text style={{ fontSize: SIZE.mdl, fontWeight: "700" }}>
          Email Verified
        </Text>
        <Text
          style={{ textAlign: "center", fontSize: SIZE.base, lineHeight: 24 }}
        >
          Congradulations, your email has been verified. You can start using the
          app.
        </Text>
      </View>

      <View style={{ width: "100%" }}>
        <BlueButton
          label="Continue"
          onPress={() => navigation.navigate("home")}
        />
      </View>
    </View>
  );
};

export default EmailVerificationSuccess;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: PADDING.normal,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
