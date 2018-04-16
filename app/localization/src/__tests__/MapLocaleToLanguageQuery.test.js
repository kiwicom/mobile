// @flow

import MapLocaleToLanguageQuery from '../MapLocaleToLanguageQuery';

describe('MapLocaleToLanguageQuery', () => {
  it('matches es-ES => es', () => {
    expect(MapLocaleToLanguageQuery('es-ES')).toEqual('es');
  });

  it('matches nb-NO => no', () => {
    expect(MapLocaleToLanguageQuery('nb-NO')).toEqual('no');
  });

  it('returns en as default if no match', () => {
    expect(MapLocaleToLanguageQuery('lol')).toEqual('en');
  });
});
