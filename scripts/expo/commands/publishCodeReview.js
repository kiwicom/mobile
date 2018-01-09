const spawn = require('../spawn');
const utils = require('../utils');
const env = require('../environment');

function preparePublishName() {
  const branchName = env.CI_BRANCH;
  return `code-review-${branchName}`.replace(/[^a-zA-Z0-9\\-]/, '-');
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

  spawn('yarn', ['exp', 'publish'], async publishError => {
    if (publishError) {
      throw new Error(publishError);
    }
  });
};
