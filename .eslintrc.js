module.exports = {
  parser : 'babel-eslint',
  extends: ['semistandard', 'standard-react', 'react-app', 'plugin:mdx/recommended'],
  rules  : {
    'arrow-parens'                   : ['error', 'always'],
    'comma-dangle'                   : ['error', 'always-multiline'],
    'key-spacing'                    : ['error', { align: 'colon' }],
    'no-multi-spaces'                : 'off',
    'no-multiple-empty-lines'        : ['error', { max: 2 }],
    'react/jsx-props-no-multi-spaces': 'off',
  },
};
