// @flow

import * as React from 'react';
import { MenuItem, TitledMenuGroup } from '@kiwicom/mobile-navigation';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { TextIcon } from '@kiwicom/mobile-shared';
import uniqBy from 'lodash/uniqBy';

import type { ExportDestinationsGroup as TripType } from './__generated__/ExploreDestinationsGroup.graphql';

type Props = {|
  +data: TripType,
|};

const todo = () => {
  console.warn('TODO');
};

export const ExploreDestinationsGroup = (props: Props) => {
  const trips = props.data || [];

  const destinations = [
    ...trips.map(trip => trip.departure),
    ...trips.map(trip => trip.arrival),
  ];

  return (
    <TitledMenuGroup title={<Translation id="mmb.explore.destinations" />}>
      {uniqBy(destinations, 'airport.code').map(destination => {
        return (
          <MenuItem
            isActive={false}
            title={
              <Translation
                passThrough={idx(destination, _ => _.airport.city.name) || ''}
              />
            }
            description={
              <Translation
                passThrough={
                  idx(destination, _ => _.airport.country.name) || ''
                }
              />
            }
            key={destination.airport.id}
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
          code
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
          code
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
