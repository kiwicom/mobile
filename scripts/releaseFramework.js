// @flow strict

/* eslint-disable no-console */

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

let version = child_process
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim();

(async () => {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    if (githubToken == null) throw new Error('Missing GITHUB_TOKEN');

    /**
     * Create Github release that points to the latest commit
     */
    const release = await (await fetch(
      `https://api.github.com/repos/kiwicom/mobile/releases?access_token=${githubToken}`,
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
      },
    )).json();

    console.log(`GitHub tag ${version} was created.`);
    console.log(`Start building FAT framework...`);

    // Build FAT framework
    child_process.execSync('scripts/buildIOSFramework.sh', {
      stdio: 'inherit',
    });

    // Last line is empty
    const fatFramework = 'ios/build/universal/RNKiwiMobile.framework';
    const frameworkFolder = path.dirname(fatFramework);
    const zippedFatFramework = `RNKiwiMobile.framework.zip`;

    console.log(`FAT framework was correctly zipped.`);

    /**
     * Zip file to its destination to prepare for upload
     */
    child_process.execSync(
      `cd ${frameworkFolder} && zip -r ${zippedFatFramework} .`,
    );

    /**
     * Github API doesn't support sending files with unknown `Content-Lenght`. That means we
     * cannot send a stream.
     */
    const body = fs.readFileSync(
      path.join(frameworkFolder, zippedFatFramework),
    );
    await fetch(
      `https://uploads.github.com/repos/kiwicom/mobile/releases/${
        release.id
      }/assets?name=${zippedFatFramework}&access_token=${githubToken}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/octet-stream',
          'Content-Length': body.length,
        },
        body,
      },
    );

    console.log(`Release ${version} successfully created.`);
  } catch (e) {
    console.log(`releaseFramework failed.`, e.message);
    process.exit(1);
  }
})();
