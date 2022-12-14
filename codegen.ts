import { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'
const projectDir = process.cwd()
loadEnvConfig(projectDir)

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://hasura.art-for-all.tw/v1/graphql': {
        headers: {
          'X-Hasura-Admin-Secret': process.env.GRAPHQL_ADMIN_SECRET ?? '',
        },
      },
    },
  ],
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  generates: {
    './src/types.d.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        preResolveTypes: true,
        namingConvention: 'keep',
        avoidOptionals: {
          field: true,
        },
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
        omitOperationSuffix: true,
      },
    },
  },
}

export default config
