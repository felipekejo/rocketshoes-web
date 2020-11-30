module.exports = {
  env: {
    es2020: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error', {
      "endOfLine": "auto"
    }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'no-param-reassign': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
