'use strict';

module.exports = {
  rules: {
    // enforce consistent brace style for all control statements
    curly: ['error', 'all'],

    // equire the use of === and !== ignore null
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // disallow the use of eval()
    'no-eval': 'error',

    // disallow extending native types
    'no-extend-native': 'error',

    // disallow unnecessary calls to .bind()
    'no-extra-bind': 'error',

    // disallow unnecessary labels
    'no-extra-label': 'error',

    // disallow multiple spaces
    'no-multi-spaces': 'error',

    // disallow new operators with the Function object
    'no-new-func': 'error',

    // disallow new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 'error',

    // disallow reassigning function parameters
    'no-param-reassign': 'error',

    // disallow the use of the __proto__ property
    'no-proto': 'error',

    // disallow variable redeclaration
    'no-redeclare': 'error',

    // disallow comma operators
    'no-sequences': 'error',

    // disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'error',

    // disallow unused labels
    'no-unused-labels': 'error',

    // disallow void operators
    'no-void': 'error',

    // disallow with statements
    'no-with': 'error'
  }
};
