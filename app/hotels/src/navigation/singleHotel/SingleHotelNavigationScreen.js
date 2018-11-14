// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';
import { WithStandaloneScreen } from '@kiwicom/mobile-shared';

import SingleHotel from '../../singleHotel/SingleHotelContainer';
import type { NavigationProps } from '../HotelsNavigationStack';
import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';

type Props = {
  ...NavigationProps,
  ...AvailableHotelSearchInput,
  +onBackClicked: () => void,
  +isStandAlonePackage?: boolean,
};

class SingleHotelNavigationScreen extends React.Component<Props> {
  static defaultProps = {
    isStandAlonePackage: false,
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.navigation.setParams({
      goBack: this.goBack,
      isStandAlonePackage: this.props.isStandAlonePackage,
    });
  }

  goBack = () => {
    if (this.props.isStandAlonePackage) {
      // onBackClick is passed down, even from `KiwiHotelsPackage`
      // so we need the isStandAlone boolean to know which action to take
      this.props.onBackClicked();
    } else {
      // Go back does nothing without null as a parameter
      this.props.navigation.goBack(null);
    }
  };

  render() {
    return <SingleHotel goBack={this.goBack} />;
  }
}

export default withMappedNavigationAndConfigProps(
  WithStandaloneScreen(SingleHotelNavigationScreen, 'SingleHotel'),
);
