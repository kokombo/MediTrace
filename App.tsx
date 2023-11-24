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
import * as TaskManager from "expo-task-manager";

const info = { title: "Wakeup", body: "Wake up now" };

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// TaskManager.defineTask(
//   "backgroundNotificationTask",
//   async ({ data, error }) => {
//     if (error) {
//       return;
//     }

//     if (data) {
//       const { title, body } = data;

//       //@ts-ignore
//       await Notifications.scheduleNotificationAsync({
//         content: {
//           title,
//           body,
//         },
//       });
//     }
//   }
// );

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const [notification, setNotification] = useState(false);

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  // useEffect(() => {
  //   const backgroundSubscription =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       setNotification(notification);
  //     });

  //   return () => {
  //     Notifications.removeNotificationSubscription(backgroundSubscription);
  //   };
  // }, []);

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
