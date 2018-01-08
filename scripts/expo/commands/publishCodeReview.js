const fetch = require('node-fetch');

const spawn = require('../spawn');
const utils = require('../utils');
const env = require('../environment');

function preparePublishName() {
  const branchName = env.CI_BRANCH;
  return `code-review-${branchName}`.replace(/[^a-zA-Z0-9\\-]/, '-');
}

async function commentOnGitHub(buildName, githubPullRequestId) {
  const expUrl = `exp://exp.host/@${env.EXP_USERNAME}/${buildName}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${expUrl}`;
  const issueUrl = `https://${env.GITHUB_USERNAME}:${env.GITHUB_TOKEN}@api.github.com/repos/${env.CI_PROJECT_REPONAME}/issues/${githubPullRequestId}/comments`;

  const body = `
  Please test these changes in [Expo](https://docs.expo.io/versions/latest/introduction/installation.html#mobile-client-expo-for-ios-and-android) after build has finished:

  ![QR Code](${qrUrl})

  \`${expUrl}\`
  `;

  const comments = await (await fetch(issueUrl)).json();
  if (!comments.find(comment => comment.body === body)) {
    // create comment with the QR code because it doesn't exist yet
    await fetch(issueUrl, {
      method: 'POST',
      headers: { 'User-Agent': 'ci' },
      body: JSON.stringify({ body }),
    });
    console.log('GitHub comment created.');
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

  const githubPullRequestId = env.CI_PULL_REQUEST_ID;
  spawn('yarn', ['exp', 'publish'], async publishError => {
    if (publishError) {
      throw new Error(publishError);
    } else if (githubPullRequestId > 0) {
      // comments only when the PR is opened (but publish always)
      console.log(`Trying to comment PR #${githubPullRequestId}...`);
      await commentOnGitHub(slug, githubPullRequestId);
    }
  });
};
