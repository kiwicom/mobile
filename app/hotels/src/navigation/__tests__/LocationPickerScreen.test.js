// @flow

import { LocationPicker, type Location } from '../LocationPickerScreen';

const getComponent = (
  saveToStorage: (value: any) => void,
  storageValue: Location[] = [],
) =>
  // $FlowExpectedError: Passing just the props needed to test method
  new LocationPicker({
    storageValue,
    saveToStorage,
  });

describe('LocationPickerScreen', () => {
  describe('saveRecentSearches', () => {
    it('calls saveToStorage if it is not already stored', () => {
      const saveToStorage = jest.fn();
      const Component = getComponent(saveToStorage);
      Component.saveRecentSearches('1', 'Rome');

      expect(saveToStorage).toHaveBeenCalledWith([{ id: '1', name: 'Rome' }]);
    });

    it('does not call saveToStorage if it is already stored', () => {
      const saveToStorage = jest.fn();
      const locations = [{ id: '1', name: 'Rome' }];
      const Component = getComponent(saveToStorage, locations);
      Component.saveRecentSearches('1', 'Rome');

      expect(saveToStorage).not.toHaveBeenCalled();
    });

    it('does not save more than 20 locations', () => {
      const saveToStorage = jest.fn();
      const locations = [];
      const newLocation = { id: '31', name: 'Rome' };
      for (let i = 1; i < 20; i++) {
        locations.push({ id: `${i}`, name: `location ${i}` });
      }
      const Component = getComponent(saveToStorage, locations);
      Component.saveRecentSearches(newLocation.id, newLocation.name);

      const expectedResult = locations;
      expectedResult.unshift(newLocation);
      expectedResult.slice(0, 20);

      expect(saveToStorage).toHaveBeenCalledWith(expectedResult);
    });
  });
});
