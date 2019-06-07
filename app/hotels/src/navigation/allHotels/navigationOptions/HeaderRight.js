// @flow strict

import * as React from 'react';
import { StyleSheet, Icon, Translation } from '@kiwicom/mobile-shared';

import { HotelsContext, type HotelsContextState } from '../../../HotelsContext';
import MapHeaderButton from '../MapHeaderButton';
import {
  SearchResultsContext,
  type SearchResultState,
} from '../SearchResultsContext';

export default function HeaderRight() {
  const { checkin }: HotelsContextState = React.useContext(HotelsContext);
  const { show, setResultType }: SearchResultState = React.useContext(
    SearchResultsContext,
  );

  const goToAllHotelsMap = React.useCallback(() => {
    const showNext = show === 'list' ? 'map' : 'list';
    setResultType(showNext);
  }, [setResultType, show]);

  if (checkin == null) {
    return null;
  }

  const icon =
    show === 'list' ? (
      <Icon name="map" style={styles.icon} />
    ) : (
      <Icon name="list" style={styles.icon} />
    );
  const translationKey =
    show === 'list'
      ? 'hotels_search.all_hotels_search_list.show_map'
      : 'hotels_search.all_hotels_search_list.show_list';

  return (
    <MapHeaderButton
      onPress={goToAllHotelsMap}
      icon={icon}
      text={<Translation id={translationKey} />}
      testID="map-header-button"
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    marginEnd: 2,
    fontSize: 22,
  },
});
