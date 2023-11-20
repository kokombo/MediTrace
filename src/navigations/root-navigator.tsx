import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "../screens";
import { Animated } from "react-native";

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
      }}
      screenListeners={{
        focus: () => {
          Animated.timing(animation, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
          }).start();
        },
      }}
    >
      <Stack.Screen name="onboarding" component={Onboarding} options={{}} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
