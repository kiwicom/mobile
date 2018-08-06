// @flow strict

import * as React from 'react';
import { Translation, DateUtils } from '@kiwicom/mobile-localization';
import { StyleSheet, Text, Color } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import ExploreButton from './ExploreButton';
import type { ExploreText as TripType } from './__generated__/ExploreText.graphql';

type Props = {|
  +data: TripType,
|};

const ExploreText = (props: Props) => {
  const city = idx(props.data, _ => _.arrival.airport.city.name);
  const date = new Date(idx(props.data, _ => _.departure.time) || 0);
  const daysLeft = DateUtils.diffInDays(date, DateUtils.getUTCToday());
  return (
    <React.Fragment>
      <Text style={styles.title}>
        {daysLeft > 0 ? (
          <Translation id="mmb.main_menu.explore_city.prepare_for_trip" />
        ) : (
          <Translation
            id="mmb.main_menu.explore_city.spending_time_in"
            values={{ city }}
          />
        )}
      </Text>
      <Text style={styles.subText}>
        {daysLeft > 0 ? (
          <Translation
            id="mmb.main_menu.eplore_city.your_trip_in_days"
            values={{
              city,
              days: daysLeft,
            }}
          />
        ) : (
          <Translation id="mmb.main_menu.explore_city.find_stuff_to_do" />
        )}
      </Text>
      <ExploreButton cityName={city || ''} />
    </React.Fragment>
  );
};

export default createFragmentContainer(
  ExploreText,
  graphql`
    fragment ExploreText on Trip {
      departure {
        time
      }
      arrival {
        airport {
          city {
            name
          }
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '800',
  },
  subText: {
    color: Color.textLight,
    fontSize: 12,
    marginTop: 7,
  },
});
