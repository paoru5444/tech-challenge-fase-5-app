import * as z from "zod";

export const taskSchema = z.object({
  title: z
    .string("Nome obrigatório")
    .min(1, "O nome deve ser preenchido")
    .max(40, "Limite de caracteres excedido"),
  description: z
    .string()
    .min(1, "Descrição deve ser preenchda")
    .max(400, "Limite de caracteres excedido"),
});
