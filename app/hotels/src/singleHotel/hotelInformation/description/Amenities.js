// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  StyleSheet,
  AdaptableBadge,
  Text,
  Touchable,
} from '@kiwicom/mobile-shared';
import { Translation, TranslationFragment } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import DescriptionTitle from './DescriptionTitle';
import type { Amenities_data as AmenitiesType } from './__generated__/Amenities_data.graphql';

type Props = {|
  +data: ?AmenitiesType,
|};

type State = {|
  collapsed: boolean,
|};

export class Amenities extends React.Component<Props, State> {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState(({ collapsed }) => ({
      collapsed: !collapsed,
    }));
  };

  render() {
    const { collapsed } = this.state;
    const fullList = this.props.data?.amenities ?? [];

    const shortlist = fullList.slice(0, 9);
    const listToRender = collapsed ? shortlist : fullList;

    if (fullList.length === 0) {
      return null;
    }
    return (
      <View style={styles.amenitiesContainer}>
        <DescriptionTitle
          title={<Translation id="single_hotel.description.equipment" />}
        />
        <View style={styles.amenities}>
          {listToRender.map(amenity => {
            return (
              <AdaptableBadge
                key={amenity?.id}
                translation={<Translation passThrough={amenity?.name} />}
                style={styles.adaptableBadge}
                textStyle={styles.adaptableBadgeText}
              />
            );
          })}
          {fullList.length > shortlist.length && (
            <Touchable onPress={this.toggle} noRipple={true}>
              <Text style={styles.lessMoreButton}>
                {collapsed ? (
                  <TranslationFragment>
                    <Translation
                      passThrough={`+${fullList.length - shortlist.length} `}
                    />
                    <Translation id="single_hotel.description.facilities.show_more" />
                  </TranslationFragment>
                ) : (
                  <Translation id="single_hotel.description.facilities.show_less" />
                )}
              </Text>
            </Touchable>
          )}
        </View>
      </View>
    );
  }
}

export default createFragmentContainer(Amenities, {
  data: graphql`
    fragment Amenities_data on HotelInterface {
      amenities {
        id
        name
      }
    }
  `,
});

const styles = StyleSheet.create({
  amenitiesContainer: {
    paddingTop: 30,
  },
  amenities: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  lessMoreButton: {
    color: defaultTokens.paletteProductNormal,
    fontWeight: '500',
  },
  adaptableBadge: {
    backgroundColor: defaultTokens.paletteCloudNormal,
    marginEnd: 5,
    marginBottom: 5,
  },
  adaptableBadgeText: {
    color: defaultTokens.paletteInkNormal,
    fontSize: 12,
    lineHeight: 15,
  },
});
