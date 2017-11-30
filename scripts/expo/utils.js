const fs = require('fs');

function getExpPublishName(packageName, branchName) {
  return `${packageName}-${branchName}`.replace(/[^a-zA-Z0-9\\-]/, '-');
}

function readPackageJSON() {
  return JSON.parse(fs.readFileSync('./app.json'));
}

function writePackageJSON(content) {
  fs.writeFileSync('./app.json', JSON.stringify(content, null, 2));
}

module.exports = {
  getExpPublishName,
  readPackageJSON,
  writePackageJSON,
};
