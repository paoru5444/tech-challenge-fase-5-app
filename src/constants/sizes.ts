/**
 * SIZE TOKENS
 * Alturas e larguras padrão de componentes recorrentes no print:
 * botões grandes full-width, inputs altos, avatares circulares, ícones de seção.
 */

export const buttonHeight = {
  sm: 40,
  md: 48,
  lg: 56, // botões primários ("Entrar", "Cadastrar", "Criar Atividade")
} as const;

export const inputHeight = {
  sm: 40,
  md: 48, // padrão dos campos do print
  lg: 56,
} as const;

export const iconSize = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24, // ícones de seção (quadrados coral com letra/ícone)
  xl: 32,
} as const;

export const avatarSize = {
  sm: 28,
  md: 36, // avatar circular no header do chat ("J")
  lg: 48,
  xl: 64,
} as const;

export const badgeHeight = {
  sm: 20, // pill de status ("Grande", "Padrão", "Ativada")
} as const;

export const iconContainerSize = {
  // quadrado coral com cantos arredondados usado como "ícone de seção"
  sm: 32,
  md: 40,
} as const;
