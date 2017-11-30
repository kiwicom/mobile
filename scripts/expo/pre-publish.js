const utils = require('./utils');
const config = require('./config');

module.exports = function preDeploy() {
  const pkg = utils.readPackageJSON();
  const slug = utils.getExpPublishName('code-review', config.githubSourceBranch);
  const modified = Object.assign({}, pkg, {
    expo: Object.assign(pkg.expo, {
      slug: slug,
      name: slug,
      privacy: 'unlisted',
    }),
  });

  console.log(modified);
  utils.writePackageJSON(modified);
};
