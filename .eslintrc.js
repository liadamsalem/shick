const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

// http://eslint.org/docs/user-guide/configuring
// https://github.com/prettier/prettier#eslint
module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],
  plugins: ['prettier', 'jest'],
  env: {
    jest: true,
    node: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
};
