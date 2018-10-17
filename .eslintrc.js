module.exports = {
  root: true,
  plugins: ['prettier'],
  env: {
    node: true
  },
  extends: ['@vue/standard', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
    'generator-star-spacing': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
