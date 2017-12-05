const fetch = require('node-fetch');

const spawn = require('../spawn');
const utils = require('../utils');
const env = require('../environment');

/**
 * env.TRAVIS_PULL_REQUEST_BRANCH
 *   - if the current job is a pull request, the name of the branch from which the PR originated.
 *   - if the current job is a push build, this variable is empty ("").
 *
 * env.TRAVIS_BRANCH
 *   - for push builds, or builds not triggered by a pull request, this is the name of the branch.
 *   - for builds triggered by a pull request this is the name of the branch targeted by the pull request.
 *   - for builds triggered by a tag, this is the same as the name of the tag (TRAVIS_TAG).
 *
 * @see https://docs.travis-ci.com/user/environment-variables/
 */
function preparePublishName() {
  const branchName = env.TRAVIS_PULL_REQUEST_BRANCH || env.TRAVIS_BRANCH;
  return `code-review-${branchName}`.replace(/[^a-zA-Z0-9\\-]/, '-');
}

async function commentOnGitHub(buildName, githubPullRequestId) {
  const expUrl = `exp://exp.host/@${env.EXP_USERNAME}/${buildName}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${expUrl}`;
  const issueUrl = `https://${env.GITHUB_USERNAME}:${env.GITHUB_TOKEN}@api.github.com/repos/${env.TRAVIS_REPO_SLUG}/issues/${githubPullRequestId}/comments`;

  const body = `
  Please test these changes in [Expo](https://docs.expo.io/versions/latest/introduction/installation.html#mobile-client-expo-for-ios-and-android) after build has finished:

  ![QR Code](${qrUrl})
  `;

  const comments = await (await fetch(issueUrl)).json();
  if (!comments.find(comment => comment.body === body)) {
    // create comment with the QR code because it doesn't exist yet
    await fetch(issueUrl, {
      method: 'POST',
      headers: { 'User-Agent': 'ci' },
      body: JSON.stringify({ body }),
    });
    console.log('GitHub comment created.')
  }
}

module.exports = () => {
  const config = utils.getExpoConfig();
  const slug = preparePublishName();
  utils.saveExpoConfig({
    expo: Object.assign(config.expo, {
      slug: slug,
      name: slug,
      privacy: 'unlisted',
      packagerOpts: {
        nonPersistent: true, // this is important in CI environment, see: https://forums.expo.io/t/what-do-you-use-for-testing-and-ci-for-expo-rn/850/3
      },
    }),
  });

  const githubPullRequestId = env.TRAVIS_PULL_REQUEST;
  spawn('yarn', ['exp', 'publish'], async publishError => {
    if (publishError) {
      throw new Error(publishError);
    } else if (githubPullRequestId > 0) {
      // comments only when the PR is opened (but publish always)
      await commentOnGitHub(slug, githubPullRequestId);
    }
  });
};
