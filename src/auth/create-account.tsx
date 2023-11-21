import { SafeAreaView, StyleSheet, View } from "react-native";
import {
  AuthHeader,
  TextInputFrame,
  BlueButton,
  PasswordInputFrame,
  CheckPrivacyPolicy,
  AuthCTA,
} from "../components";
import { PADDING } from "../../constants";
import { useState } from "react";
import Constants from "expo-constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [acceptPolicy, setAcceptPolicy] = useState<boolean>(false);

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const SignUpAUser = () => {
    navigation.navigate("verifyEmail");
  };

  return (
    <View style={styles.body}>
      <AuthHeader heading="Create account" />

      <View style={styles.form}>
        <TextInputFrame
          label="first name"
          placeholder="Enter your first name"
          textContentType={"givenName"}
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInputFrame
          label="last name"
          placeholder="Enter your last name"
          textContentType={"familyName"}
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInputFrame
          label="email"
          placeholder="Enter your email address"
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

        <CheckPrivacyPolicy
          value={acceptPolicy}
          onValueChange={setAcceptPolicy}
          isChecked={acceptPolicy}
        />
      </View>

      <View style={{ marginTop: 40 }}>
        <BlueButton label="Sign up" onPress={SignUpAUser} />
      </View>

      <View
        style={{ position: "absolute", bottom: "7.75%", alignSelf: "center" }}
      >
        <AuthCTA
          label="Already have an account? "
          cta="Log in"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
};

export default CreateAccount;

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
});
