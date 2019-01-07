// @flow strict

import * as React from 'react';
import { Platform } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon, StyleSheet, Touchable } from '@kiwicom/mobile-shared';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { AssetsDownloader, unzip } from '@kiwicom/mobile-assets';
import RNFetchBlob from 'rn-fetch-blob';

import type { AppleWalletPassenger as AppleWalletType } from './__generated__/WalletPassenger.graphql';
import WalletContext from '../../../../context/WalletContext';
import BookingDetailContext from '../../../../context/BookingDetailContext';

type PropsWithContext = {|
  ...Props,
  +bookingId: number,
  +addPkpassData: (
    passengerName: string,
    pkpassUrl: string,
    id: string,
    callback?: () => void,
  ) => void,
|};

type State = {|
  isDownloaded: boolean,
|};

class WalletPassenger extends React.Component<PropsWithContext, State> {
  state = {
    isDownloaded: false,
  };

  componentDidMount = async () => {
    if (Platform.OS === 'android') {
      const folderPath = `${
        RNFetchBlob.fs.dirs.DocumentDir
      }/${this.getFolderPath()}`;
      const exists = await RNFetchBlob.fs.exists(`${folderPath}`);
      this.setState({ isDownloaded: exists });
    }
  };

  onPressIos = () => {
    const { data, segmentId } = this.props;
    const name = data.passenger?.fullName ?? '';
    const url = data.url ?? '';

    if (segmentId != null) {
      // We cannot navigate before selected segment has been set
      this.props.addPkpassData(name, url, segmentId, () => {
        this.props.navigation.navigate('AppleWalletScreen');
      });
    }
  };

  onPressAndroid = () => {
    if (this.state.isDownloaded) {
      console.warn('TODO');
    } else {
      this.downloadPkpass();
    }
  };

  getFolderPath = () => {
    const databaseId = this.props.data.passenger?.databaseId ?? '';
    const flightNumber =
      this.props.flightNumber == null ? '' : this.props.flightNumber;
    return `pkpasses/${this.props.bookingId}/${flightNumber}/${databaseId}`;
  };

  downloadPkpass = async () => {
    try {
      const { data, flightNumber } = this.props;
      const url = data.url ?? '';
      const databaseId = data.passenger?.databaseId;

      if (flightNumber != null && databaseId != null) {
        const folderPath = this.getFolderPath();
        const pkPath = `${folderPath}/pass.pkpass`;

        await AssetsDownloader(pkPath, url, true);

        await unzip(pkPath, folderPath);
        this.setState({ isDownloaded: true });
      } else {
        // TODO: Show alert inform about missing data
      }
    } catch (err) {
      // TODO: Clean up, there is a possability that there has been stored an empty file
      console.warn(err);
    }
  };

  render() {
    const onPress = Platform.select({
      ios: this.onPressIos,
      android: this.onPressAndroid,
    });

    return (
      <Touchable onPress={onPress} style={styles.row}>
        <React.Fragment>
          <Translation passThrough={this.props.data.passenger?.fullName} />
          {Platform.select({
            android: this.state.isDownloaded ? (
              <TextIcon code="V" style={styles.icon} />
            ) : (
              <TextIcon code="&#xe014;" style={styles.icon} />
            ),
            ios: <TextIcon code="&#xe01F;" style={styles.icon} />,
          })}
        </React.Fragment>
      </Touchable>
    );
  }
}

type Props = {|
  +data: AppleWalletType,
  +navigation: NavigationType,
  +segmentId: ?string,
  +flightNumber: ?number,
|};

const WalletPassengerWithContext = (props: Props) => (
  <BookingDetailContext.Consumer>
    {({ bookingId }) => (
      <WalletContext.Consumer>
        {({ actions: { addPkpassData } }) => (
          <WalletPassenger
            {...props}
            addPkpassData={addPkpassData}
            bookingId={bookingId}
          />
        )}
      </WalletContext.Consumer>
    )}
  </BookingDetailContext.Consumer>
);

export default createFragmentContainer(
  withNavigation(WalletPassengerWithContext),
  graphql`
    fragment WalletPassenger on Pkpass {
      url
      passenger {
        fullName
        databaseId
      }
    }
  `,
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: defaultTokens.paletteCloudLight,
    paddingVertical: 20,
  },
  icon: {
    fontSize: 26,
    color: defaultTokens.paletteProductNormal,
  },
});
