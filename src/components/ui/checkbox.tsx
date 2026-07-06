import { theme } from "@/constants/theme";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

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
          checked ? styles.boxChecked : styles.boxUnchecked,
          disabled && styles.boxDisabled,
        ]}
      >
        {checked && (
          <Text style={[styles.check, { fontSize: size * 0.7 }]}>✓</Text>
        )}
      </View>

      {label ? (
        <Text
          style={[
            styles.label,
            disabled && styles.labelDisabled,
            checked && strikethroughWhenChecked && styles.labelStrike,
          ]}
        >
          {label}
        </Text>
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
    borderColor: theme.colors.border.default,
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
    ...theme.typography.textStyles.body,
    color: theme.colors.text.primary,
    marginLeft: theme.spacing.sm,
    flexShrink: 1,
  },
  labelDisabled: {
    color: theme.colors.text.placeholder,
  },
  labelStrike: {
    textDecorationLine: "line-through",
    color: theme.colors.text.secondary,
  },
});
