import { StyleSheet, View, Image } from "react-native";
import { icon } from "../../../constants";

const Splash = () => {
  return (
    <View style={styles.body}>
      <Image source={icon.meditracelogo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
