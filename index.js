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
    // TODO: Apply more options
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
    'camelcase': 'off',
    // Enforce capitalization of the first letter of a comment
    'capitalized-comments': 'error',
    // TODO: Require trailing commas
    'comma-dangle': 'off',
    // Enforce consistent spacing before and after commas
    'comma-spacing': ['error', { before: false, after: true }],
    // Enforce consistent comma style
    'comma-style': 'error',
    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': 'error',
    // Require newline at the end of files
    'eol-last': ['error', 'always'],
    // Disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],
    // Enforce minimum and maximum identifier lengths
    'id-length': ['error', { max: 64 }],
    // Enforce consistent indentation
    // TODO: Apply more options
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'ArrayExpression': 1,
      'ObjectExpression': 1,
      'ImportDeclaration': 1
    }],
    // Enforce consistent spacing between keys and values in object literals
    'key-spacing': ['error', {
      // Disallow spaces between the key and the colon
      beforeColon: false,
      // Require at least one space between the colon and the value
      afterColon: true,
      // Enforce exactly one space before or after colons
      mode: 'strict'
    }],
    // Enforce position of line comments
    'line-comment-position': ['error', { position: 'above' }],
    // Enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],
    // Enforce a maximum depth that blocks can be nested
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
    // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],
    // Enforce placing object properties on separate lines
    'object-property-newline': ['error', {
      // Allow all keys and values to be on the same line
      allowMultiplePropertiesPerLine: true
    }],
    // Allow just one var statement per function
    'one-var': ['error', 'never'],
    // Require a newline around variable declaration
    'one-var-declaration-per-line': ['error', 'always'],
    // Require assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],
    // Enforce operators to be placed before or after line breaks
    'operator-linebreak': 'off',
    // Disallow padding within blocks
    'padded-blocks': ['error', 'never'],
    // Require quotes around object literal property names
    'quote-props': ['error', 'consistent'],
    // Enforce the consistent use of either backticks, double, or single quotes
    'quotes': ['error', 'single', {
      // Allow to use other quotes when the string contains a quote
      avoidEscape: true
    }],
    // Require JSDoc comments
    'require-jsdoc': 'off',
    // Require semicolons instead of ASI
    'semi': ['error', 'always'],
    // Enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],
    // Enforce location of semicolons
    'semi-style': ['error', 'last'],
    // Enfore consistent spacing before blocks
    'space-before-blocks': 'error',
    // Enforce consistent spacing before `function` definition
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    // Enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],
    // Require spacing around infix operators
    'space-infix-ops': 'error',
    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    // Enforce consistent spacing after or in a comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+', '*'],
        markers: ['=', '!']
      },
      block: {
        exceptions: ['-', '+', '*'],
        markers: ['=', '!'],
        balanced: true
      }
    }],
    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', { after: true, before: false }],
    // Disallow spacing between template tags and their literals
    'template-tag-spacing': 'error',

    /*
     * ECMAScript 6
     */
    // Require let or const instead of var
    'no-var': 'error'
  }
};
