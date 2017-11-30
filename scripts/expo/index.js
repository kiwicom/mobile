#!/usr/bin/env node

const spawn = require('./spawn');

const publishCodeReview = require('./commands/publishCodeReview');

const expUsername = process.env.EXP_USERNAME;
const expPassword = process.env.EXP_PASSWORD;

spawn(
  'yarn',
  ['exp', 'login', '-u', expUsername, '-p', expPassword],
  loginError => {
    if (loginError) {
      throw new Error(loginError);
    } else {
      publishCodeReview();
    }
  },
);
