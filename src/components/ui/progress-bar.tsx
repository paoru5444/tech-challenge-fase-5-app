import { theme } from "@/constants/theme";
import { useContrastColor } from "@/hooks/useContrastColor";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View, ViewStyle } from "react-native";
import Typography from "./typography";

type ProgressBarColor = "success" | "primary" | "danger";

interface ProgressBarProps {
  /** Progresso de 0 a 100 */
  progress: number;
  /** Cor do preenchimento — 'success' (verde) é o padrão visto no print */
  color?: ProgressBarColor;
  /** Altura da barra */
  height?: number;
  /** Anima a transição ao mudar o valor de progress */
  animated?: boolean;
  /** Mostra o rótulo percentual à direita (ex: "40%") */
  showLabel?: boolean;
  style?: ViewStyle;
}

const colorMap: Record<ProgressBarColor, string> = {
  success: theme.colors.semantic.success,
  primary: theme.colors.brand.primary,
  danger: theme.colors.semantic.danger,
};

export function ProgressBar({
  progress,
  color = "success",
  height = 12,
  animated = true,
  showLabel = false,
  style,
}: ProgressBarProps) {
  const trackColor = useContrastColor(
    theme.colors.background.surfaceAlt,
    "#4A4844",
  );
  const labelColor = useContrastColor(theme.colors.text.secondary, "#000000");

  const clamped = Math.max(0, Math.min(100, progress));
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animated) {
      Animated.timing(widthAnim, {
        toValue: clamped,
        duration: 400,
        useNativeDriver: false,
      }).start();
    } else {
      widthAnim.setValue(clamped);
    }
  }, [clamped, animated]);

  const widthInterpolated = widthAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={[styles.row, style]}>
      <View
        style={[
          styles.track,
          {
            height,
            borderRadius: height / 2,
            backgroundColor: trackColor,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.fill,
            {
              width: widthInterpolated,
              height,
              borderRadius: height / 2,
              backgroundColor: colorMap[color],
            },
          ]}
        />
      </View>

      {showLabel && (
        <Typography
          variant="caption"
          style={[styles.label, { color: labelColor }]}
        >
          {Math.round(clamped)}%
        </Typography>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  track: {
    flex: 1,
    overflow: "hidden",
  },
  fill: {
    // largura controlada via Animated.Value
  },
  label: {
    marginLeft: theme.spacing.sm,
    minWidth: 32,
    textAlign: "right",
  },
});
