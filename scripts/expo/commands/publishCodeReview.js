const fetch = require('node-fetch');

const spawn = require('../spawn');
const utils = require('../utils');

/**
 * TRAVIS_PULL_REQUEST_BRANCH
 *   - if the current job is a pull request, the name of the branch from which the PR originated.
 *   - if the current job is a push build, this variable is empty ("").
 *
 * TRAVIS_BRANCH
 *   - for push builds, or builds not triggered by a pull request, this is the name of the branch.
 *   - for builds triggered by a pull request this is the name of the branch targeted by the pull request.
 *   - for builds triggered by a tag, this is the same as the name of the tag (TRAVIS_TAG).
 *
 * @see https://docs.travis-ci.com/user/environment-variables/
 */
function preparePublishName() {
  const branchName =
    process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH;
  return `code-review-${branchName}`.replace(/[^a-zA-Z0-9\\-]/, '-');
}

module.exports = function publishCodeReview() {
  const config = utils.getExpoConfig();
  const slug = preparePublishName();
  utils.saveExpoConfig({
    expo: Object.assign(config.expo, {
      slug: slug,
      name: slug,
      privacy: 'unlisted',
      packagerOpts: {
        nonPersistent: true,
      },
    }),
  });

  const githubPullRequestId = process.env.TRAVIS_PULL_REQUEST;
  spawn('yarn', ['exp', 'publish'], publishError => {
    if (publishError) {
      throw new Error(publishError);
    } else if (githubPullRequestId > 0) {
      // comments only when the PR is opened (but publish always)
      commentOnGitHub(slug, githubPullRequestId);
    }
  });
};

function commentOnGitHub(buildName, githubPullRequestId) {
  const expUsername = process.env.EXP_USERNAME;

  const githubUsername = process.env.GITHUB_USERNAME;
  const githubToken = process.env.GITHUB_TOKEN;
  const githubRepo = process.env.TRAVIS_REPO_SLUG;

  const expUrl = `exp://exp.host/@${expUsername}/${buildName}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${expUrl}`;
  const issueUrl = `https://${githubUsername}:${githubToken}@api.github.com/repos/${githubRepo}/issues/${githubPullRequestId}/comments`;

  const body = `
  Please test these changes in [Expo](https://docs.expo.io/versions/latest/introduction/installation.html#mobile-client-expo-for-ios-and-android):

  ![QR Code](${qrUrl})
  `;

  fetch(issueUrl)
    .then(res => res.json())
    .then(json => {
      let alreadyCommented = false;

      json.map(comment => {
        if (comment.body === body) {
          alreadyCommented = true;
        }
      });

      if (!alreadyCommented) {
        fetch(issueUrl, {
          method: 'POST',
          headers: { 'User-Agent': 'ci' },
          body: JSON.stringify({ body }),
        })
          .then(res => res.json())
          .then(json => console.log('GitHub comment created.'));
      }
    });
}
