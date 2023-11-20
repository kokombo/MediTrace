import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Heading } from "../../type";
import { COLORS, SIZE } from "../../constants";

const AuthHeader = ({ heading }: Heading) => {
  return (
    <View>
      <Text style={styles.heading}>{heading} </Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  heading: {
    fontSize: SIZE.lg,
    fontWeight: "700",
    color: COLORS.black,
  },
});
