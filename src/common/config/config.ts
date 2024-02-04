import { description, name, version } from '../../../package.json'
import type { Config } from './config.interface'

const env = (process.env?.NODE_ENV || 'production') as 'production' | 'staging' | 'development'
const config: Config = {
  env,
  version,
  serviceName: name,
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  graphql: {
    playgroundEnabled: process.env?.PLAYGROUND_ENABLED ? Boolean(process.env.PLAYGROUND_ENABLED === 'true') : false,
    introspection: process.env?.GRAPHQL_INTROSPECTION ? Boolean(process.env.GRAPHQL_INTROSPECTION === 'true') : false,
    debug: Boolean(process.env.NODE_ENV === 'development'),
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    jwtAccessSecret: process.env.JWT_ACCESS_SECRET!,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET!,
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN || '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
  redis: {
    url: process.env.REDIS_URL!,
    host: process.env.REDIS_HOST!,
    port: Number.parseInt(process.env.REDIS_PORT!),
    ttl: Number.parseInt(process.env.REDIS_TTL!),
    db: 0,
  },
  gateway: {
    endpoint: process.env.GATEWAY_ENDPOINT!,
  },
}

// eslint-disable-next-line import/no-default-export
export default (): Config => config
