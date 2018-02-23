// @flow

import { NativeModules } from 'react-native';

import Translate from '../Translate';

describe('Translate', () => {
  it('should call NativeModules.RNTranslationManager.translate with the key paramter', () => {
    const string = Translate('test');
    expect(string).toEqual('test');
    expect(NativeModules.RNTranslationManager.translate).toBeCalledWith('test');
  });
});
