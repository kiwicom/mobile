// @flow strict

import * as React from 'react';

import { HotelsFilterContext, type HotelsFilterState } from '../HotelsFilterContext';
import { sanitizeHotelAmenities } from '../GraphQLSanitizers';

export default function useHotelsFilter() {
  const { filterParams }: HotelsFilterState = React.useContext(HotelsFilterContext);

  return React.useMemo(() => {
    const { hotelAmenities, maxPrice, minPrice, ...restFilterParams } = filterParams;
    return {
      ...(maxPrice != null ? { maximumPrice: maxPrice.toFixed(2) } : {}),
      ...restFilterParams,
      ...(minPrice != null ? { minimumPrice: minPrice.toFixed(2) } : {}),
      hotelAmenities: sanitizeHotelAmenities(hotelAmenities),
    };
  }, [filterParams]);
}
