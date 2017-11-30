#!/usr/bin/env node

if (process.env.TRAVIS !== 'true') {
  console.error('This script can be executed only in Travis CI environment.');
  process.exit(1);
}

const spawn = require('./spawn');
const env = require('./environment');
const publishCodeReview = require('./commands/publishCodeReview');

spawn(
  'yarn',
  [
    'exp',
    'login',
    '--username', env.EXP_USERNAME,
    '--password', env.EXP_PASSWORD,
  ],
  loginError => {
    if (loginError) {
      throw new Error(loginError);
    } else {
      publishCodeReview();
    }
  },
);
