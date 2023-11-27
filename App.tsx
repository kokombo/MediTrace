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
import { Asset } from "expo-asset";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

SplashScreen.preventAutoHideAsync();

const localAssets = [
  require("./assets/icons/alarm.png"),
  require("./assets/icons/backarrow.png"),
  require("./assets/icons/bell.png"),
  require("./assets/icons/hidepassword.png"),
  require("./assets/icons/meditracelogo.png"),
  require("./assets/icons/pill.png"),
  require("./assets/icons/plus.png"),
  require("./assets/icons/policychecked.png"),
  require("./assets/icons/profilepicture.png"),
  require("./assets/icons/search.png"),
  require("./assets/icons/star.png"),
  require("./assets/icons/wave.png"),
  require("./assets/illustrations/emailverified.png"),
  require("./assets/illustrations/exploreapp.png"),
  require("./assets/illustrations/medication.png"),
  require("./assets/sounds/notificationsound1.mp3"),
  require("./assets/sounds/notificationsound2.mp3"),
  require("./assets/sounds/notificationsound3.mp3"),
  require("./assets/sounds/notificationsound4.wav"),
  require("./assets/sounds/notificationsound5.wav"),
];

const loadAssetsAsync = async () => {
  const assetPromises = localAssets.map((localAsset) => {
    return Asset.fromModule(localAsset).downloadAsync();
  });
  await Promise.all(assetPromises);
};

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
        await loadAssetsAsync();

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
