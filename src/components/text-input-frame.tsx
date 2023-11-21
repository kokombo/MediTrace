import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Input } from "../../type";
import { COLORS, SIZE } from "../../constants";

const TextInputFrame = ({
  label,
  placeholder,
  textContentType,
  onChangeText,
}: Input) => {
  return (
    <View style={styles.input_container}>
      <Text style={styles.label}> {label} </Text>

      <TextInput
        placeholder={placeholder}
        textContentType={textContentType}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default TextInputFrame;

const styles = StyleSheet.create({
  input_container: {
    gap: 6,
  },

  input: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    height: 56,
    fontSize: SIZE.base,
    fontWeight: "400",
    padding: 10,
  },

  label: {
    fontSize: SIZE.sm,
    fontWeight: "500",
    color: COLORS.black,
    textTransform: "capitalize",
  },
});
