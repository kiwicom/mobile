// @flow

import * as React from 'react';
import { MenuItem, TitledMenuGroup } from '@kiwicom/mobile-navigation';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { TextIcon } from '@kiwicom/mobile-shared';
import uniqBy from 'lodash/uniqBy';

import type { ExploreAirportGroup as TripType } from './__generated__/ExploreAirportGroup.graphql';

type Props = {|
  +data: TripType,
|};

const todo = () => {
  console.warn('TODO');
};

const ExploreDestinationsGroup = (props: Props) => {
  const trips = props.data || [];

  return (
    <TitledMenuGroup title={<Translation id="mmb.explore.destinations" />}>
      {uniqBy(trips, 'arrival.airport.city.name').map((trip, index) => {
        return (
          <MenuItem
            isActive={false}
            title={
              <Translation
                passThrough={idx(trip, _ => _.arrival.airport.city.name) || ''}
              />
            }
            description={
              <Translation
                passThrough={
                  idx(trip, _ => _.arrival.airport.country.name) || ''
                }
              />
            }
            key={`${trip.arrival.airport.id}-${index}`}
            onPress={todo}
            icon={<TextIcon code="c" />}
          />
        );
      })}
    </TitledMenuGroup>
  );
};

export default createFragmentContainer(
  ExploreDestinationsGroup,
  graphql`
    fragment ExploreDestinationsGroup on Trip @relay(plural: true) {
      departure {
        airport {
          id
          country {
            name
          }
          city {
            name
          }
        }
      }
      arrival {
        airport {
          id
          country {
            name
          }
          city {
            name
          }
        }
      }
    }
  `,
);
