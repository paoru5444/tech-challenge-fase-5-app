import { useSpacing } from "@/hooks/useSpacing";
import { View } from "react-native";
import Typography from "./typography";

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  const spacing = useSpacing();

  return (
    <View
      style={{
        backgroundColor: "#D13F62",
        paddingVertical: spacing(4),
        paddingHorizontal: spacing(6),
        borderRadius: 16,
      }}
    >
      <Typography variant="caption" style={{ color: "#FFFFFF", fontWeight: "600" }}>
        {text}
      </Typography>
    </View>
  );
}
