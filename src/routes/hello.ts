import { Router } from "oak"

export const HelloRouter = new Router({ prefix: "/hello" })

HelloRouter.get("/", (ctx) => {
  ctx.response.body = "Hello from router"
})
