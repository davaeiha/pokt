export type ENV = 'production' | 'staging' | 'development'
export interface Config {
  env: ENV
  version: string
  serviceName: string
  nest: NestConfig
  cors: CorsConfig
  graphql: GraphqlConfig
  security: SecurityConfig
  redis: RedisConfig
  gateway: GatewayConfig
}

export interface NestConfig {
  port: number
}

export interface CorsConfig {
  enabled: boolean
}

export interface GraphqlConfig {
  playgroundEnabled: boolean
  debug: boolean
  schemaDestination: string
  introspection: boolean
  sortSchema: boolean
}

export interface SecurityConfig {
  jwtAccessSecret: string
  jwtRefreshSecret: string
  expiresIn: string
  refreshIn: string
  bcryptSaltOrRound: string | number
}

export interface RedisConfig {
  url?: string
  host: string
  port: number
  ttl: number
  db: number
}

export interface GatewayConfig {
  endpoint: string
}
