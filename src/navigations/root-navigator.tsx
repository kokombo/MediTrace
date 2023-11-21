import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "../screens";
import { Animated } from "react-native";
import { CreateAccount, LogIn } from "../auth";
import { GoBack, Star } from "../components";
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
    </Stack.Navigator>
  );
};

export default RootNavigator;
