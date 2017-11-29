const fetch = require('node-fetch');

const utils = require('./utils');
const config = require('./config');

module.exports = function postDeploy() {
  console.error(utils.readPackageJSON());

  const expUrl = `exp://exp.host/@${config.expUsername}/${
    utils.readPackageJSON().expo.slug
  }`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${
    expUrl
  }`;
  const issueUrl = `https://${config.githubUsername}:${
    config.githubToken
  }@api.github.com/repos/${config.githubOrg}/${config.githubRepo}/issues/${
    config.githubPullRequestId
  }/comments`;

  console.log('Exponent URL', expUrl);
  console.log('GitHub Issue URL', issueUrl);
  console.log('QR Code URL ', qrUrl);

  const body = `
  Please test these changes in [Expo](https://docs.expo.io/versions/latest/introduction/installation.html#mobile-client-expo-for-ios-and-android):

  ![QR Code](${qrUrl})
  `;

  fetch(issueUrl)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      json.map(comment => {
        if (comment.body === body) {
          console.error('Updating comment with URL ' + comment.url);
          fetch(
            `https://${config.githubUsername}:${
              config.githubToken
            }@api.github.com/repos/${config.githubOrg}/${
              config.githubRepo
            }/issues/comments/${comment.id}`,
            {
              method: 'PATCH',
              headers: { 'User-Agent': 'ci' },
              body: JSON.stringify({ body }),
            },
          )
            .then(res => res.json())
            .then(json => console.log(json));
        } else {
          fetch(issueUrl, {
            method: 'POST',
            headers: { 'User-Agent': 'ci' },
            body: JSON.stringify({ body }),
          })
            .then(res => res.json())
            .then(json => console.log(json));
        }
      });
    });
};
