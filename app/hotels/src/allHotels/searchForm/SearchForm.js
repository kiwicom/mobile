// @flow

import * as React from 'react';
import { Color, Logger, StyleSheet } from '@kiwicom/mobile-shared';
import { View } from 'react-native';

import DateInput from './DateInput';
import Guests from './guests/Guests';
import type {
  SearchParams,
  OnChangeSearchParams,
} from './SearchParametersType';
import LocationButton from './LocationButton';
import HotelsSearchContext from '../../HotelsSearchContext';

type PropsWithContext = {|
  ...Props,
  location: string,
  search: SearchParams,
  onChange: (search: OnChangeSearchParams) => void,
|};

export class SearchForm extends React.Component<PropsWithContext> {
  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_SEARCH_FORM);
  };

  openLocationPicker = () => {
    this.props.openLocationPicker(this.props.location);
  };

  render = () => {
    const { search, location, onChange } = this.props;

    return (
      <View style={styles.form}>
        <LocationButton onPress={this.openLocationPicker} location={location} />
        <View style={styles.row}>
          <DateInput
            checkin={search.checkin}
            checkout={search.checkout}
            onChange={onChange}
          />
        </View>
        <View style={styles.row}>
          <Guests
            guests={search.roomsConfiguration}
            openGuestsModal={this.props.openGuestsModal}
          />
        </View>
      </View>
    );
  };
}

type Props = {|
  openLocationPicker: (location: string) => void,
  openGuestsModal: () => void,
|};

export default function SearchFormWithContext(props: Props) {
  return (
    <HotelsSearchContext.Consumer>
      {({ location, searchParams, actions: { setSearch } }) => (
        <SearchForm
          openGuestsModal={props.openGuestsModal}
          openLocationPicker={props.openLocationPicker}
          location={location}
          search={searchParams}
          onChange={setSearch}
        />
      )}
    </HotelsSearchContext.Consumer>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: Color.white,
    android: {
      paddingHorizontal: 14,
      paddingTop: 15,
    },
    ios: {
      paddingHorizontal: 10,
      paddingTop: 10,
    },
  },
  row: {
    android: {
      marginTop: 8,
    },
    ios: {
      marginTop: 10,
    },
  },
});
