import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, icon, SIZE } from "../../constants";
import { useState } from "react";

const PasswordInputFrame = ({
  label,
  onChangeText,
  placeholder,
  isErrorActive,
}: PasswordInput) => {
  const [isPasswordVisible, setPasswordIsVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const togglePasswordIcon = () => {
    setPasswordIsVisible((prev) => !prev);
  };

  return (
    <View style={styles.input_container}>
      <Text style={styles.label}>{label} </Text>

      <TextInput
        onChangeText={onChangeText}
        secureTextEntry={isPasswordVisible ? false : true}
        textContentType="password"
        placeholder={placeholder}
        placeholderTextColor={COLORS.placeholder}
        style={[
          {
            borderColor: isErrorActive
              ? COLORS.red
              : isInputFocused
              ? COLORS.blue
              : COLORS.border,
          },
          styles.input,
        ]}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />

      <TouchableOpacity style={styles.visibility} onPress={togglePasswordIcon}>
        <Image
          source={isPasswordVisible ? icon.hidepassword : icon.hidepassword}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input_container: {
    gap: 6,
  },

  input: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    height: 56,
    fontSize: SIZE.base,
    fontWeight: "400",
  },

  label: {
    fontSize: SIZE.sm,
    fontWeight: "500",
    color: COLORS.black,
    textTransform: "capitalize",
  },

  icon: {
    width: 17,
    height: 15,
  },

  visibility: {
    position: "absolute",
    right: 10,
    top: "50%",
  },
});

export default PasswordInputFrame;
