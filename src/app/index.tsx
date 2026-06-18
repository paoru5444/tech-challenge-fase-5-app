import { SignInScreen } from "@/modules/auth/screens/sign-in";
import {
  isSignInProgress,
  selectIsAuthenticated,
} from "@/modules/auth/store/selectors";
import { useAppSelector } from "@/store/hooks";
import { router } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function Index() {
  const loading = useAppSelector(isSignInProgress);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (isAuthenticated) {
    router.replace("/(tabs)");
    return;
  }

  return <SignInScreen />;
}
