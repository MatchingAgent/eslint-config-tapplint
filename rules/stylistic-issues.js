'use strict';

module.exports = {
  rules: {
    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // enforce consistent spacing inside single-line blocks
    'block-spacing': 'error',

    // enforce consistent brace style for blocks
    'brace-style': 'error',

    // require or disallow trailing commas
    'comma-dangle': ['error', 'only-multiline'],

    // enforce consistent spacing before and after commas
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],

    // enforce consistent comma style
    'comma-style': 'error',

    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': 'error',

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],

    // enforce consistent indentation
    indent: ['error', 2, { SwitchCase: 1 }],

    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],

    // enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],

    // enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],

    // enforce a maximum depth that blocks can be nested
    'max-depth': 'error',

    // require parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // disallow Array constructors
    'no-array-constructor': 'error',

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow multiple empty lines
    'no-multiple-empty-lines': 'error',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow Object constructors
    'no-new-object': 'error',

    // disallow all tabs
    'no-tabs': 'error',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'error',

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],

    // require quotes around object literal property names
    'quote-props': ['error', 'as-needed'],

    // enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single', {
      allowTemplateLiterals: true
    }],

    // enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', {
      before: false,
      after: true
    }],

    // require or disallow semicolons instead of ASI
    semi: ['error', 'always'],

    // enforce consistent spacing before blocks
    'space-before-blocks': 'error',

    // enforce consistent spacing inside parentheses
    'space-in-parens': 'error'
  }
};
