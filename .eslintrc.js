module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    node: true,
    browser: true,
  },
  globals: {
    REACT_APP_ENV: true,
  },
  rules: {
    complexity: 'off',
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off'
  },
}
