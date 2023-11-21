import { Alert, StyleSheet, View } from "react-native";
import {
  AuthHeader,
  TextInputFrame,
  BlueButton,
  PasswordInputFrame,
  CheckPrivacyPolicy,
  AuthCTA,
  Loader,
} from "../components";
import { PADDING } from "../../constants";
import { useState } from "react";
import Constants from "expo-constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { createAccount } from "../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../redux/store";
import { RouteProp } from "@react-navigation/native";

// type Prop = {
//     route: RouteProp<StackParamList, "searchresult">;
//   };

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const CreateAccount = () => {
  const [userData, setUserData] = useState(initialState);
  const [acceptPolicy, setAcceptPolicy] = useState<boolean>(false);

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const dispatch: DispatchType = useDispatch();
  const { status, error } = useSelector((state: StateType) => state.user);

  const handleInputChange = (name: string, value: string) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const canSignUp = Boolean(userData && acceptPolicy);

  const SignUpAUser = () => {
    dispatch(createAccount(userData));

    if (status === "success") {
      navigation.navigate("verifyEmail");
    }
  };

  // if (status === "failed") {
  //   return Alert.alert(error!);
  // }

  console.log(status, error);

  return (
    <View style={styles.body}>
      {status === "loading" && <Loader />}

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
      </View>

      <View style={{ marginTop: 40 }}>
        <BlueButton
          label="Sign up"
          onPress={SignUpAUser}
          disabled={status === "loading" || !canSignUp}
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
