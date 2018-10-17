module.exports = {
  root: true,
  plugins: ['prettier'],
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/standard', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': 'error',
    'generator-star-spacing': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
