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
import { resendOTP } from "../redux/slices/verify-email-slice";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../redux/store";
import { useEffect, useState } from "react";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import Constants from "expo-constants";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const dispatch: DispatchType = useDispatch();

  const { status, error } = useSelector(
    (state: StateType) => state.verification
  );

  const canSendCode = Boolean(email);

  const sendResetPasswordCode = () => {
    dispatch(resendOTP({ email }));
  };

  useEffect(() => {
    if (status.resendOTP === "success") {
      return navigation.navigate("resetPassword");
    }
  }, [status]);

  return (
    <View style={styles.body}>
      {status.resendOTP === "loading" && <Loader />}

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

        <View style={{ position: "absolute", bottom: -20 }}>
          <AuthError message={error.resendOTPError} />
        </View>
      </View>

      <BlueButton
        label="Send verification code"
        onPress={sendResetPasswordCode}
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
