import { StyleSheet, Text, View } from "react-native";
import { PADDING } from "../../../constants";

const Notification = () => {
  return (
    <View style={styles.body}>
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: PADDING.normal,
  },
});
