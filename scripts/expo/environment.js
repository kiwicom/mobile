module.exports = {
  // Expo
  EXP_USERNAME: process.env.EXP_USERNAME,
  EXP_PASSWORD: process.env.EXP_PASSWORD,
  // GitHub
  GITHUB_USERNAME: process.env.GITHUB_USERNAME,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  // Continuous Integration:
  // see: https://circleci.com/docs/2.0/env-vars/
  CI_BRANCH: process.env.CIRCLE_BRANCH,
  CI_PULL_REQUEST_ID: (process.env.CIRCLE_PULL_REQUEST || '').split('/').slice(-1)[0] || 0,
  CI_PROJECT_REPONAME: process.env.CIRCLE_PROJECT_USERNAME + '/' + process.env.CIRCLE_PROJECT_REPONAME
};
