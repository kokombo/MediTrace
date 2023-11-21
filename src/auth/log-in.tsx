import { Image, StyleSheet, Text, View } from "react-native";
import {
  TextInputFrame,
  PasswordInputFrame,
  AuthHeader,
  AuthCTA,
  BlueButton,
  ForgetPassword,
} from "../components";
import { useState } from "react";
import { PADDING, icon } from "../../constants";
import Constants from "expo-constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const LogIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.welcome_wrapper}>
        <AuthHeader heading="Welcome Back!" />

        <Image source={icon.wave} resizeMode="contain" style={styles.wave} />
      </View>

      <View style={styles.form}>
        <TextInputFrame
          label="email"
          placeholder="helloworld@gmail.com"
          textContentType={"emailAddress"}
          value={email}
          onChangeText={setEmail}
        />

        <PasswordInputFrame
          label="password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />

        <View style={{ alignSelf: "flex-end" }}>
          <ForgetPassword />
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <BlueButton
          label="Log in"
          onPress={() => navigation.navigate("home")}
        />
      </View>

      <View
        style={{ position: "absolute", bottom: "7.75%", alignSelf: "center" }}
      >
        <AuthCTA
          label="Don't have an account?"
          cta="Sign up"
          onPress={() => navigation.navigate("createAccount")}
        />
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: PADDING.normal,
    paddingTop: Constants.statusBarHeight,
  },

  form: {
    gap: 16,
    marginTop: 38,
  },

  wave: {
    height: 30,
    width: 30,
  },

  welcome_wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
