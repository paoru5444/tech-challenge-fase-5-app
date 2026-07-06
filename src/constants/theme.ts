export * from "./colors";
export * from "./sizes";
export * from "./spacing";
export * from "./typography";

import { colors, palette } from "./colors";
import {
  avatarSize,
  badgeHeight,
  buttonHeight,
  iconContainerSize,
  iconSize,
  inputHeight,
} from "./sizes";
import { radius, shadow, spacing } from "./spacing";
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textStyles,
} from "./typography";

/**
 * THEME
 * Objeto único exportado para consumo em qualquer componente,
 * sem necessidade de Context/Provider — apenas import direto.
 *
 * import { theme } from '@/design-system/tokens';
 * <View style={{ padding: theme.spacing.base, backgroundColor: theme.colors.background.surface }} />
 */
export const theme = {
  colors,
  palette,
  typography: {
    fontFamily,
    fontSize,
    lineHeight,
    fontWeight,
    textStyles,
  },
  spacing,
  radius,
  shadow,
  sizes: {
    buttonHeight,
    inputHeight,
    iconSize,
    avatarSize,
    badgeHeight,
    iconContainerSize,
  },
} as const;

export type Theme = typeof theme;
export default theme;
