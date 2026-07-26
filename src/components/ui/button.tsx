import { useAnimationsEnabled } from "@/hooks/useAnimationsEnabled";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Typography from "./typography";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export default function Button({ text, onPress }: ButtonProps) {
  const animationsEnabled = useAnimationsEnabled();
  const [pressed, setPressed] = useState(false);
  const scale = useSharedValue(1);

  useEffect(() => {
    if (!animationsEnabled) return;
    scale.value = withTiming(pressed ? 0.96 : 1, { duration: 100 });
  }, [pressed, animationsEnabled, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedTouchableOpacity
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        {
          width: "100%",
          height: 50,
          backgroundColor: "#F67653",
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
        },
        animatedStyle,
      ]}
    >
      <Typography variant="title" style={{ color: "#FFFFFF" }}>
        {text}
      </Typography>
    </AnimatedTouchableOpacity>
  );
}
