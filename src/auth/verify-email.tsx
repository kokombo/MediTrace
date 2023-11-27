import { StyleSheet, Text, View } from "react-native";
import { AuthError, AuthHeader, BlueButton } from "../components";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useEffect, useState } from "react";
import { COLORS, SIZE, PADDING } from "../../constants";
import Constants from "expo-constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { verifyEmail, resendOTP } from "../redux/slices/verify-email-slice";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../redux/store";
import ResendOTP from "./resend-otp";
import { useCountdownTimer, useHaptic } from "../hooks";
import Toast from "react-native-toast-message";

const VerifyEmail = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const { newTime, setTime } = useCountdownTimer(60);

  const { triggerVibration } = useHaptic();

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const dispatch: DispatchType = useDispatch();

  const canClickVerifyButton = Boolean(value.length === 4);

  const { status, error } = useSelector(
    (state: StateType) => state.verification
  );

  const { user } = useSelector((state: StateType) => state.user);

  const verificationDetails = { otp: value, email: user?.email! };

  const verifyUserEmail = () => {
    dispatch(verifyEmail(verificationDetails));
  };

  useEffect(() => {
    if (status.verifyEmail === "success") {
      return navigation.navigate("emailVerifiedSuccess");
    }
  }, [status]);

  const resendOTPToUser = () => {
    triggerVibration();

    if (status.resendOTP === "success") {
      Toast.show({
        text1: "Another code has been sent to",
        text2: `${user?.email}`,
      });

      dispatch(resendOTP({ email: user?.email! }));

      setTime(60);
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.prompt_wrapper}>
        <AuthHeader heading="Verify Your Email To Continue" />

        <View style={styles.subheading_wrapper}>
          <Text
            style={{
              fontSize: SIZE.base,
              fontWeight: "400",
            }}
          >
            We have sent a verification code to
          </Text>

          <Text
            style={{
              fontSize: SIZE.base,
              fontWeight: "bold",
              color: COLORS.black,
            }}
          >
            {user?.email}
          </Text>
        </View>
      </View>

      <View style={{ gap: 10 }}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={4}
          rootStyle={styles.code_field_container}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              key={index}
              onLayout={getCellOnLayoutHandler(index)}
              style={{
                borderWidth: 1,
                borderColor: isFocused ? COLORS.blue : COLORS.border,
                width: "20%",
                height: 72,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: SIZE.lg, textAlign: "center" }}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        {status.verifyEmail === "failed" && error.verifyEmailError ? (
          <AuthError message={error.verifyEmailError} />
        ) : null}
      </View>

      <View style={{ gap: 24 }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          {newTime === "00" ? (
            <ResendOTP label="Resend Code" onPress={resendOTPToUser} />
          ) : (
            <Text
              style={{
                fontSize: SIZE.base,
                fontWeight: "600",
              }}
            >
              Send code again in 00:{newTime}
            </Text>
          )}
        </View>

        <BlueButton
          label="Verify"
          onPress={verifyUserEmail}
          disabled={status.verifyEmail === "loading" || !canClickVerifyButton}
        />
      </View>
    </View>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: PADDING.normal,
    paddingTop: Constants.statusBarHeight,
    gap: 54,
  },

  subheading_wrapper: {
    gap: 2,
  },

  prompt_wrapper: {
    gap: 12,
  },

  code_field_container: {},
});
