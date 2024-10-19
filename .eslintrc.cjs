module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'standard', 'prettier'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*.astro'],
      processor: 'astro/client-side-ts',
      plugins: ['astro'],
      env: {
        node: true,
        'astro/astro': true,
        es2021: true
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module'
      },
      extends: [
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended'
      ],
      rules: {
        'astro/jsx-a11y/anchor-is-valid': 'warn'
      }
    },
    {
      files: ['**/*.astro/*.ts', '*.astro/*.ts'],
      env: {
        browser: true,
        es2021: true
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: null
      },
      rules: {
        'prettier/prettier': 'off'
      }
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json']
      },
      extends: ['love'],
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/triple-slash-reference': 'off'
      }
    }
  ]
}
