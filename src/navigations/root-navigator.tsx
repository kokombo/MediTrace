import { createStackNavigator } from "@react-navigation/stack";
import {
  DoctorHomeScreen,
  EmailVerificationSuccess,
  Home,
  MedicationDetails,
  Notification,
  Onboarding,
  PasswordResetSuccess,
  PatientDetails,
} from "../screens";
import { Animated } from "react-native";
import {
  CreateAccount,
  ForgotPassword,
  LogIn,
  ResetPassword,
  VerifyEmail,
} from "../auth";
import { GoBack, HomeHeaderLeft, NotificationBell, Star } from "../components";
import { PADDING } from "../../constants";

const Stack = createStackNavigator();

const animation = new Animated.Value(0);

animation.addListener(() => {
  return;
});

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        gestureEnabled: false,
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: { padding: PADDING.normal },
        headerRightContainerStyle: { padding: PADDING.normal },
      }}
      screenListeners={{
        focus: () => {
          Animated.timing(animation, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        },
      }}
    >
      <Stack.Screen name="onboarding" component={Onboarding} />

      <Stack.Screen
        name="createAccount"
        component={CreateAccount}
        options={{
          headerLeft: () => <GoBack />,

          headerRight: () => <Star />,
        }}
      />

      <Stack.Screen
        name="login"
        component={LogIn}
        options={{
          headerLeft: () => <GoBack />,

          headerRight: () => <Star />,
        }}
      />

      <Stack.Screen
        name="verifyEmail"
        component={VerifyEmail}
        options={{
          headerLeft: () => <GoBack />,

          headerRight: () => <Star />,
        }}
      />

      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerLeft: () => <HomeHeaderLeft />,

          headerRight: () => <NotificationBell />,
        }}
      />

      <Stack.Screen
        name="emailVerifiedSuccess"
        component={EmailVerificationSuccess}
        options={{
          headerLeftContainerStyle: { display: "none" },

          headerRight: () => <Star />,
        }}
      />

      <Stack.Screen
        name="notification"
        component={Notification}
        options={{
          headerLeft: () => <GoBack />,

          title: "Notifications",
        }}
      />

      <Stack.Screen
        name="doctorHome"
        component={DoctorHomeScreen}
        options={{
          headerLeftContainerStyle: { display: "none" },

          title: "",
        }}
      />

      <Stack.Screen
        name="medicationDetails"
        component={MedicationDetails}
        options={{
          headerLeft: () => <GoBack />,

          title: "",
        }}
      />

      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{
          headerLeft: () => <GoBack />,

          headerRight: () => <Star />,

          title: "",
        }}
      />

      <Stack.Screen
        name="resetPassword"
        component={ResetPassword}
        options={{
          headerLeft: () => <GoBack />,

          headerRight: () => <Star />,

          title: "",
        }}
      />

      <Stack.Screen
        name="passwordResetSuccess"
        component={PasswordResetSuccess}
        options={{
          headerLeftContainerStyle: { display: "none" },

          headerRight: () => <Star />,
        }}
      />

      <Stack.Screen
        name="patientDetails"
        component={PatientDetails}
        options={{
          headerLeft: () => <GoBack />,

          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
