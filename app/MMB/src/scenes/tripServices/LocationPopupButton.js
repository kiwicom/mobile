// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Touchable, Color, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import CountryFlag from '../../components/CountryFlag';
import type { LocationPopupButton as LocationPopupButtonType } from './__generated__/LocationPopupButton.graphql';

type Props = {|
  +whitelabelURL: string,
  +data: LocationPopupButtonType,
  +onPress: string => void,
  +displayIata?: boolean,
|};

class LocationPopupButton extends React.Component<Props> {
  static defaultProps = {
    displayIata: false,
  };

  openWhitelabel = () => {
    this.props.onPress(this.props.whitelabelURL);
  };

  render = () => {
    const cityName = idx(this.props, _ => _.data.city.name);
    const locationId = idx(this.props, _ => _.data.locationId);

    return (
      <Touchable onPress={this.openWhitelabel} style={styleSheet.wrapper}>
        <React.Fragment>
          <CountryFlag data={this.props.data} />
          {this.props.displayIata ? (
            <Translation
              passThrough={`in ${cityName || ''} (${locationId || ''})`}
            />
          ) : (
            <Translation passThrough={cityName || ''} />
          )}
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
    backgroundColor: Color.white,
  },
});
