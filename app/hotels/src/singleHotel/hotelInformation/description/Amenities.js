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
import idx from 'idx';

import type { Amenities as AmenitiesType } from './__generated__/Amenities.graphql';

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
    const fullList = idx(this.props.data, _ => _.amenities) || [];

    const shortlist = fullList.slice(0, 9);
    const listToRender = collapsed ? shortlist : fullList;

    return (
      <View style={styles.facilities}>
        {listToRender.map(facility => {
          return (
            facility && (
              <AdaptableBadge
                key={facility.id}
                translation={<Translation passThrough={facility.name} />}
                style={styles.adaptableBadge}
                textStyle={styles.adaptableBadgeText}
              />
            )
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
    );
  }
}

export default createFragmentContainer(
  Amenities,
  graphql`
    fragment Amenities on HotelInterface {
      amenities {
        id
        name
      }
    }
  `,
);

const styles = StyleSheet.create({
  facilities: {
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
