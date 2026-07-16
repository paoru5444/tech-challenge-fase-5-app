import { theme } from "@/constants/theme";
import { useContrastColor } from "@/hooks/useContrastColor";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import Typography from "./typography";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Texto ao lado do checkbox (ex: "Primeiro teste unitário") */
  label?: string;
  /** Aplica riscado no label quando marcado (visto no print: "Introdução à biblioteca Jest") */
  strikethroughWhenChecked?: boolean;
  disabled?: boolean;
  size?: number;
  style?: ViewStyle;
}

export function Checkbox({
  checked,
  onChange,
  label,
  strikethroughWhenChecked = false,
  disabled = false,
  size = 20,
  style,
}: CheckboxProps) {
  const borderColor = useContrastColor(theme.colors.border.default, "#000000");
  const placeholderColor = useContrastColor(
    theme.colors.text.placeholder,
    "#000000",
  );
  const secondaryColor = useContrastColor(
    theme.colors.text.secondary,
    "#000000",
  );

  return (
    <Pressable
      style={[styles.row, style]}
      onPress={() => !disabled && onChange(!checked)}
      disabled={disabled}
      hitSlop={8}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
    >
      <View
        style={[
          styles.box,
          {
            width: size,
            height: size,
            borderRadius: theme.radius.xs,
          },
          checked ? styles.boxChecked : [styles.boxUnchecked, { borderColor }],
          disabled && styles.boxDisabled,
        ]}
      >
        {checked && (
          <Text style={[styles.check, { fontSize: size * 0.7 }]}>✓</Text>
        )}
      </View>

      {label ? (
        <Typography
          variant="body"
          style={[
            styles.label,
            disabled && { color: placeholderColor },
            checked &&
              strikethroughWhenChecked && {
                textDecorationLine: "line-through",
                color: secondaryColor,
              },
          ]}
        >
          {label}
        </Typography>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
  },
  boxUnchecked: {
    backgroundColor: theme.colors.background.surface,
  },
  boxChecked: {
    backgroundColor: theme.colors.semantic.info,
    borderColor: theme.colors.semantic.info,
  },
  boxDisabled: {
    opacity: 0.5,
  },
  check: {
    color: theme.colors.text.inverse,
    fontWeight: theme.typography.fontWeight.bold as any,
  },
  label: {
    color: theme.colors.text.primary,
    marginLeft: theme.spacing.sm,
    flexShrink: 1,
  },
});
