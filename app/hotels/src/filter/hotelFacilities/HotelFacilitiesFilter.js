// @flow

import * as React from 'react';
import { View } from 'react-native';

import HotelFacilitiesPopup from './HotelFacilitiesPopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Props = {|
  facilities: string[],
  onChange: OnChangeFilterParams => void,
|};

type State = {|
  isPopupOpen: boolean,
|};

export default class HotelFacilitiesFilter extends React.Component<
  Props,
  State,
> {
  static isActive = (facilities: string[]): boolean => facilities.length > 0;

  mounted = true;
  state = {
    isPopupOpen: false,
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  handlePopupToggle = () => {
    if (!this.mounted) {
      return;
    }

    this.setState(state => ({
      isPopupOpen: !state.isPopupOpen,
    }));
  };

  handleSave = (hotelFacilities: string[]) =>
    this.props.onChange({ hotelFacilities });

  getTitle = (facilities: string[]) =>
    `hotel facilities${facilities.length ? ` (${facilities.length})` : ''}`;

  render = () => (
    <View>
      <FilterButton
        title={this.getTitle(this.props.facilities)}
        isActive={this.constructor.isActive(this.props.facilities)}
        onPress={this.handlePopupToggle}
      />
      <HotelFacilitiesPopup
        isVisible={this.state.isPopupOpen}
        onClose={this.handlePopupToggle}
        onSave={this.handleSave}
        facilities={this.props.facilities}
      />
    </View>
  );
}
