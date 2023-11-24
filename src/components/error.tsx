import { Pressable, Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { DispatchType } from "../redux/store";
import { COLORS, SIZE } from "../../constants";

const Error = ({
  message,
  onPress,
}: {
  message: string;
  onPress: () => void;
}) => {
  const dispatch: DispatchType = useDispatch();

  return (
    <View style={styles.body}>
      <View style={styles.message_wrapper}>
        <Text>{message} </Text>

        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.button_label}>Try again</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: 100,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: COLORS.blue,
  },

  button_label: {
    color: COLORS.white,
    fontSize: SIZE.xsm,
  },

  message_wrapper: {
    gap: 4,
  },
});
