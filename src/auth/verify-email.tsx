import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AuthHeader, BlueButton } from "../components";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useState } from "react";
import { COLORS, SIZE, PADDING } from "../../constants";
import Constants from "expo-constants";

const VerifyEmail = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 5 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.body}>
      <View style={styles.prompt_wrapper}>
        <AuthHeader heading="Verify Your Email Address" />

        <View style={styles.subheading_wrapper}>
          <Text style={{ fontSize: SIZE.base, fontWeight: "400" }}>
            We've sent a verification code to
          </Text>

          <Text style={{ fontSize: SIZE.base, fontWeight: "bold" }}>
            helloworld@gmail.com
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

      <BlueButton label="Verify" onPress={() => {}} />
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
  },

  prompt_wrapper: {
    gap: 12,
  },

  code_field_container: {},
});
