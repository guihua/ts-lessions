module.exports = {
  extends: ['eslint-config-ali/typescript/node', 'prettier', 'prettier/@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'no-inferrable-types': 'off',
    'no-redeclare': 'off',
    'no-param-reassign': 'off',
  },
};
