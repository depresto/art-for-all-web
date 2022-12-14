const { loadEnvConfig } = require('@next/env')
const projectDir = process.cwd()
loadEnvConfig(projectDir)

const config = {
  overwrite: true,
  schema: [
    {
      'https://hasura.art-for-all.tw/v1/graphql': {
        headers: {
          'X-Hasura-Admin-Secret': process.env.GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ['./packages/gql/src/*.ts', './apps/**/src/**/*.ts', './apps/**/src/**/*.tsx'],
  generates: {
    'packages/gql/types.d.ts': {
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
