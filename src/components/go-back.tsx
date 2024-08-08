import { Image, Pressable, StyleSheet } from "react-native";
import { COLORS, icon } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import type { NavigationType } from "../types/types";

const GoBack = () => {
  const navigation: NavigationType = useNavigation();

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
