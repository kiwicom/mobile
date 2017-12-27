// @flow

import fs from 'fs';
import path from 'path';
import yargs from 'yargs';
import {
  Runner as CodegenRunner,
  ConsoleReporter,
  JSModuleParser as RelayJSModuleParser,
  FileWriter as RelayFileWriter,
  IRTransforms as RelayIRTransforms,
} from 'relay-compiler';
import { buildASTSchema, parse, type GraphQLSchema } from 'graphql';
import WatchmanClient from 'relay-compiler/lib/GraphQLWatchmanClient';

const {
  codegenTransforms,
  fragmentTransforms,
  printTransforms,
  queryTransforms,
  schemaExtensions,
} = RelayIRTransforms;

const formatGeneratedModule = ({
  documentType,
  docText,
  concreteText,
  flowText,
  hash,
  relayRuntimeModule,
}) => {
  const docTextComment = docText ? '/*\n' + docText.trim() + '\n*/\n' : '';
  const hashText = hash ? `\n * ${hash}` : '';
  return `/**
 * ${'@'}flow${hashText}
 */

/* eslint-disable */

import type { ${documentType} } from '${relayRuntimeModule}';
${flowText || ''}

${docTextComment}
const node: ${documentType} = ${concreteText};

module.exports = node;
`;
};

const buildWatchExpression = (options: {
  include: Array<string>,
  exclude: Array<string>,
}) => {
  return [
    'allof',
    ['type', 'f'], // regular file
    ['suffix', 'js'],
    [
      'anyof',
      ...options.include.map(include => ['match', include, 'wholename']),
    ],
    ...options.exclude.map(exclude => ['not', ['match', exclude, 'wholename']]),
  ];
};

const getFilepathsFromGlob = (
  baseDir,
  options: {
    include: Array<string>,
    exclude: Array<string>,
  },
): Array<string> => {
  const { include, exclude } = options;
  const patterns = include.map(inc => `${inc}/*.+(js)`);

  const glob = require('fast-glob');
  return glob.sync(patterns, {
    cwd: baseDir,
    bashNative: [],
    onlyFiles: true,
    ignore: exclude,
  });
};

const run = async (options: {
  schema: string,
  src: string,
  include: Array<string>,
  exclude: Array<string>,
  watch?: ?boolean,
  validate: boolean,
}) => {
  const schemaPath = path.resolve(process.cwd(), options.schema);
  if (!fs.existsSync(schemaPath)) {
    throw new Error(`--schema path does not exist: ${schemaPath}.`);
  }
  const srcDir = path.resolve(process.cwd(), options.src);
  if (!fs.existsSync(srcDir)) {
    throw new Error(`--source path does not exist: ${srcDir}.`);
  }
  if (!hasWatchmanRootFile(srcDir)) {
    throw new Error(
      `
--watch requires that the src directory have a valid watchman "root" (.git/ folder).

Ensure that it exists in ${srcDir} or its parents.
    `.trim(),
    );
  }

  const reporter = new ConsoleReporter({ verbose: true });
  const useWatchman = await WatchmanClient.isAvailable();

  const parserConfigs = {
    default: {
      baseDir: srcDir,
      getFileFilter: RelayJSModuleParser.getFileFilter,
      getParser: RelayJSModuleParser.getParser,
      getSchema: () => getSchema(schemaPath),
      watchmanExpression: useWatchman ? buildWatchExpression(options) : null,
      filepaths: useWatchman ? null : getFilepathsFromGlob(srcDir, options),
    },
  };
  const writerConfigs = {
    default: {
      getWriter: getRelayFileWriter(srcDir),
      isGeneratedFile: (filePath: string) =>
        filePath.endsWith('.js') && filePath.includes('__generated__'),
      parser: 'default',
    },
  };
  const codegenRunner = new CodegenRunner({
    reporter,
    parserConfigs,
    writerConfigs,
    onlyValidate: options.validate,
  });
  if (!options.validate && !options.watch) {
    // eslint-disable-next-line no-console
    console.log('HINT: pass --watch to keep watching for changes.');
  }
  const result = options.watch
    ? await codegenRunner.watchAll()
    : await codegenRunner.compileAll();

  if (result === 'ERROR') {
    process.exit(100);
  }
  if (options.validate && result !== 'NO_CHANGES') {
    process.exit(101);
  }
};

const getRelayFileWriter = (baseDir: string) => {
  return (onlyValidate, schema, documents, baseDocuments, reporter) => {
    return new RelayFileWriter({
      config: {
        baseDir,
        compilerTransforms: {
          codegenTransforms,
          fragmentTransforms,
          printTransforms,
          queryTransforms,
        },
        customScalars: {},
        formatModule: formatGeneratedModule,
        inputFieldWhiteListForFlow: [],
        schemaExtensions,
        useHaste: true,
        // persistQuery, // TODO: persist if '--persist' option enabled (see: https://github.com/facebook/relay/pull/1846)
      },
      onlyValidate,
      schema,
      baseDocuments,
      documents,
      reporter,
    });
  };
};

const getSchema = (schemaPath: string): GraphQLSchema => {
  try {
    let source = fs.readFileSync(schemaPath, 'utf8');
    source = `
  directive @include(if: Boolean) on FRAGMENT | FIELD
  directive @skip(if: Boolean) on FRAGMENT | FIELD

  ${source}
  `;
    return buildASTSchema(parse(source));
  } catch (error) {
    throw new Error(
      `
Error loading schema. Expected the schema to be a .graphql file, describing your GraphQL server's API. Error detail:

${error.stack}
    `.trim(),
    );
  }
};

// Ensure that a watchman "root" file exists in the given directory
// or a parent so that it can be watched
const hasWatchmanRootFile = testPath => {
  while (path.dirname(testPath) !== testPath) {
    if (fs.existsSync(path.join(testPath, '.git'))) {
      return true;
    }
    testPath = path.dirname(testPath);
  }
  return false;
};

// Collect args
const argv = yargs
  .usage(
    'Create Relay generated files\n\n' +
      '$0 --schema <path> --src <path> [--watch]',
  )
  .options({
    schema: {
      describe: 'Path to schema.graphql.',
      demandOption: true,
      type: 'string',
    },
    src: {
      describe: 'Root directory of application code',
      demandOption: true,
      type: 'string',
    },
    include: {
      array: true,
      default: ['**'],
      describe: 'Directories to include under src',
      type: 'string',
    },
    exclude: {
      array: true,
      default: [
        '**/node_modules/**',
        '**/__mocks__/**',
        '**/__tests__/**',
        '**/__generated__/**',
      ],
      describe: 'Directories to ignore under src',
      type: 'string',
    },
    watch: {
      describe: 'If specified, watches files and regenerates on changes',
      type: 'boolean',
    },
    validate: {
      describe:
        'Looks for pending changes and exits with non-zero code instead of ' +
        'writing to disk',
      type: 'boolean',
      default: false,
    },
  })
  .help().argv;

run(argv).catch(error => {
  console.error(String(error.stack || error));
  process.exit(1);
});
