// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { AdaptableLayout, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Location from './location/Location';
import Description from './description/Description';
import type { HotelInformation_hotel } from './__generated__/HotelInformation_hotel.graphql';

type ContainerProps = {|
  +hotel: any,
|};

type Props = {|
  ...ContainerProps,
  +hotel: ?HotelInformation_hotel,
|};

export class HotelInformation extends React.Component<Props> {
  renderDescription = (locationView: React.Node) => (
    <Description hotel={this.props.hotel} locationView={locationView} />
  );

  renderLocation = (isWide: boolean) => (
    <Location hotel={this.props.hotel} isWide={isWide} />
  );

  render = () => {
    return (
      <AdaptableLayout
        renderOnNarrow={
          <React.Fragment>
            {this.renderLocation(false)}
            {this.renderDescription()}
          </React.Fragment>
        }
        renderOnWide={
          <React.Fragment>
            {this.renderDescription(
              <View style={styles.locationContainer}>
                {this.renderLocation(true)}
              </View>,
            )}
          </React.Fragment>
        }
      />
    );
  };
}

const styles = StyleSheet.create({
  locationContainer: {
    borderBottomWidth: 1,
    borderBottomColor: defaultTokens.paletteCloudNormal,
    marginBottom: 15,
  },
});

export default (createFragmentContainer(
  HotelInformation,
  graphql`
    fragment HotelInformation_hotel on Hotel {
      ...Location_hotel
      ...Description_hotel
    }
  `,
): React.ComponentType<ContainerProps>);
