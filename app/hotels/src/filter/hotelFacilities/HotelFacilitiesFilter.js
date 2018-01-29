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
  state = {
    isPopupOpen: false,
  };

  static isActive = (facilities: string[]): boolean => facilities.length > 0;

  openPopup = () =>
    this.setState({
      isPopupOpen: true,
    });

  closePopup = (callback?: Function) =>
    this.setState(
      {
        isPopupOpen: false,
      },
      callback,
    );

  handleSave = (hotelFacilities: string[]) =>
    this.closePopup(() => this.props.onChange({ hotelFacilities }));

  getTitle = (facilities: string[]) =>
    `hotel facilities${facilities.length ? ` (${facilities.length})` : ''}`;

  render = () => (
    <View>
      <FilterButton
        title={this.getTitle(this.props.facilities)}
        isActive={this.constructor.isActive(this.props.facilities)}
        onPress={this.openPopup}
      />
      <HotelFacilitiesPopup
        isVisible={this.state.isPopupOpen}
        onClose={this.closePopup}
        onSave={this.handleSave}
        facilities={this.props.facilities}
      />
    </View>
  );
}
