import { Middleware } from "oak"

export const serveStaticContent = (path: string): Middleware => {
  return async (ctx, next) => {
    try {
      if (ctx.request.url.pathname) {
        await ctx.send({
          root: `${Deno.cwd()}/${path}`,
        })
      } else {
        await next()
      }
    } catch {
      await next()
    }
  }
}
