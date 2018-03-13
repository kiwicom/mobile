// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import {
  AdaptableLayout,
  StyleSheet,
  Color,
} from '@kiwicom/react-native-app-shared';

import Location from './location/Location';
import Description from './description/Description';
import type { HotelInformation_hotel } from './__generated__/HotelInformation_hotel.graphql';

type ContainerProps = {|
  hotel: any,
  onGoToMap: () => void,
|};

type Props = {|
  ...ContainerProps,
  hotel: ?HotelInformation_hotel,
|};

const styles = StyleSheet.create({
  locationContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Color.grey.$200,
    marginBottom: 15,
  },
});

export class HotelInformation extends React.Component<Props> {
  renderDescription = (locationView: React.Node) => (
    <Description hotel={this.props.hotel} locationView={locationView} />
  );

  renderLocation = (isWide: boolean) => (
    <Location
      hotel={this.props.hotel}
      onGoToMap={this.props.onGoToMap}
      isWide={isWide}
    />
  );

  renderBaseComponent = () => (
    <View>
      {this.renderLocation(false)}
      {this.renderDescription()}
    </View>
  );

  render = () => {
    const baseComponent = this.renderBaseComponent();
    return (
      <AdaptableLayout
        renderOnNarrow={baseComponent}
        renderOnWide={
          <View>
            {this.renderDescription(
              <View style={styles.locationContainer}>
                {this.renderLocation(true)}
              </View>,
            )}
          </View>
        }
      />
    );
  };
}

export default (createFragmentContainer(
  HotelInformation,
  graphql`
    fragment HotelInformation_hotel on Hotel {
      ...Location_hotel
      ...Description_hotel
    }
  `,
): React.ComponentType<ContainerProps>);
