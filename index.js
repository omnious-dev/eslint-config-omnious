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
     * Best Practices
     */
    // Enforce consistent brace style for all control statements
    curly: ['error', 'multi-or-nest', 'consistent']
    // Require the use of === and !==
    eqeqeq: ['error', 'always', { null: 'ignore' }]

    /*
     * Strict Mode
     */
    // Require or disallow strict mode directives
    strict: 'error'
  }
};