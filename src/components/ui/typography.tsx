import type { ReactNode } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { selectFontSize } from "@/modules/setup/store/selector";
import type { SetupType } from "@/modules/setup/store/slices";
import { useAppSelector } from "@/store/hooks";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "title"
  | "subtitle"
  | "body"
  | "bodySmall"
  | "label"
  | "caption";

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  children: ReactNode;
}

type FontSize = SetupType["fontSize"];

const sizeStyles: Record<TypographyVariant, Record<FontSize, number>> = {
  h1: { small: 20, default: 24, big: 30 },
  h2: { small: 18, default: 20, big: 24 },
  title: { small: 14, default: 16, big: 18 },
  subtitle: { small: 14, default: 16, big: 18 },
  body: { small: 12, default: 14, big: 16 },
  bodySmall: { small: 11, default: 12, big: 14 },
  label: { small: 11, default: 12, big: 14 },
  caption: { small: 9, default: 10, big: 12 },
};

const variantStyles: Record<TypographyVariant, TextStyle> = {
  h1: { fontWeight: "bold", letterSpacing: -0.2 },
  h2: { fontWeight: "bold", letterSpacing: -0.2 },
  title: { fontWeight: "bold", letterSpacing: -0.2 },
  subtitle: { fontWeight: "600", letterSpacing: -0.4 },
  body: { fontWeight: "400" },
  bodySmall: { fontWeight: "400" },
  label: { fontWeight: "bold" },
  caption: {
    fontWeight: "500",
    letterSpacing: -0.2,
    color: "#828282",
  },
};

export default function Typography({
  variant = "body",
  style,
  children,
  ...rest
}: TypographyProps) {
  const fontSize = useAppSelector(selectFontSize);

  return (
    <Text
      style={[
        styles.base,
        variantStyles[variant],
        { fontSize: sizeStyles[variant][fontSize] },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    color: "#000000",
  },
});
