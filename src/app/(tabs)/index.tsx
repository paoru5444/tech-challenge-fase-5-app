import * as actions from "@/modules/auth/store/actions";
import Home from "@/modules/home/screens/home";
import { useAppDispatch } from "@/store/hooks";
import { Redirect, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const dispatch = useAppDispatch();

  const logout = async () => {
    await dispatch(actions.logout());
    router.replace("/sign-in");
  };

  return <Home  />

  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity
        onPress={logout}
        style={{ width: 300, height: 80, backgroundColor: "blue" }}
      >
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
}
