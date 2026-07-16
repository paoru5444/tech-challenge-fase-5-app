import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import { View } from "react-native";

interface DividerProps {
  size?: number;
}

export default function Divider({ size = 8 }: DividerProps) {
  const backgroundColor = useContrastColor("#EAEAEA", "#000000");
  const spacing = useSpacing();

  return (
    <View
      style={{
        marginVertical: spacing(size),
        height: 1,
        width: "100%",
        backgroundColor,
      }}
    />
  );
}
