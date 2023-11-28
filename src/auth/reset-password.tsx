import { StyleSheet, View } from "react-native";
import { TextInputFrame, BlueButton, AuthHeader } from "../components";
import Constants from "expo-constants";
import { PADDING } from "../../constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { useState } from "react";

const ResetPassword = () => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const canChangePassword = Boolean(code && password && confirmPassword);

  const changeUserPassword = () => {
    navigation.navigate("passwordResetSuccess");
  };

  return (
    <View style={styles.body}>
      <AuthHeader heading="Reset Your Password" />

      <View style={{ gap: 22 }}>
        <TextInputFrame
          label="Verification code"
          value={code}
          onChangeText={setCode}
          placeholder="Enter the verification code sent to your email"
          textContentType={"oneTimeCode"}
        />

        <TextInputFrame
          label="New password"
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          textContentType={"password"}
        />

        <TextInputFrame
          label="Confirm new password"
          value={confirmPassword}
          onChangeText={setComfirmPassword}
          placeholder="confirm password"
          textContentType={"newPassword"}
        />
      </View>

      <BlueButton
        onPress={changeUserPassword}
        label="Change password"
        disabled={!canChangePassword}
      />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: PADDING.normal,
    paddingTop: Constants.statusBarHeight,
    gap: 40,
  },
});
