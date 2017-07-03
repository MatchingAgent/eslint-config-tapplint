'use strict';

module.exports = {
  rules: {
    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': 'error',

    // disallow reassigning class members
    'no-class-assign': 'error',

    // disallow reassigning const variables
    'no-const-assign': 'error',

    // disallow duplicate class members
    'no-dupe-class-members': 'error',

    // disallow duplicate module imports
    'no-duplicate-imports': 'error',

    // disallow new operators with the Symbol object
    'no-new-symbol': 'error',

    // disallow this/super before calling super() in constructors
    'no-this-before-super': 'error',

    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'error',

    // require let or const instead of var
    'no-var': 'error',

    // require rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // require spread operators instead of .apply()
    'prefer-spread': 'error',

    // require generator functions to contain yield
    'require-yield': 'error',

    // require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': 'error'
  }
};
