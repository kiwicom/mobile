// @flow

import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { Color } from '@kiwicom/react-native-app-common';

import type { Facilities_facilities } from './__generated__/Facilities_facilities.graphql';

const styles = StyleSheet.create({
  facilities: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#edeff2',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  facilityView: {
    borderRadius: 2,
    backgroundColor: '#edeff2',
    marginRight: 5,
    marginBottom: 5,
  },
  facilityText: {
    fontSize: 12,
    padding: 4,
    color: '#79818a',
    backgroundColor: 'transparent',
  },
  lessMoreButton: {
    color: Color.brand,
    fontWeight: '800',
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
              <View key={facility.id} style={styles.facilityView}>
                <Text style={styles.facilityText}>{facility.name}</Text>
              </View>
            )
          );
        })}
        {fullList.length > shortlist.length && (
          <TouchableOpacity onPress={this.toggle}>
            <Text style={styles.lessMoreButton}>
              {collapsed
                ? `+${fullList.length - shortlist.length} More`
                : 'Show less'}
            </Text>
          </TouchableOpacity>
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
