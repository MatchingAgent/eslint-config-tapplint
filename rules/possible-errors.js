'use strict';

module.exports = {
  rules: {
    // disallow assignment operators in conditional expressions
    'no-cond-assign': 'error',

    // disallow constant expressions in conditions
    'no-constant-condition': 'error',

    // disallow the use of debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in function definitions
    'no-dupe-args': 'error',

    // disallow duplicate keys in object literals
    'no-dupe-keys': 'error',

    // disallow duplicate case labels
    'no-duplicate-case': 'error',

    // disallow empty block statements
    'no-empty': 'error',

    // disallow reassigning exceptions in catch clauses
    'no-ex-assign': 'error',

    // disallow unnecessary parentheses
    'no-extra-parens': ['error', 'all', {
      nestedBinaryExpressions: false,
      ignoreJSX: 'multi-line'
    }],

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // disallow reassigning function declarations
    'no-func-assign': 'error',

    // disallow calling global object properties as functions
    'no-obj-calls': 'error',

    // disallow multiple spaces in regular expressions
    'no-regex-spaces': 'error',

    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // disallow unreachable code after return, throw, continue, and break statements
    'no-unreachable': 'error',

    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // require calls to isNaN() when checking for NaN
    'use-isnan': 'error',

    // enforce comparing typeof expressions against valid strings
    'valid-typeof': 'error'
  }
};
