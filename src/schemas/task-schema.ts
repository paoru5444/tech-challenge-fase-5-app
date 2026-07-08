import * as z from "zod";

export const taskSchema = z.object({
  name: z
    .string("Nome obrigatório")
    .min(1, "O nome deve ser preenchido")
    .max(15, "Limite de caracteres excedido"),
  description: z
    .string()
    .min(1, "Descrição deve ser preenchda")
    .max(20, "Limite de caracteres excedido"),
});
// export const formInSchema = z.object({
//   amount: z.coerce.number("Use números").min(1, "O valor deve ser preenchido"),
//   description: z
//     .string()
//     .min(1, "Descrição deve ser preenchda")
//     .max(20, "Limite de caracteres excedido"),
//   date: z.string().min(1, "Selecione uma data"),
//   category: z.object({
//     key: z.string().min(1, "Selecione uma categoria"),
//     value: z.string().min(1, "Selecione uma categoria"),
//   }),
// });
