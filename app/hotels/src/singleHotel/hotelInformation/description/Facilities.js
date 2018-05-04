// @flow

import * as React from 'react';
import { View } from 'react-native';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import {
  StyleSheet,
  Color,
  AdaptableBadge,
  Text,
  Touchable,
} from '@kiwicom/mobile-shared';
import { Translation, TranslationFragment } from '@kiwicom/mobile-localization';

import type { Facilities_facilities } from './__generated__/Facilities_facilities.graphql';

const styles = StyleSheet.create({
  facilities: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: Color.grey.$200,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  lessMoreButton: {
    color: Color.brand,
    fontWeight: '800',
  },
  adaptableBadge: {
    backgroundColor: Color.blueGrey.$50,
    marginRight: 5,
    marginBottom: 5,
  },
  adaptableBadgeText: {
    color: Color.textLight,
  },
});

type ContainerProps = {|
  facilities: any,
|};

type Props = {
  ...ContainerProps,
  facilities: ?Facilities_facilities,
};

type State = {|
  collapsed: boolean,
|};

export class Facilities extends React.Component<Props, State> {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState(({ collapsed }) => ({
      collapsed: !collapsed,
    }));
  };

  render() {
    const { facilities } = this.props;
    const { collapsed } = this.state;
    const edges = idx(facilities, _ => _.edges) || [];
    const fullList = edges.map(edge => idx(edge, _ => _.node));
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

export default (createFragmentContainer(
  Facilities,
  graphql`
    fragment Facilities_facilities on HotelFacilityConnection {
      edges {
        node {
          id
          name
        }
      }
    }
  `,
): React.ComponentType<ContainerProps>);
