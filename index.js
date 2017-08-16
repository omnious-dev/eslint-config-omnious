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
    'for-direction': 'error',
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
    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': 'error',
    // Enforce consistent spacing inside single-line blocks
    'block-spacing': 'error',
    // Enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // TODO: Enforce camelcase naming convention
    // 'camelcase': 'error',
    // Enforce capitalization of the first letter of a comment
    'capitalized-comments': 'error',
    // TODO: Require trailing commas
    // 'comma-dangle': 'error',
    // Enforce consistent spacing before and after commas
    'comma-spacing': ['error', { before: false, after: true }],
    // Enforce consistent comma style
    'comma-style': 'error',
    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': 'error',
    // Enforce position of line comments
    'line-comment-position': ['error', { position: 'above' }],
    'linebreak-style': ['error', 'unix'],
    'max-depth': ['warn', 4],
    // TODO: Enforce a maximum line length
    // 'max-len': ['error', 100],
    // Require constructor names to begin with a capital letter
    'new-cap': ['error', { newIsCap: true }],
    // Require parentheses when invoking a constructor with no arguments
    'new-parens': 'error',
    // Require a newline after each call in a method chain
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    // Disallow inline comments after code
    // NOTE: Replacement of `line-comment-position`
    'no-inline-comments': 'error',
    // Disallow if statements as the only statement in else blocks
    'no-lonely-if': 'error',
    // Disallow mixed binary operators
    // TODO: Review options
    'no-mixed-operators': 'error',
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // Disallow use of chained assignment expressions
    'no-multi-assign': 'error',
    // Disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',
    // Require semicolons instead of ASI
    'semi': ['error', 'always'],

    /*
     * ECMAScript 6
     */
    // Require let or const instead of var
    'no-var': 'error'
  }
};
