// @flow

const inquirer = require('inquirer');
const child_process = require('child_process');

const exec = (command, options) =>
  child_process.execSync(command, {
    stdio: 'inherit',
    ...options,
  });

async function getAppName() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'app_name',
      message: 'What app would you like to update?',
      choices: ['mobile-ios', 'mobile-android'],
    },
  ]);
}

async function ifAddDescription() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'with_description',
      message: 'Do you want to specify code push description?',
      choices: ['Yes', 'No'],
    },
  ]);
}

async function addDescription() {
  const withDescription = await ifAddDescription();

  if (withDescription.with_description === 'Yes') {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'description',
        message: 'Type a description:',
      },
    ]);
  }
}

async function ifAddVersion() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'with_version',
      message: 'Do you want to specify code push version?',
      choices: ['Yes', 'No'],
    },
  ]);
}

async function addVersion() {
  const withVersion = await ifAddVersion();

  if (withVersion.with_version === 'Yes') {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'version',
        message: 'Type a version:',
      },
    ]);
  }
}

async function processCommand() {
  const appName = await getAppName();
  const description = await addDescription();
  const version = await addVersion();

  let args = `-a Kiwicom/${appName.app_name} `;

  if (description !== undefined) {
    args = args.concat(`--description ${'description.description'} `);
  }

  if (version !== undefined) {
    args = args.concat(`-t ${version.version}`);
  }

  try {
    exec(
      `appcenter codepush release-react ${args} --entry-file ./app/native.js -d Staging`,
    );
  } catch (err) {
    return err;
  }
}

processCommand();
