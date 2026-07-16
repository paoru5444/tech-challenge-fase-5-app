import { useSpacing } from "@/hooks/useSpacing";
import { selectUser } from "@/modules/auth/store/selectors";
import { useAppSelector } from "@/store/hooks";
import { View } from "react-native";
import Avatar from "./avatar";
import Typography from "./typography";

export default function Header() {
  const user = useAppSelector(selectUser);
  const spacing = useSpacing();

  return (
    <View style={{ flexDirection: "row", gap: spacing(8) }}>
      <Avatar user={user} />

      <View>
        <Typography variant="subtitle">Olá, {user?.displayName}</Typography>

        <Typography variant="caption">Quinta. 11 de Junho</Typography>
      </View>
    </View>
  );
}
