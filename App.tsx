import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigations";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";
import { Splash } from "./src/screens";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Toast from "react-native-toast-message";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error: any) {
        Alert.alert(error.message);
      } finally {
        setAppIsReady(true);
      }
    };

    prepareApp();
  }, []);

  const layoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  layoutRootView();

  if (!appIsReady) return null;

  return (
    <NavigationContainer theme={AppTheme}>
      <Provider store={store}>
        <RootNavigator />
        <Toast />
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
