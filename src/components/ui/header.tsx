import { selectUser } from "@/modules/auth/store/selectors";
import { useAppSelector } from "@/store/hooks";
import { Text, View } from "react-native";
import Avatar from "./avatar";

export default function Header() {
  const user = useAppSelector(selectUser);

  return (
    <View>
      <Avatar user={user} />

      <Text style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.4 }}>
        Olá, {user?.displayName}
      </Text>

      <Text
        style={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: -0.2,
          color: "#828282",
        }}
      >
        Quinta. 11 de Junho
      </Text>
    </View>
  );
}
