// @flow

import * as React from 'react';
import { Translation, TranslationFragment } from '@kiwicom/mobile-localization';
import { Logger } from '@kiwicom/mobile-shared';

import HotelFacilitiesPopup from './HotelFacilitiesPopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Props = {|
  facilities: string[],
  onChange: OnChangeFilterParams => void,
  isActive: boolean,
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

  handleSave = (hotelFacilities: string[]) =>
    this.closePopup(() => {
      this.props.onChange({ hotelFacilities });
      if (hotelFacilities.length > 0) {
        Logger.hotelsFilterTagSet('Amenities');
      }
    });

  getTitle = (facilities: string[]) => (
    <TranslationFragment>
      <Translation id="hotels_search.filter.hotel_facilities_filter.title" />
      <Translation
        passThrough={facilities.length ? ` (${facilities.length})` : ''}
      />
    </TranslationFragment>
  );

  render() {
    return (
      <React.Fragment>
        <FilterButton
          title={this.getTitle(this.props.facilities)}
          isActive={this.props.isActive}
          onPress={this.filterButtonClicked}
        />
        <HotelFacilitiesPopup
          isVisible={this.state.isPopupOpen}
          onClose={this.closePopup}
          onSave={this.handleSave}
          facilities={this.props.facilities}
        />
      </React.Fragment>
    );
  }
}
