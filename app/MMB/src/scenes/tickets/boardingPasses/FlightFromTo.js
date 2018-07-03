// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { TextIcon, StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import idx from 'idx';

import DownloadButton from './DownloadButton';
import type { FlightFromTo as RouteStopType } from './__generated__/FlightFromTo.graphql';

type Props = {|
  +data: RouteStopType,
|};

const FlightFromTo = (props: Props) => {
  const date = idx(props.data, _ => _.departure.localTime);
  const shortDate = date
    ? DateFormatter(new Date(date)).formatToShortDate()
    : '';
  const time = date ? DateFormatter(new Date(date)).formatToTime() : '';
  return (
    <View style={styles.row}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          <Translation passThrough={shortDate} />
        </Text>
        <Text style={styles.dateText}>
          <Translation passThrough={time} />
        </Text>
      </View>
      <View style={styles.rightColumn}>
        <View style={[styles.row, styles.cityContainer]}>
          <Text style={styles.cityText}>
            <Translation
              passThrough={idx(props.data, _ => _.departure.airport.city.name)}
            />
          </Text>
          <TextIcon code="&#xe099;" style={styles.icon} />
          <Text style={styles.cityText}>
            <Translation
              passThrough={idx(props.data, _ => _.arrival.airport.city.name)}
            />
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <DownloadButton data={idx(props.data, _ => _.boardingPass)} />
        </View>
      </View>
    </View>
  );
};
export default createFragmentContainer(
  FlightFromTo,
  graphql`
    fragment FlightFromTo on Leg {
      departure {
        localTime
        airport {
          city {
            name
          }
        }
      }
      arrival {
        airport {
          city {
            name
          }
        }
      }
      boardingPass {
        ...DownloadButton
      }
    }
  `,
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  dateText: {
    fontSize: 12,
    fontWeight: '600',
    color: Color.textLight,
  },
  dateContainer: {
    marginEnd: 10,
  },
  cityContainer: {
    alignSelf: 'flex-start',
  },
  icon: {
    color: Color.textLight,
    fontSize: 8,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  cityText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 15,
  },
  rightColumn: {
    marginEnd: 9,
    flex: 1,
  },
});
