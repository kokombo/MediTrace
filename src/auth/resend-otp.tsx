import { Pressable, StyleSheet, Text } from "react-native";
import { SIZE } from "../../constants";

const ResendOTP = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={{ fontSize: SIZE.base, fontWeight: "600" }}>{label}</Text>
    </Pressable>
  );
};

export default ResendOTP;

const styles = StyleSheet.create({});
