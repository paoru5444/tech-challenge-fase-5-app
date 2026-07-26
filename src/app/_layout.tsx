import { DarkTheme, DefaultTheme, Slot, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { FeedbackToastProvider } from "@/components/shared/feedback-toast";
import { persistor, store } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Layout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <FeedbackToastProvider>
            <AnimatedSplashOverlay />
            <SafeAreaView style={{ flex: 1 }}>
              <Slot />
            </SafeAreaView>
          </FeedbackToastProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
