'use strict';

module.exports = {
  extends: [
    './rules/possible-errors.js',
    './rules/best-practices.js',
    './rules/strict-mode.js',
    './rules/variables.js',
    './rules/nodejs-and-commonjs.js',
    './rules/stylistic-issues.js',
  ],
  env: {
    es6: true,
    node: true,
    commonjs: true,
    browser: true,
  },
  plugins: [],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'script',
  },
};
