import { Image, StyleSheet, Text, View } from "react-native";
import {
  TextInputFrame,
  PasswordInputFrame,
  AuthHeader,
  AuthCTA,
  BlueButton,
  ForgetPassword,
  Loader,
} from "../components";
import { useState } from "react";
import { PADDING, icon } from "../../constants";
import Constants from "expo-constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { signIn } from "../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../redux/store";

const LogIn = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const dispatch: DispatchType = useDispatch();

  const { status } = useSelector((state: StateType) => state.user);

  const handleInputChange = (name: string, value: string) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const signAUserIn = () => {
    dispatch(signIn(userData));

    if (status === "success") {
      navigation.navigate("home");
    }
  };

  return (
    <View style={styles.body}>
      {status === "loading" && <Loader />}

      <View style={styles.welcome_wrapper}>
        <AuthHeader heading="Welcome Back!" />

        <Image source={icon.wave} resizeMode="contain" style={styles.wave} />
      </View>

      <View style={styles.form}>
        <TextInputFrame
          label="email"
          placeholder="helloworld@gmail.com"
          textContentType={"emailAddress"}
          onChangeText={(text) => handleInputChange("email", text)}
        />

        <PasswordInputFrame
          label="password"
          placeholder="Enter your password"
          onChangeText={(text) => handleInputChange("password", text)}
        />

        <View style={{ alignSelf: "flex-end" }}>
          <ForgetPassword />
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <BlueButton label="Log in" onPress={signAUserIn} />
      </View>

      <View
        style={{ position: "absolute", bottom: "7.75%", alignSelf: "center" }}
      >
        <AuthCTA
          label="Don't have an account?"
          cta="Sign up"
          onPress={() => navigation.navigate("createAccount")}
        />
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: PADDING.normal,
    paddingTop: Constants.statusBarHeight,
  },

  form: {
    gap: 16,
    marginTop: 38,
  },

  wave: {
    height: 30,
    width: 30,
  },

  welcome_wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
