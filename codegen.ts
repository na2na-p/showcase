
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	emitLegacyCommonJSImports: false,
	schema: 'https://graphql-pokemon2.vercel.app',
	generates: {
		'./src/generated/graphql.ts': {
			plugins: ['typescript', 'typescript-operations']
		},
		'./src/generated/schema.graphql': {
			plugins: ['schema-ast']
		}
	}
};

export default config;
