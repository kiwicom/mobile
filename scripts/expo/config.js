const config = require('./travis');

for (const key in config) {
  const value = config[key];
  // shell envs are weird
  if (
    typeof value === 'undefined' ||
    value === 'undefined' ||
    value === null ||
    value === '' ||
    value === 'false'
  ) {
    throw new Error(`Missing configuration key ${key}`);
  }
}

module.exports = config;
