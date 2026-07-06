/**
 * TYPOGRAPHY TOKENS
 * Baseado na hierarquia observada: títulos em bold/dark, corpo regular,
 * labels e legendas menores em cinza secundário.
 */

export const fontFamily = {
  // Troque pelos nomes reais das fontes carregadas no seu projeto (expo-font / react-native-vector-icons etc)
  regular: "System",
  medium: "System",
  semibold: "System",
  bold: "System",
} as const;

export const fontSize = {
  xs: 12, // legendas, hints, texto de badges
  sm: 13, // labels, descrições curtas ("Escolha o tamanho que é mais fácil para ler")
  base: 14, // corpo padrão (inputs, texto de item de lista)
  md: 16, // corpo destacado
  lg: 18, // subtítulos ("Minhas Atividades")
  xl: 20, // títulos de tela ("Cadastre-se", "Nova atividade")
  "2xl": 24, // títulos grandes ("Seja bem vindo!")
  "3xl": 28,
} as const;

export const lineHeight = {
  xs: 16,
  sm: 18,
  base: 20,
  md: 22,
  lg: 24,
  xl: 26,
  "2xl": 32,
  "3xl": 36,
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

// Estilos de texto prontos para uso (Text style presets)
export const textStyles = {
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize["2xl"],
    lineHeight: lineHeight["2xl"],
    fontWeight: fontWeight.bold,
  },
  h2: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xl,
    lineHeight: lineHeight.xl,
    fontWeight: fontWeight.bold,
  },
  h3: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.lg,
    fontWeight: fontWeight.semibold,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.base,
    lineHeight: lineHeight.base,
    fontWeight: fontWeight.regular,
  },
  bodyMedium: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.base,
    lineHeight: lineHeight.base,
    fontWeight: fontWeight.medium,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
    fontWeight: fontWeight.medium,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
    fontWeight: fontWeight.regular,
  },
  button: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.md,
    lineHeight: lineHeight.md,
    fontWeight: fontWeight.semibold,
  },
  badge: {
    fontFamily: fontFamily.semibold,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: fontWeight.semibold,
  },
} as const;

export type TextStyleKey = keyof typeof textStyles;
