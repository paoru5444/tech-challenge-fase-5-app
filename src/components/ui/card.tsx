import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import { selectContrastLevel } from "@/modules/setup/store/selector";
import { useAppSelector } from "@/store/hooks";
import { StyleProp, View, ViewStyle } from "react-native";

interface Card {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function Card({ style, children }: Card) {
  const borderColor = useContrastColor("#EAEAEA", "#000000");
  const spacing = useSpacing();
  const contrastLevel = useAppSelector(selectContrastLevel);

  return (
    <View
      style={{
        borderWidth: contrastLevel === "high" ? 1 : 0,
        paddingVertical: spacing(24),
        paddingHorizontal: spacing(20),
        borderRadius: 20,
        backgroundColor: "#F6F6F6",
        borderColor,
        ...style,
      }}
    >
      {children}
    </View>
  );
}
