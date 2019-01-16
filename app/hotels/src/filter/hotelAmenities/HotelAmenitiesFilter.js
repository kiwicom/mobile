// @flow

import * as React from 'react';
import { Translation, TranslationFragment } from '@kiwicom/mobile-localization';
import { Logger } from '@kiwicom/mobile-shared';

import HotelAmenitiesPopup from './HotelAmenitiesPopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Props = {|
  +amenities: string[],
  +onChange: OnChangeFilterParams => void,
  +isActive: boolean,
|};

type State = {|
  isPopupOpen: boolean,
|};

export default class HotelAmenitiesFilter extends React.Component<
  Props,
  State,
> {
  state = {
    isPopupOpen: false,
  };

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

  filterButtonClicked = () => {
    if (this.props.isActive) {
      this.handleSave([]);
    } else {
      this.openPopup();
    }
  };

  handleSave = (hotelAmenities: string[]) =>
    this.closePopup(() => {
      this.props.onChange({ hotelAmenities });
      if (hotelAmenities.length > 0) {
        Logger.hotelsFilterTagSet('Amenities');
      }
    });

  getTitle = () => {
    const length = this.props.amenities.length
      ? ` (${this.props.amenities.length})`
      : '';
    return (
      <TranslationFragment>
        <Translation id="hotels_search.filter.hotel_facilities_filter.title" />
        <Translation passThrough={length} />
      </TranslationFragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <FilterButton
          title={this.getTitle()}
          isActive={this.props.isActive}
          onPress={this.filterButtonClicked}
        />
        <HotelAmenitiesPopup
          isVisible={this.state.isPopupOpen}
          onClose={this.closePopup}
          onSave={this.handleSave}
          amenities={this.props.amenities}
        />
      </React.Fragment>
    );
  }
}
