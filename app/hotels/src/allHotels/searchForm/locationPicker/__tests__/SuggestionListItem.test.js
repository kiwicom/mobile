// @flow

import SuggestionListItem from '../SuggestionListItem';

const createListItem = (fullName: string, stringToHighlight: string) => {
  return new SuggestionListItem({
    city: {
      id: 'fakeId',
      name: fullName,
    },
    search: stringToHighlight,
    onCitySelected: () => {},
  });
};

describe('SuggestionListItem', () => {
  it('splits text correctly with match in the middle', () => {
    expect(
      createListItem('El Romero', 'Rome').getHighlightedStringChunks(),
    ).toEqual(['El ', 'Rome', 'ro']);
  });

  it('splits text correctly with match at start', () => {
    expect(createListItem('Rome', 'Rom').getHighlightedStringChunks()).toEqual([
      '',
      'Rom',
      'e',
    ]);
  });

  it('splits text correctly with match at end', () => {
    expect(createListItem('Oslo', 'slo').getHighlightedStringChunks()).toEqual([
      'O',
      'slo',
      '',
    ]);
  });

  it('splits text correctly with name = emtpy string', () => {
    expect(createListItem('', 'slo').getHighlightedStringChunks()).toEqual([
      '',
      '',
      '',
    ]);
  });

  it('splits text correctly if there is no match', () => {
    expect(
      createListItem('Roses', 'Rome').getHighlightedStringChunks(),
    ).toEqual(['Roses', '', '']);
  });

  it('matches case insensitively', () => {
    expect(
      createListItem('Mexico City', 'mexico ci').getHighlightedStringChunks(),
    ).toEqual(['', 'Mexico Ci', 'ty']);
  });

  it('behaves lazily', () => {
    // first capturing regexp group behaves lazy and therefore it matches
    // the first available letter / group of letters
    expect(
      createListItem('Rio de Janeiro', 'r').getHighlightedStringChunks(),
    ).toEqual(['', 'R', 'io de Janeiro']);
  });
});
