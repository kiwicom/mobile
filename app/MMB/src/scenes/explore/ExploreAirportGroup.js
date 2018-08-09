// @flow strict

import * as React from 'react';
import { TextIcon, StyleSheet } from '@kiwicom/mobile-shared';
import { MenuItem, TitledMenuGroup } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import uniqBy from 'lodash/uniqBy';

import type { ExploreAirportGroup as LegType } from './__generated__/ExploreAirportGroup.graphql';

type Props = {|
  +data: LegType,
|};
const todo = () => {
  console.warn('TODO');
};

const ExploreAirportGroup = (props: Props) => {
  const legs = props.data || [];
  const locations = legs
    .reduce((acc, curr) => {
      const departure = idx(curr, _ => _.departure.airport);
      const arrival = idx(curr, _ => _.arrival.airport);
      return [...acc, departure, arrival];
    }, [])
    .filter(i => idx(i, _ => _.type) === 'airport');

  if (locations.length === 0) {
    return null;
  }

  return (
    <TitledMenuGroup title={<Translation id="mmb.explore.airports" />}>
      {uniqBy(locations, 'city.code').map(location => {
        return (
          <MenuItem
            isActive={false}
            title={
              <Translation
                passThrough={idx(location, _ => _.city.name) || ''}
              />
            }
            description={
              <Translation
                passThrough={idx(location, _ => _.city.code) || ''}
              />
            }
            key={location.id}
            onPress={todo}
            icon={<TextIcon code="a" style={styles.icon} />}
          />
        );
      })}
    </TitledMenuGroup>
  );
};

export default createFragmentContainer(
  ExploreAirportGroup,
  graphql`
    fragment ExploreAirportGroup on Leg @relay(plural: true) {
      id
      departure {
        airport {
          id
          type
          city {
            name
            code
          }
        }
      }
      arrival {
        airport {
          id
          type
          city {
            name
            code
          }
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  icon: {
    transform: [{ rotate: '45deg' }],
  },
});
