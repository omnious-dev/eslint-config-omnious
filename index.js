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
    // Disallow infinite `for` loop
    'for-loop': 'error',
    // Enforce a return statement is present in getters
    'getter-return': ['error', { allowImplicit: true }],
    // Disallow comparing against -0
    'no-compare-neg-zero': 'error',
    // Disallow assignments in test conditions except in parentheses
    'no-cond-assign': 'error',
    // Disallow the use of console
    'no-console': 'warn',
    // Disallow constant expressions in conditions
    'no-constant-condition': 'error',
    // Disallow control characters in regular expressions
    'no-control-regex': 'error',
    // Disallow the use of debugger
    'no-debugger': 'error',
    // Disallow duplicate arguments in function definitions
    'no-dupe-args': 'error',
    // Disallow duplicate keys in object literals
    'no-dupe-keys': 'error',
    // Disallow duplicate cases in case statements
    'no-duplicate-case': 'error',
    // Disallow empty block statements
    'no-empty': 'error',
    // Disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // Disallow reassigning exceptions in catch clauses
    'no-ex-assign': 'error',
    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',
    // Disallow unreachable code
    'no-unreachable': 'error',
    // TODO: apply options
    // Enforce JSDoc comment style
    'valid-jsdoc': 'error',
    // Enforce comparing `typeof` expressions against valid strings
    'valid-typeof': 'error',

    /*
     * Best Practices
     */
    // Enforce consistent brace style for all control statements
    'curly': ['error', 'multi-or-nest', 'consistent'],
    // Require the use of === and !==
    'eqeqeq': ['error', 'always', { null: 'ignore' }],

    /*
     * Strict Mode
     */
    // Require or disallow strict mode directives
    'strict': 'error',

    /*
     * Variables
     */
    // Disallow `catch` clause parameters from shadowing variables
    'no-catch-shadow': 'error',
    // Disallow deleting variables
    'no-delete-var': 'error',
    // Disallow labels that share a name with a variable
    'no-label-var': 'error',
    // Disallow the use of undeclared variables
    'no-undef': 'error',
    // Disallow initializing variables to `undefined`
    'no-undef-init': 'error',
    // Disallow the use of `undefined` as an identifier
    'no-undefined': 'error',

    /*
     * Node.js and CommonJS
     */
    // Disallow `new` operators with calls to `require`
    'no-new-require': 'error',
    // Disallow string concatenation with `__dirname` and `__filename`
    'no-path-concat': 'error',

    /*
     * Stylistic Issues
     */
    // Require semicolons instead of ASI
    'semi': ['error', 'always'],

    /*
     * ECMAScript 6
     */
    // Require let or const instead of var
    'no-var': 'error'
  }
};
