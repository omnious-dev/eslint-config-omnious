'use strict';

module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    node: true,
    es6: true
  },
  rules: {
    /*
     * Possible Errors
     */
    // Disallow the use of console
    'no-console': 'warn',
    'valid-jsdoc': 'error',

    /*
     * Best Practices
     */
    // Enforce consistent brace style for all control statements
    'curly': ['error', 'multi-or-nest', 'consistent'],
    // Require the use of === and !==
    'eqeqeq': ['error', 'always', { null: 'ignore' }],

    /*
     * ECMAScript 6
     */
    // Require let or const instead of var
    'no-var': 'error',

    /*
     * Strict Mode
     */
    // Require or disallow strict mode directives
    'strict': 'error'
  }
};
