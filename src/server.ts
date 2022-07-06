import { Application } from "oak"
import { jwtMiddleware } from "./middleware/jwt.ts"
import { serveStaticContent } from "./middleware/static.ts"
import { HelloRouter } from "./routes/hello.ts"

const server = new Application<ServerState>()

server.use(serveStaticContent("/public"))
server.use(jwtMiddleware({ secret: "my-app-secret" }))

server.use(HelloRouter.routes())
server.use(HelloRouter.allowedMethods())

server.use((ctx) => {
  ctx.response.body = "Hello world!"
})

export default server
