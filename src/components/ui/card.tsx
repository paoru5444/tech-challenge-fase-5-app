import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import { StyleProp, View, ViewStyle } from "react-native";

interface Card {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function Card({ style, children }: Card) {
  const borderColor = useContrastColor("#EAEAEA", "#000000");
  const spacing = useSpacing();

  return (
    <View
      style={{
        borderWidth: 2,
        paddingVertical: spacing(24),
        paddingHorizontal: spacing(20),
        borderRadius: 32,
        backgroundColor: "#FFFFFF",
        borderColor,
        ...style,
      }}
    >
      {children}
    </View>
  );
}
