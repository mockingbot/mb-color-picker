module.exports = {
  root: true,
  // parser: 'babel-eslint',
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'react'
  ],
  'rules': {
    'arrow-parens': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': [2, 'never'],
    'no-console': 0
  }
}
