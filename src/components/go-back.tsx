import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, icon } from "../../constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const GoBack = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
      <Image source={icon.backarrow} resizeMode="contain" style={styles.icon} />
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: COLORS.border,
    height: 39,
    width: 39,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    height: 15,
    width: 9,
  },
});
