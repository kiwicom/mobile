#!/usr/bin/env node

const spawn = require('./spawn');
const config = require('./config');
const prePublish = require('./pre-publish');
const postPublish = require('./post-publish');

spawn(
  'yarn',
  ['exp', 'login', '-u', config.expUsername, '-p', config.expPassword],
  loginError => {
    if (loginError) {
      throw new Error(loginError);
    } else {
      // prepares app.json for Exp
      prePublish();
    }

    spawn('yarn', ['exp', 'publish'], publishError => {
      if (publishError) {
        throw new Error(publishError);
      } else if (config.githubPullRequestId > 0) {
        // add comment to the GitHub PR
        postPublish();
      }
    });
  },
);
