import {z } from "zod"

export const formRegisterSchema = z.object({
    name: z.string().min(2, {message:"Este campo é obrigatório"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Mínimo de 8 caracteres"}),
    confirmPassword: z.string().min(1, {message: "Confirme sua senha"}),
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
})