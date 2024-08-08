import { StyleSheet, Text, View, Image } from "react-native";
import { BlueButton } from "../../components";
import { icon, SIZE, PADDING } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import type { NavigationType } from "../../types/types";

const PasswordResetSuccess = () => {
  const navigation: NavigationType = useNavigation();

  return (
    <View style={styles.body}>
      <Image
        source={icon.emailverified}
        resizeMode="contain"
        style={{ height: 215, width: 268 }}
      />

      <View style={{ alignItems: "center", gap: 18, maxWidth: 279 }}>
        <Text style={{ fontSize: SIZE.mdl, fontWeight: "700" }}>
          Password Changed!
        </Text>
        <Text
          style={{ textAlign: "center", fontSize: SIZE.base, lineHeight: 24 }}
        >
          You have successfully changed your password, you can continue to login
          now.
        </Text>
      </View>

      <View style={{ width: "100%" }}>
        <BlueButton
          label="Continue to login"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
};

export default PasswordResetSuccess;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: PADDING.normal,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
