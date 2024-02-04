import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GATEWAY_ENDPOINT,
  documents: ['./src/**/*.gql'],
  generates: {
    './src/gateway/gateway.schema.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request', 'typescript-resolvers'],
      config: {
        gqlImport: 'graphql-request#gql',
      },
    },
  },
}

export default config
