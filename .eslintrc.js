/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',

  /**
   * @type {import('@typescript-eslint/parser').ParserOptions}
   */
  parserOptions: {
    project: './tsconfig.json',
  },

  rules: {},
};
