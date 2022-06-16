module.exports = {
  extends: ['eslint-config-ali/typescript/node', 'prettier', 'prettier/@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'no-redeclare': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/unified-signatures': 'off',
    '@typescript-eslint/array-type' : 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
