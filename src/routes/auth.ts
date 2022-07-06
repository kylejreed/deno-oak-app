import { Router } from "oak"
import { LoginInput } from "../validation/auth-validation.ts" 
import { login, register } from "../lib/auth-service.ts"

export const AuthRouter = new Router({ prefix: "/" })

AuthRouter.post("/login", async (ctx) => {
  const { email, password } = await LoginInput.parseAsync(ctx.request.body)
  const { user, token } await login(email, password)
  ctx.response.body = "login"
})

AuthRouter.post("/register", (ctx) => {
  const { email, password } = await RegisterInput.parseAsync(ctx.request.body)
  const { user, token } await register(email, password)
  ctx.response.body = "register"
})