// @flow

import * as React from 'react';
import { MapView } from 'expo';

import SearchHeader from './search/SearchHeader';

import type { Navigation } from '../../types/Navigation';

type Props = {
  navigation: Navigation,
};

export default class Homepage extends React.Component<Props> {
  render = () => {
    return [
      <SearchHeader
        key={1}
        onSend={searchParameters => {
          this.props.navigation.navigate('SearchResults', searchParameters);
        }}
      />,
      <MapView key={2} style={{ flex: 1 }} />,
    ];
  };
}
