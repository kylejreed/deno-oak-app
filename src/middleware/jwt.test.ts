import { assert, assertThrows } from "asserts"

import { testing } from "oak"
import { jwtMiddleware } from "./jwt.ts"
import { generateToken } from "../lib/jwt.ts"

Deno.test("JWT Middleware - passing token", async (t) => {
  const token = await generateToken({ id: 1 })
  const ctx = testing.createMockContext({
    headers: [["authorization", `Bearer ${token}`]],
  })
  const next = testing.createMockNext()

  await jwtMiddleware({ secret: "my-app-secret" })(ctx, next)

  assert(ctx.state.user)
})

Deno.test("JWT Middleware - no header", async (t) => {
  const ctx = testing.createMockContext({
    headers: [],
  })
  const next = testing.createMockNext()

  await jwtMiddleware({ secret: "my-app-secret" })(ctx, next)

  assert(!ctx.state.user)
})
