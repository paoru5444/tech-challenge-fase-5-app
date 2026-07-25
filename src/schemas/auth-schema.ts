import * as z from "zod";

export const signInSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(1, "Senha não preenchda"),
});

export const signUpSchema = z.object({
  name: z.string().min(1, "Nome não preenchido"),
  email: z.email("Email inválido"),
  password: z.string().min(1, "Senha não preenchda"),
  passwordConfirm: z.string().min(1, "Confirmação de senha não preenchda"),
  age: z
    .string()
    .min(1, "Idade não preenchida")
    .regex(/^\d+$/, "Idade inválida")
    .refine((value) => Number(value) >= 1 && Number(value) <= 120, {
      error: "Idade inválida",
    }),
});
