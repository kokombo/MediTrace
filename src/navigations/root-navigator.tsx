import { createStackNavigator } from "@react-navigation/stack";
import { Home, Onboarding } from "../screens";
import { Animated } from "react-native";
import { CreateAccount, LogIn, VerifyEmail } from "../auth";
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
      <Stack.Screen name="onboarding" component={Onboarding} options={{}} />

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

          headerStyle: { height: 100 },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;