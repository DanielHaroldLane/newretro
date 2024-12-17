import eslintConfigPrettier from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['build', 'coverage'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  eslintConfigPrettier,
  tseslint.configs.recommendedTypeChecked,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'sort-imports': [
        'error',
        { ignoreCase: true, ignoreDeclarationSort: true },
      ],
    },
  },
  {
    files: ['**/*.{js,cjs}'],
    rules: { '@typescript-eslint/no-unsafe-assignment': 'off' },
  }
)
