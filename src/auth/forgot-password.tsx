import { StyleSheet, Text, View } from "react-native";
import {
  AuthHeader,
  TextInputFrame,
  BlueButton,
  AuthCTA,
  AuthError,
  Loader,
} from "../components";
import { PADDING, SIZE } from "../../constants";
import { useEffect, useState } from "react";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import Constants from "expo-constants";
import { useResendOTP } from "../hooks";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const canSendCode = Boolean(email);

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { sendOTP, isError, isPending, isSuccess, error } = useResendOTP();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("resetPassword");
    }
  }, [isSuccess]);

  return (
    <View style={styles.body}>
      {isPending && <Loader />}

      <View style={{ gap: 12 }}>
        <AuthHeader heading="Forgot Password?" />

        <Text
          style={{
            fontSize: SIZE.base,
            fontWeight: "400",
          }}
        >
          Enter the email address associated with your account.
        </Text>
      </View>

      <View>
        <TextInputFrame
          label="Email"
          placeholder="Enter your email address"
          textContentType={"emailAddress"}
          value={email}
          onChangeText={setEmail}
        />

        {isError && (
          <View style={{ position: "absolute", bottom: -20 }}>
            <AuthError message={error?.response?.data} />
          </View>
        )}
      </View>

      <BlueButton
        label="Send verification code"
        onPress={() => sendOTP(email)}
        disabled={!canSendCode}
      />

      <View
        style={{ position: "absolute", bottom: "7.75%", alignSelf: "center" }}
      >
        <AuthCTA
          label="Remember password again? "
          cta="Log in"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: PADDING.normal,
    paddingTop: Constants.statusBarHeight,
    gap: 40,
  },
});
