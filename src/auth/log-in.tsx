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
import { useState } from "react";
import { PADDING, icon } from "../../constants";
import Constants from "expo-constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useResendOTP } from "../hooks";
import { DispatchType } from "../redux/store";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/user";

type SignupData = {
  email: string;
  password: string;
};

const initalState: SignupData = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [userData, setUserData] = useState(initalState);
  const canLogin = Boolean(userData.email && userData.password);

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch: DispatchType = useDispatch();
  const { sendOTP } = useResendOTP();

  const handleInputChange = (name: string, value: string) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const signInRequest = async (userData: SignupData) => {
    const res = await axios.post(
      "https://meditrace.onrender.com/api/v1/auth/login",
      userData
    );

    return res.data;
  };

  const { mutateAsync, isPending, isError, error } = useMutation<
    User,
    AxiosError<string>,
    SignupData
  >({
    mutationKey: ["signin"],
    mutationFn: signInRequest,
    onSuccess: (user) => {
      dispatch(setUser(user));

      if (user.email_confirmed) {
        navigation.navigate("home");
      } else {
        sendOTP(user.email);
        navigation.navigate("verifyEmail");
      }
    },
  });

  const signIn = async () => {
    await mutateAsync(userData);
  };

  return (
    <View style={styles.body}>
      {isPending && <Loader />}

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
          isErrorActive={isError}
        />

        {isError && (
          <View style={{ position: "absolute", bottom: 15 }}>
            <AuthError message={error.response?.data} />
          </View>
        )}

        <View style={{ alignSelf: "flex-end" }}>
          <ForgetPassword />
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <BlueButton
          label="Log in"
          // onPress={signIn}
          onPress={() => navigation.navigate("home")}
          disabled={!canLogin || isPending}
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
