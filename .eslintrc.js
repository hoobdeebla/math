module.exports = {
  parser: 'babel-eslint',
  extends: ['semistandard', 'standard-react', 'react-app', 'plugin:mdx/recommended'],
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': ['error', {'max': 3}],
    'react/prop-types': 'off',
  }
}
