// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { TextIcon, StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import idx from 'idx';

import AppleWallet from './appleWallet/AppleWallet';
import DownloadButton from './DownloadButton';
import type { FlightFromTo as RouteStopType } from './__generated__/FlightFromTo.graphql';
import WalletContext, { type Segment } from '../../../context/WalletContext';

type PropsWithContext = {|
  ...Props,
  +addSegment: (segment: Segment) => void,
|};

export class FlightFromTo extends React.Component<PropsWithContext> {
  componentDidMount = () => {
    const id = idx(this.props.data, _ => _.id) || '';
    const airlineLogoUrl = idx(this.props.data, _ => _.airline.logoUrl) || '';
    const flightDate = idx(this.props.data, _ => _.departure.localTime) || null;
    this.props.addSegment({
      id,
      airlineLogoUrl, // TODO: This is not the correct logo. Fix when images have been added to images.kiwi.com
      flightDate,
    });
  };

  render = () => {
    const date = idx(this.props.data, _ => _.departure.localTime);
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
                passThrough={idx(
                  this.props.data,
                  _ => _.departure.airport.city.name,
                )}
              />
            </Text>
            <TextIcon code="&#xe099;" style={styles.icon} />
            <Text style={styles.cityText}>
              <Translation
                passThrough={idx(
                  this.props.data,
                  _ => _.arrival.airport.city.name,
                )}
              />
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <DownloadButton data={idx(this.props.data, _ => _.boardingPass)} />
          </View>
          {Platform.OS === 'ios' && (
            <View style={styles.appleWalletContainer}>
              <AppleWallet
                segmentId={idx(this.props.data, _ => _.id)}
                data={idx(this.props.data, _ => _.boardingPass)}
              />
            </View>
          )}
        </View>
      </View>
    );
  };
}

type Props = {|
  +data: RouteStopType,
|};

const FlightFromToWithContext = (props: Props) => (
  <WalletContext.Consumer>
    {({ actions: { addSegment } }) => (
      <FlightFromTo {...props} addSegment={addSegment} />
    )}
  </WalletContext.Consumer>
);

export default createFragmentContainer(
  FlightFromToWithContext,
  graphql`
    fragment FlightFromTo on Leg {
      id
      airline {
        logoUrl
      }
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
        ...AppleWallet
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
  appleWalletContainer: {
    marginTop: 20,
  },
});
