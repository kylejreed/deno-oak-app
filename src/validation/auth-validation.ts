import { z } from "zod"

export const LoginInput = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type LoginInput = z.infer<typeof LoginInput>

export const RegisterInput = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type RegisterInput = z.infer<typeof RegisterInput>
