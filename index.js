'use strict';

module.exports = {
  extends: [
    './rules/possible-errors.js',
    './rules/best-practices.js',
    './rules/strict-mode.js',
    './rules/variables.js',
    './rules/nodejs-and-commonjs.js',
    './rules/stylistic-issues.js',
    './rules/react/index.js'
  ],
  env: {
    es6: true,
    node: true,
    commonjs: true,
    browser: true
  },
  parser: 'babel-eslint',
  plugins: [
    'import',
    'react'
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
