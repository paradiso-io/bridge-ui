module.exports = {
  settings: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // Typescript
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],
    '@typescript-eslint/no-empty-function': ['warn'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // React
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/no-multi-comp': 0,
    semi: ['warn', 'never', { beforeStatementContinuationChars: 'always' }],
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'prefer-destructuring': ['warn', { object: true, array: false }],
    'no-underscore-dangle': 0,
    'no-constant-condition': ['error', { checkLoops: false }],
    // Prettier
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'all',
        semi: false,
        singleQuote: true,
        printWidth: 120,
      },
    ],
  },
}