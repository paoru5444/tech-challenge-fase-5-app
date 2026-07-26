import { colors } from "@/constants/colors";
import { useSpacing } from "@/hooks/useSpacing";
import { Text, TouchableOpacity } from "react-native";
import Typography from "../ui/typography";

export default function HelpButton({ onPress }: { onPress: () => void }) {
  const spacing = useSpacing();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ gap: spacing(4), alignItems: "center", padding: 32 }}
    >
      <Typography variant="subtitle" style={{ lineHeight: 28 }}>
        Precisa de <Text style={{ color: colors.brand.primary }}>ajuda</Text>{" "}
        para criar a sua primeira tarefa?{" "}
        <Text style={{ color: colors.brand.primary }}>Aperte aqui!</Text>{" "}
      </Typography>
    </TouchableOpacity>
  );
}
