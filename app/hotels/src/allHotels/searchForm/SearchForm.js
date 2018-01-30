// @flow

import * as React from 'react';
import { TextInput, Color, Logger } from '@kiwicom/react-native-app-common';
import { View, StyleSheet } from 'react-native';

import DateInput from './DateInput';
import Guests from './guests/Guests';
import type {
  RoomConfigurationType,
  SearchParams,
  OnChangeSearchParams,
} from './SearchParametersType';

const styles = StyleSheet.create({
  form: {
    padding: 10,
    backgroundColor: Color.brandSecondary,
  },
  destination: {
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    height: 40,
  },
});

type Props = {
  location: string,
  search: SearchParams,
  onChange: (search: OnChangeSearchParams) => void,
  onLocationChange: (location: string) => void,
};

class SearchForm extends React.Component<Props> {
  componentDidMount = () => {
    Logger.LogEvent(Logger.Event.Displayed, Logger.Category.Ancillary, {
      type: 'Hotels',
      step: 'searchForm',
    });
  };

  handleDestinationChange = (location: string) => {
    this.props.onLocationChange(location);
  };

  handleGuestsChange = (roomsConfiguration: RoomConfigurationType) => {
    this.props.onChange({ roomsConfiguration });
  };

  render = () => {
    const { search, location, onChange } = this.props;

    return (
      <View style={styles.form}>
        <View style={styles.destination}>
          <TextInput
            value={location}
            onChangeText={this.handleDestinationChange}
            placeholder="Where do you go?"
            iconName="location-city"
          />
        </View>
        <View style={styles.row}>
          <DateInput
            containerStyles={styles.row}
            checkin={search.checkin}
            checkout={search.checkout}
            onChange={onChange}
          />
          <Guests
            guests={search.roomsConfiguration}
            onChange={this.handleGuestsChange}
          />
        </View>
      </View>
    );
  };
}

export default SearchForm;
