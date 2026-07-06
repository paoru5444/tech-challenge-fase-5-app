/**
 * COLOR TOKENS
 * Paleta extraída do print de referência: coral/terracota como cor de marca,
 * fundo off-white, cards brancos, badges em bordô e acentos em verde.
 */

export const palette = {
  // Marca — coral/terracota (botões primários, header de destaque, ícones de seção)
  coral: {
    50: "#FDF4F0",
    100: "#FBE6DA",
    200: "#F5C9AE",
    300: "#EFAD85",
    400: "#E9946A",
    500: "#E8825A", // cor de marca principal (botões "Entrar", "Cadastrar", "Criar Atividade")
    600: "#D66F47",
    700: "#B85835",
    800: "#8F4328",
    900: "#65301D",
  },

  // Bordô — usado em badges de status ("Grande", "Ativada") e botão destrutivo ("Sair da Conta")
  maroon: {
    50: "#F7EAEC",
    100: "#EBCBCF",
    200: "#D99BA2",
    300: "#BE6B74",
    400: "#A13F49", // badges de status
    500: "#8B3A42", // botão "Sair da Conta"
    600: "#712E35",
    700: "#57232A",
  },

  // Verde — sucesso, progresso, toggles ativos, seleção confirmada
  green: {
    50: "#EAF7EC",
    100: "#CDEBD2",
    200: "#9CD8A6",
    300: "#6FC47D",
    400: "#4CAF50", // toggle ligado, barra de progresso, checkbox marcado
    500: "#3D9A42",
    600: "#2F7D34",
  },

  // Azul — usado em elementos de seleção/foco (checkbox marcado, input focado)
  blue: {
    50: "#EAF1FE",
    100: "#C7DAFC",
    300: "#7FA9F7",
    500: "#3B82F6",
    700: "#2760C4",
  },

  // Neutros — fundo, texto, bordas
  neutral: {
    0: "#FFFFFF",
    50: "#F7F5F2", // fundo geral das telas (off-white)
    100: "#F0EDE8",
    200: "#E5E1DC", // bordas de input, divisores
    300: "#D3CFC9",
    400: "#B0ADA7",
    500: "#8A8783", // texto secundário / placeholder
    600: "#6B6864",
    700: "#4A4844",
    800: "#2E2C2A",
    900: "#1A1918", // texto principal, títulos
  },
} as const;

export const colors = {
  // ---- Marca ----
  brand: {
    primary: palette.coral[500],
    primaryHover: palette.coral[600],
    primaryPressed: palette.coral[700],
    primaryLight: palette.coral[100],
    primarySubtle: palette.coral[50],
  },

  // ---- Semânticas ----
  semantic: {
    success: palette.green[400],
    successLight: palette.green[100],
    danger: palette.maroon[500],
    dangerLight: palette.maroon[100],
    badge: palette.maroon[400],
    info: palette.blue[500],
    warning: palette.coral[400],
  },

  // ---- Texto ----
  text: {
    primary: palette.neutral[900],
    secondary: palette.neutral[500],
    placeholder: palette.neutral[400],
    inverse: palette.neutral[0],
    link: palette.coral[500],
    onPrimary: palette.neutral[0], // texto sobre botão coral
    onDanger: palette.neutral[0], // texto sobre botão bordô
  },

  // ---- Fundo / superfícies ----
  background: {
    default: palette.neutral[50],
    surface: palette.neutral[0], // cards, inputs
    surfaceAlt: palette.neutral[100],
    overlay: "rgba(26, 25, 24, 0.5)",
  },

  // ---- Bordas ----
  border: {
    default: palette.neutral[200],
    subtle: palette.neutral[100],
    focus: palette.green[400], // borda verde de seleção (ver print de "Preferências")
    danger: palette.maroon[400],
  },

  // ---- Estados de componentes ----
  states: {
    disabled: palette.neutral[300],
    disabledText: palette.neutral[400],
    selectedBg: palette.green[50],
    selectedBorder: palette.green[400],
  },
} as const;

export type Palette = typeof palette;
export type Colors = typeof colors;
