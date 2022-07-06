import { create, verify } from "https://deno.land/x/djwt@v2.7/mod.ts"

const key = await crypto.subtle.generateKey({ name: "HMAC", hash: "SHA-512" }, true, ["sign", "verify"])

export const generateToken = (data: any) => {
  return create({ alg: "HS512", typ: "JWT" }, data, key)
}

export const decodeToken = (token: string) => {
  return verify(token, key)
}
