import { View } from "react-native";
import Typography from "./typography";

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <View
      style={{
        backgroundColor: "#D13F62",
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 16,
      }}
    >
      <Typography variant="caption" style={{ color: "#FFFFFF", fontWeight: "600" }}>
        {text}
      </Typography>
    </View>
  );
}
