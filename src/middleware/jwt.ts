import { Middleware } from "oak"
import { decodeToken } from "../lib/jwt.ts"

interface JwtMiddlewareOptions {
  secret: string
  ignore?: RegExp[]
}

export const jwtMiddleware = (opts: JwtMiddlewareOptions): Middleware => {
  return async (ctx, next) => {
    const path = ctx.request.url.pathname
    if (opts.ignore?.some((route) => route.test(path))) {
      await next()
      return
    }

    const authHeader = ctx.request.headers.get("authorization")
    console.log(authHeader)

    if (authHeader) {
      const token = authHeader.split(" ")[1]
      const user = await decodeToken(token)
      ctx.state.user = user
    }
  }
}
