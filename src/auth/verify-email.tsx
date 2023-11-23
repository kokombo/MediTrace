import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AuthHeader, BlueButton, Error } from "../components";
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
import { verifyEmail } from "../redux/slices/verify-email-slice";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../redux/store";
import ResendOTP from "./resend-otp";

const VerifyEmail = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 5 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const dispatch: DispatchType = useDispatch();

  const canClickVerifyButton = Boolean(value.length === 5);

  const { status, error } = useSelector(
    (state: StateType) => state.verification
  );

  const { user } = useSelector((state: StateType) => state.user);

  const verificationDetails = { otp: value, email: user?.email! };

  const verifyUserEmail = () => {
    return navigation.navigate("verified");

    // dispatch(verifyEmail(verificationDetails));
  };

  useEffect(() => {
    if (status === "success") {
      return navigation.navigate("verified");
    }
  }, [status]);

  return (
    <View style={styles.body}>
      <View style={styles.prompt_wrapper}>
        <AuthHeader heading="Verify Your Email Address" />

        <View style={styles.subheading_wrapper}>
          <Text
            style={{
              fontSize: SIZE.base,
              fontWeight: "400",
            }}
          >
            We've sent a verification code to
          </Text>

          <Text
            style={{
              fontSize: SIZE.base,
              fontWeight: "bold",
              flexWrap: "wrap",
              color: COLORS.black,
            }}
          >
            {user?.email}
          </Text>
        </View>
      </View>

      <View>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={5}
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
                width: 63,
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
      </View>

      {status === "failed" && error ? <Error message={error} /> : null}

      <View style={{ gap: 24 }}>
        <View style={{ alignItems: "center" }}>
          <ResendOTP label="Send code again in" email={user?.email!} />
        </View>

        <BlueButton
          label="Verify"
          onPress={verifyUserEmail}
          disabled={status === "loading" || !canClickVerifyButton}
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
    flexDirection: "row",
    gap: 1,
    alignItems: "center",
  },

  prompt_wrapper: {
    gap: 12,
  },

  code_field_container: {},
});
