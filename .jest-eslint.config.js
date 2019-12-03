// @flow

module.exports = {
  displayName: 'lint',
  runner: '@adeira/eslint-config/runner',
  testMatch: [
    '<rootDir>/app/**/*.js',
    '<rootDir>/scripts/**/*.js',
    '<rootDir>/packages/**/*.js',
  ],
};
