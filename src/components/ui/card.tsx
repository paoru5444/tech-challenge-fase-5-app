import { useAnimationsEnabled } from "@/hooks/useAnimationsEnabled";
import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import { selectContrastLevel } from "@/modules/setup/store/selector";
import { useAppSelector } from "@/store/hooks";
import { StyleProp, ViewStyle } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

interface Card {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function Card({ style, children }: Card) {
  const borderColor = useContrastColor("#EAEAEA", "#000000");
  const spacing = useSpacing();
  const contrastLevel = useAppSelector(selectContrastLevel);
  const animationsEnabled = useAnimationsEnabled();

  return (
    <Animated.View
      entering={animationsEnabled ? FadeInDown.duration(250) : undefined}
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
    </Animated.View>
  );
}
