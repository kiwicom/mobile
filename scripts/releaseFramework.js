/**
 * Script for releasing a new version of the framework
 * and putting it on Github as a release
 * 
 * You need to have GITHUB_TOKEN present in your environment with correct
 * write/read permissions (public_repo)
 */
const fs = require('fs');
const child_process = require('child_process');
const fetch = require('node-fetch');
const path = require('path');

let version = child_process.execSync('git rev-parse --short HEAD').toString().trim();

(async () => {
  /**
   * Create Github release that points to the latest commit
   */
  const release = await (
    await fetch(
      `https://api.github.com/repos/kiwicom/mobile/releases?access_token=${process.env.GITHUB_TOKEN}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tag_name: version,
          target_commitish: 'master',
          name: version,
          draft: false,
          prerelease: false,
        }),
      }
    )
  ).json();

  // Build FAT framework
  // @todo make this script return path instead of opening new window
  // const fatFramework = exec('scripts/buildIOSFramework.sh');
  const fatFramework = path.resolve(__dirname, '../LICENSE');

  /**
   * Github API doesn't support sending files with unknown `Content-Lenght`. That means we
   * cannot send a stream.
   */
  const body = fs.readFileSync(fatFramework);
  await fetch(
    `https://uploads.github.com/repos/kiwicom/mobile/releases/${release.id}/assets?name=RNKiwiMobile.framework&access_token=${process.env.GITHUB_TOKEN}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/octet-stream',
        'Content-Length': body.length,
      },
      body
    }
  );
})();