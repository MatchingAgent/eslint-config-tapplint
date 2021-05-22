'use strict';

module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/ecmascript6.js',
    './rules/nodejs-and-commonjs.js',
    './rules/possible-errors.js',
    './rules/strict-mode.js',
    './rules/stylistic-issues.js',
    './rules/variables.js',
  ],
  env: {
    es6: true,
    node: true,
    commonjs: true,
    browser: true,
  },
  plugins: [],
  parserOptions: {
    // ECMAScript 2020 Specification
    ecmaVersion: 2020,
    sourceType: 'script',
  },
};
