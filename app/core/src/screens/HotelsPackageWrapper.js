// @flow

import * as React from 'react';
import { NativeModules } from 'react-native';
import HotelsStandalonePackage from '@kiwicom/react-native-app-hotels';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';
import idx from 'idx';

import Config from '../../config/application';

type Props = {|
  navigation: NavigationType,
|};

export default class HotelsPackageWrapper extends React.Component<Props> {
  goToHomepage = () => this.props.navigation.goBack();

  handleNavigation = () => {
    if (NativeModules.RNNavigationModule) {
      NativeModules.RNNavigationModule.leaveHotels();
    } else {
      this.goToHomepage();
    }
  };

  render = () => {
    const affiliate = String(Config.affiliate.bookingCom);
    const coordinates =
      idx(this.props, _ => _.navigation.state.params.coordinates) || null;

    return (
      <HotelsStandalonePackage
        bookingComAffiliate={affiliate}
        language="en"
        currency="EUR" // Only EUR is now fully supported as PriceFilter can't handle anything but EUR
        onBackClicked={this.handleNavigation}
        dataSaverEnabled={false}
        coordinates={coordinates}
      />
    );
  };
}
