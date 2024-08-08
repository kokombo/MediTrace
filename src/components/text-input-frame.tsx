import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { COLORS, SIZE } from "../../constants";
import type { InputType } from "../types/types";

const TextInputFrame = ({
  label,
  placeholder,
  textContentType,
  onChangeText,
  value,
}: InputType) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <View style={styles.input_container}>
      <Text style={styles.label}> {label} </Text>

      <TextInput
        placeholder={placeholder}
        textContentType={textContentType}
        onChangeText={onChangeText}
        placeholderTextColor={COLORS.placeholder}
        value={value}
        style={[
          { borderColor: isInputFocused ? COLORS.blue : COLORS.border },
          styles.input,
        ]}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
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

    height: 56,
    fontSize: SIZE.base,
    fontWeight: "400",
    padding: 10,
  },

  label: {
    fontSize: SIZE.base,
    fontWeight: "500",
    color: COLORS.black,
    textTransform: "capitalize",
  },
});
