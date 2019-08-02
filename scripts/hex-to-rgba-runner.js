// @flow

/**
 * Run like node scripts/hex-to-rgba-runner.js --hex "#e2e2e2" --opacity 0.34
 * and it will log the rgba to console
 */
require('@babel/register')({
  // Babel by default ignores our workspaces when executed from the nested
  // repository. We need to whitelist our `@kiwicom` scope here.
  ignore: [/node_modules\/(?!@kiwicom)/], // TODO: and possibly others out of `@kiwicom` scope - see `yarn workspaces info`

  // We need to look upwards for the root babel.config.js because these
  // scripts are being executed from the nested workspace.
  rootMode: 'upward',
});

const program = require('commander');

const hexToRgba = require('./hexToRgba');

program
  .option('--hex <hex>')
  .option('--opacity <opacity>')
  .parse(process.argv);

const rgba = hexToRgba(program.hex, program.opacity);
// eslint-disable-next-line no-console
console.log(rgba);
