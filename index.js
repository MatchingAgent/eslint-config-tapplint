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
  envs: [
    'es6',
    'node',
    'commonjs',
    'browser'
  ],
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
