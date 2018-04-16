// @flow

import { DateFormatter } from '@kiwicom/react-native-app-localization';

import {
  getSearchQueryParams,
  hasCoordinates,
  updateCheckinDateIfBeforeToday,
} from '../SearchQueryHelpers';
import { sanitizeDate } from '../../GraphQLSanitizers';

const defaultSearch = {
  checkin: new Date(1),
  checkout: new Date(2),
  roomsConfiguration: { adultsCount: 1, children: [] },
};

const defaultCoordinates = {
  latitude: 3,
  longitude: 4,
};

describe('SearchQueryHelpers', () => {
  describe('hasCoordinates', () => {
    it('returns true when coordinates are passed', () => {
      expect(
        hasCoordinates({
          latitude: 34.3,
          longitude: 12.12312,
        }),
      ).toBe(true);
    });

    it('returns false if latitude is not defined', () => {
      expect(
        // $FlowExpectedError: Itentionally passing latitude: undefined
        hasCoordinates({
          longitude: 12.12312,
        }),
      ).toBe(false);
    });
    it('returns false if longitude is not defined', () => {
      expect(
        // $FlowExpectedError: Itentionally passing longitude: undefined
        hasCoordinates({
          latitude: 12.12312,
        }),
      ).toBe(false);
    });

    it('returns true if passed 0, 0 coordinate', () => {
      expect(
        hasCoordinates({
          latitude: 0,
          longitude: 0,
        }),
      ).toBe(true);
    });

    it('returns false if coordinates are null', () => {
      expect(hasCoordinates(null)).toBe(false);
    });

    it('returns false if coordinates are undefined', () => {
      // $FlowExpectedError: Itentionally passing undefined
      expect(hasCoordinates(undefined)).toBe(false);
    });
  });

  describe('getSearchQueryParams', () => {
    it('searches with coordinates if no location is set', () => {
      expect(
        getSearchQueryParams(defaultSearch, defaultCoordinates, 'oslo', ''),
      ).toEqual({
        checkin: sanitizeDate(new Date(1)),
        checkout: sanitizeDate(new Date(2)),
        latitude: 3,
        longitude: 4,
        roomsConfiguration: { adultsCount: 1, children: [] },
      });
    });

    it('ignores coordinates if location is set', () => {
      expect(
        getSearchQueryParams(defaultSearch, defaultCoordinates, 'oslo', 'oslo'),
      ).toEqual({
        checkin: sanitizeDate(new Date(1)),
        checkout: sanitizeDate(new Date(2)),
        cityId: 'oslo',
        roomsConfiguration: { adultsCount: 1, children: [] },
      });
    });
  });

  describe('updateCheckinDateIfBeforeToday', () => {
    it('should not call onSearchChange if date is equal to today', () => {
      const search = {
        checkin: new Date(),
        checkout: new Date(),
        roomsConfiguration: { adultsCount: 1, children: [] },
      };
      const onSearchChange = jest.fn();

      updateCheckinDateIfBeforeToday(search, onSearchChange);
      expect(onSearchChange).not.toHaveBeenCalled();
    });

    it('should not call onSearchChange if date is greater than today', () => {
      const search = {
        checkin: DateFormatter()
          .add(1, 'day')
          .toDate(),
        checkout: new Date(),
        roomsConfiguration: { adultsCount: 1, children: [] },
      };
      const onSearchChange = jest.fn();

      updateCheckinDateIfBeforeToday(search, onSearchChange);
      expect(onSearchChange).not.toHaveBeenCalled();
    });

    it('should call onSearchChange if date is less than today', () => {
      const search = {
        checkin: DateFormatter()
          .subtract(3, 'days')
          .toDate(),
        checkout: new Date(),
        roomsConfiguration: { adultsCount: 1, children: [] },
      };
      const onSearchChange = jest.fn();

      updateCheckinDateIfBeforeToday(search, onSearchChange);
      expect(onSearchChange).toHaveBeenCalled();
    });
  });
});
