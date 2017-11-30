const fs = require('fs');

function getExpoConfig() {
  return JSON.parse(fs.readFileSync('./app.json'));
}

function saveExpoConfig(content) {
  fs.writeFileSync('./app.json', JSON.stringify(content, null, 2));
}

module.exports = {
  getExpoConfig,
  saveExpoConfig,
};
