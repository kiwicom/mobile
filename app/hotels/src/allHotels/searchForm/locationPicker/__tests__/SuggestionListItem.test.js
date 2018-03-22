// @flow

import SuggestionListItem from '../SuggestionListItem';

const onCitySelected = () => {};

describe('SuggestionListItem', () => {
  it('splits text correctly with match in the middle', () => {
    const city = {
      id: 'rome',
      name: 'El Romero',
    };
    const search = 'Rome';
    const Component = new SuggestionListItem({ city, search, onCitySelected });

    expect(Component.splitText()).toEqual({
      before: 'El ',
      match: 'Rome',
      after: 'ro',
    });
  });

  it('splits text correctly with match at start', () => {
    const city = {
      id: 'rome',
      name: 'Rome',
    };
    const search = 'Rom';
    const Component = new SuggestionListItem({ city, search, onCitySelected });

    expect(Component.splitText()).toEqual({
      before: '',
      match: 'Rom',
      after: 'e',
    });
  });

  it('splits text correctly with match at end', () => {
    const city = {
      id: 'oslo',
      name: 'Oslo',
    };
    const search = 'slo';
    const Component = new SuggestionListItem({ city, search, onCitySelected });

    expect(Component.splitText()).toEqual({
      before: 'O',
      match: 'slo',
      after: '',
    });
  });

  it('splits text correctly with name = emtpy string', () => {
    const city = {
      id: 'oslo',
      name: '',
    };
    const search = 'slo';
    const Component = new SuggestionListItem({ city, search, onCitySelected });

    expect(Component.splitText()).toEqual({
      before: '',
      match: '',
      after: '',
    });
  });

  it('splits text correctly if there is no match', () => {
    const city = {
      id: 'roses',
      name: 'Roses',
    };
    const search = 'Rome';
    const Component = new SuggestionListItem({ city, search, onCitySelected });

    expect(Component.splitText()).toEqual({
      before: '',
      match: '',
      after: 'Roses',
    });
  });
});
