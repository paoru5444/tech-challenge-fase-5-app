/**
 * SPACING TOKENS
 * Escala em múltiplos de 4, cobrindo o padding generoso dos cards
 * e o gap entre elementos observado no print.
 */
export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16, // padding padrão de cards e telas
  lg: 20,
  xl: 24,
  "2xl": 32,
  "3xl": 40,
  "4xl": 48,
  "5xl": 64,
} as const;

/**
 * RADIUS TOKENS
 * Cards e inputs com cantos bem arredondados, botões em pill/quase-pill.
 */
export const radius = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 8, // inputs
  lg: 12, // cards
  xl: 16, // cards de destaque (ex: banner "Atividades Pendentes")
  "2xl": 20,
  full: 999, // botões, badges, avatares
} as const;

/**
 * SHADOW / ELEVATION TOKENS
 * Sombras suaves para cards sobre fundo off-white.
 */
export const shadow = {
  none: {
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: "#1A1918",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 1,
  },
  md: {
    shadowColor: "#1A1918",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: "#1A1918",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 6,
  },
} as const;

export type Spacing = typeof spacing;
export type Radius = typeof radius;
export type Shadow = typeof shadow;
