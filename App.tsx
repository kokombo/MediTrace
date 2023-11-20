import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigations";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";

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
    const prepare = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error: any) {
        Alert.alert(error.message);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
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
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
