import * as actions from "@/modules/auth/store/actions";
import { useAppDispatch } from "@/store/hooks";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const dispatch = useAppDispatch();

  const logout = async () => {
    await dispatch(actions.logout());
    router.replace("/sign-in");
  };

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
