// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Text, View } from 'react-native';

import AirlineLogo from '../../components/flights/AirlineLogo';
import Date from '../../components/visual/datetime/Date';
import Duration from '../../components/flights/Duration';
import Price from '../../components/flights/Price';
import RouteStop from '../../components/flights/RouteStop';
import SimpleCard from '../../components/visual/cards/SimpleCard';

import type { SearchResultRow_node } from './__generated__/SearchResultRow_node.graphql';

type Props = {
  node: SearchResultRow_node,
};

export const SearchResultRowWithoutData = ({ node }: Props) => {
  const { duration, price, legs, departure, arrival } = node;
  if (legs) {
    return (
      <SimpleCard>
        <View style={{ flex: 16, flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Price data={price} />
          </View>

          <View style={{ flex: 14, flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <RouteStop data={departure} />
                <Date dateTime={departure && departure.localTime} />
              </View>

              <Text> &rarr; </Text>

              <View style={{ flexDirection: 'column' }}>
                <RouteStop data={arrival} />
                <Date dateTime={arrival && arrival.localTime} />
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              {legs.map(leg => {
                if (leg) {
                  return <AirlineLogo data={leg.airline} key={leg.id} />;
                }
              })}
              <Text>
                in <Duration minutes={duration} />
              </Text>
            </View>
          </View>
        </View>
      </SimpleCard>
    );
  } else {
    // TODO: log such an event?
    return <Text>Flight legs could not be loaded (missing data).</Text>;
  }
};

export default createFragmentContainer(
  SearchResultRowWithoutData,
  graphql`
    fragment SearchResultRow_node on Flight {
      duration
      price {
        ...Price
      }
      departure {
        localTime
        ...RouteStop
      }
      arrival {
        localTime
        ...RouteStop
      }
      legs {
        id
        airline {
          ...AirlineLogo
        }
      }
    }
  `,
);
