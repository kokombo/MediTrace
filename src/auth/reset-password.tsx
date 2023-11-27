import { StyleSheet, Text, View } from "react-native";
import { TextInputFrame, BlueButton, AuthHeader } from "../components";

const ResetPassword = () => {
  return (
    <View>
      <AuthHeader heading="Reset Your Password" />

      <View>
        <TextInputFrame
          label="Enter code"
          onChangeText={() => {}}
          placeholder=""
          textContentType={""}
        />

        <TextInputFrame
          label="Choose a new password"
          onChangeText={() => {}}
          placeholder=""
          textContentType={""}
        />

        <TextInputFrame
          label="Enter code"
          onChangeText={() => {}}
          placeholder=""
          textContentType={""}
        />
      </View>

      <BlueButton onPress={() => {}} label="Change password" />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
