// @flow

/*::
 type API = {|
  +cache: boolean => void,
|};
*/

module.exports = (api /* :API */) => {
  api.cache(false);

  const presets = [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ];
  const plugins = [
    '@babel/plugin-transform-runtime',
    ['relay', { schema: 'app/schema.graphql' }],
    '@babel/plugin-transform-named-capturing-groups-regex',
  ];

  const exclude = ['**/*.png', '**/*.gif', '**/*.jpg'];

  return {
    presets,
    plugins,
    exclude,
  };
};
