import { SetupListKey } from "@/modules/setup/components/setup-card";
import { SetupType } from "@/modules/setup/store/slices";

export const preferencesNames: Record<SetupType[SetupListKey], string> = {
  small: "Pequeno",
  default: "Padrão",
  big: "Grande",
  high: "Alto Contraste",
  simple: "Simples",
  [true]: "Ativado",
  [false]: "Desativado",
};
