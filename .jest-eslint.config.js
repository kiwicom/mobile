// @flow

module.exports = {
  displayName: 'lint',
  runner: '@kiwicom/eslint-config/runner',
  testMatch: [
    '<rootDir>/app/**/*.js',
    '<rootDir>/scripts/**/*.js',
    '<rootDir>/packages/**/*.js',
  ],
};
