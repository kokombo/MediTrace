import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE } from "../../constants";

const AuthCTA = ({ label, cta, onPress }: AuthCTAType) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label} </Text>
      </View>

      <Pressable onPress={onPress}>
        <Text style={styles.cta}>{cta} </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 1,
  },

  label: {
    color: COLORS.lightblack,
    fontSize: SIZE.base,
    fontWeight: "400",
  },

  cta: {
    color: COLORS.blue,
    fontSize: SIZE.base,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});

export default AuthCTA;
