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
    'babel-plugin-idx',
    ['relay', { schema: 'app/schema.graphql' }],
  ];

  const exclude = ['**/*.png', '**/*.gif', '**/*.jpg'];

  return {
    presets,
    plugins,
    exclude,
  };
};
