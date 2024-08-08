import { StyleSheet, View } from "react-native";
import {
  AuthHeader,
  TextInputFrame,
  BlueButton,
  PasswordInputFrame,
  CheckPrivacyPolicy,
  AuthCTA,
  Loader,
  AuthError,
} from "../components";
import { PADDING } from "../../constants";
import { useState } from "react";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import axios, { type AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { setUser } from "../redux/slices/user";
import type { DispatchType } from "../redux/store";
import { useDispatch } from "react-redux";
import type { NavigationType } from "../types/types";

type SignupData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
};

const initialState: SignupData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  role: "patient",
};

const CreateAccount = () => {
  const [userData, setUserData] = useState(initialState);
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const navigation: NavigationType = useNavigation();
  const dispatch: DispatchType = useDispatch();

  const handleInputChange = (name: string, value: string) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const canSignUp = Boolean(
    userData.first_name &&
      userData.last_name &&
      userData.email &&
      userData.password &&
      acceptPolicy
  );

  const signUpRequest = async (userData: SignupData) => {
    const res = await axios.post(
      "https://meditrace.onrender.com/api/v1/auth/register",
      userData
    );

    return res.data;
  };

  const { mutateAsync, isPending, isError, error } = useMutation<
    User,
    AxiosError<string>,
    SignupData
  >({
    mutationKey: ["signup"],
    mutationFn: signUpRequest,
    onSuccess: (user) => {
      dispatch(setUser(user));
      navigation.navigate("verifyEmail");
    },
  });

  const signUp = async () => {
    await mutateAsync(userData);
  };

  return (
    <View style={styles.body}>
      {isPending && <Loader />}

      <AuthHeader heading="Create account" />

      <View style={styles.form}>
        <TextInputFrame
          label="first name"
          placeholder="Enter your first name"
          textContentType={"givenName"}
          onChangeText={(text) => handleInputChange("first_name", text)}
        />

        <TextInputFrame
          label="last name"
          placeholder="Enter your last name"
          textContentType={"familyName"}
          onChangeText={(text) => handleInputChange("last_name", text)}
        />

        <TextInputFrame
          label="email"
          placeholder="Enter your email address"
          textContentType={"emailAddress"}
          onChangeText={(text) => handleInputChange("email", text)}
        />

        <PasswordInputFrame
          label="password"
          onChangeText={(text) => handleInputChange("password", text)}
        />

        <CheckPrivacyPolicy
          value={acceptPolicy}
          onValueChange={setAcceptPolicy}
          isChecked={acceptPolicy}
        />

        {isError && <AuthError message={error.response?.data} />}
      </View>

      <View style={{ marginTop: 20 }}>
        <BlueButton
          label="Sign up"
          onPress={signUp}
          disabled={!canSignUp || isPending}
        />
      </View>

      <View
        style={{ position: "absolute", bottom: "7.75%", alignSelf: "center" }}
      >
        <AuthCTA
          label="Already have an account? "
          cta="Log in"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
};

export default CreateAccount;

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
});
