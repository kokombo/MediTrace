import { Image, StyleSheet, View } from "react-native";
import {
  TextInputFrame,
  PasswordInputFrame,
  AuthHeader,
  AuthCTA,
  BlueButton,
  ForgetPassword,
  Loader,
  AuthError,
} from "../components";
import { useEffect, useState } from "react";
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
import { resendOTP } from "../redux/slices/verify-email-slice";

const initalState = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [userData, setUserData] = useState(initalState);

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const dispatch: DispatchType = useDispatch();

  const { status, error, isErrorActive, user } = useSelector(
    (state: StateType) => state.user
  );

  const handleInputChange = (name: string, value: string) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const canLogin = Boolean(userData.email && userData.password);

  const signAUserIn = () => {
    dispatch(signIn(userData));
  };

  useEffect(() => {
    if (status === "success") {
      setUserData((prev) => ({ ...prev, password: "" }));

      if (user?.email_confirmed) {
        return navigation.navigate("home");
      } else {
        dispatch(resendOTP({ email: userData.email }));
        return navigation.navigate("verifyEmail");
      }
    }
  }, [status]);

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
          isErrorActive={isErrorActive}
        />

        {status === "failed" && error.loginError ? (
          <View style={{ position: "absolute", bottom: 15 }}>
            <AuthError message={error.loginError} />
          </View>
        ) : null}

        <View style={{ alignSelf: "flex-end" }}>
          <ForgetPassword />
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <BlueButton
          label="Log in"
          onPress={signAUserIn}
          disabled={status === "loading" || !canLogin}
        />
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
