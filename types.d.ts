export {}
declare global {
  export interface ServerState {
    user: JwtUser
  }

  export interface JwtUser {
    id: number
    name: string
  }
}
