// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Touchable, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import CountryFlag from '../../components/CountryFlag';
import type { LocationPopupButton as LocationPopupButtonType } from './__generated__/LocationPopupButton.graphql';

type Props = {|
  +whitelabelURL: string,
  +data: LocationPopupButtonType,
  +onPress: string => void,
  +displayIata?: boolean,
  +displayDate?: boolean,
  +date?: ?string,
|};

class LocationPopupButton extends React.Component<Props> {
  static defaultProps = {
    displayIata: false,
    whitelabelURL: '',
  };

  openWhitelabel = () => {
    this.props.onPress(this.props.whitelabelURL);
  };

  render = () => {
    const cityName = idx(this.props, _ => _.data.city.name);
    const locationId = idx(this.props, _ => _.data.locationId);
    const date = idx(this.props, _ => _.date);
    const displayDate = idx(this.props, _ => _.displayDate);

    return (
      <Touchable onPress={this.openWhitelabel} style={styleSheet.wrapper}>
        <React.Fragment>
          <CountryFlag data={this.props.data} />
          <View style={styleSheet.locationWrapper}>
            {this.props.displayIata ? (
              <Translation
                passThrough={`${cityName || ''} (${locationId || ''})`}
              />
            ) : (
              <Translation passThrough={cityName || ''} />
            )}
            {date != null &&
              displayDate != null &&
              displayDate && (
                <Text style={styleSheet.date}>
                  <Translation passThrough={date} />
                </Text>
              )}
          </View>
        </React.Fragment>
      </Touchable>
    );
  };
}

export default createFragmentContainer(
  LocationPopupButton,
  graphql`
    fragment LocationPopupButton on Location {
      city {
        name
      }
      locationId
      ...CountryFlag
    }
  `,
);

const styleSheet = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 17,
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: defaultTokens.paletteWhite,
  },
  locationWrapper: {
    flexDirection: 'column',
  },
  date: {
    color: defaultTokens.colorTextSecondary,
    paddingTop: 2,
  },
});
