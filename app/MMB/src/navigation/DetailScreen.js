// @flow

import * as React from 'react';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';
import { AdaptableLayout } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import Layout from '../components/Layout';
import MainMenu from '../MainMenu';
import HelpSubmenu, { HelpSubmenuItems } from '../scenes/help';
import OtherSubmenu, { OtherSubmenuItems } from '../scenes/Other';
import FlightServices, {
  FlightServicesSubmenuItems,
} from '../scenes/flightServices/FlightServices';
import TripServices from '../scenes/TripServices';
import PassengerDetailContainer from '../scenes/passenger/PassengerDetailContainer';

export const MenuComponents = {
  'mmb.passenger_detail': {
    screen: PassengerDetailContainer,
    headerTitle: function PassengerDetailHeaderTitle() {
      return (
        <HeaderTitle>
          <Translation id="mmb.title.passengers" />
        </HeaderTitle>
      );
    },
  },
  'mmb.flight_services': {
    screen: FlightServices,
    headerTitle: function FlightServicesHeaderTitle() {
      return (
        <HeaderTitle>
          <Translation id="mmb.flight_services.title" />
        </HeaderTitle>
      );
    },
  },
  'mmb.trip_services': {
    screen: TripServices,
    headerTitle: function TripServicesHeaderTitle() {
      return (
        <HeaderTitle>
          <Translation id="mmb.trip_services.title" />
        </HeaderTitle>
      );
    },
  },
  'mmb.help': {
    screen: HelpSubmenu,
    headerTitle: function HelpSubmenuHeaderTitle() {
      return (
        <HeaderTitle>
          <Translation id="mmb.sub_menu.help.title" />
        </HeaderTitle>
      );
    },
  },
  'mmb.other': {
    screen: OtherSubmenu,
    headerTitle: function OtherSubmenuHeaderTitle() {
      return (
        <HeaderTitle>
          <Translation id="mmb.sub_menu.manage.other.title" />
        </HeaderTitle>
      );
    },
  },
  ...FlightServicesSubmenuItems,
  ...HelpSubmenuItems,
  ...OtherSubmenuItems,
};

type Props = {|
  +navigation: NavigationType,
|};

type State = {|
  activeContainerComponent: string,
|};

export default class DetailsScreen extends React.Component<Props, State> {
  state = {
    activeContainerComponent: 'mmb.passenger_detail',
  };

  static navigationOptions = (props: {| navigation: NavigationType |}) => {
    const params = props.navigation.state.params;

    if (params && params.activeContainerComponent) {
      const Title = MenuComponents[params.activeContainerComponent].headerTitle;
      return {
        headerTitle: Title,
      };
    }

    return {
      headerTitle: (
        <HeaderTitle>
          <Translation id="mmb.main_menu.title" />
        </HeaderTitle>
      ),
    };
  };

  /**
   * Do proper navigation transition on mobile (narrow) devices.
   */
  openMenuOnMobile = (key: string) => {
    // $FlowExpectedError: Flow type for this navigation seems to be quite challenging. I am skipping it on purpose.
    this.props.navigation.navigate({
      routeName: key,
      key: `key-${key}`,
    });
  };
  /**
   * Just change container content for tablets. It's also necessary to change
   * the header title.
   */
  changeContentOnTablet = (key: string) => {
    this.props.navigation.setParams({ activeContainerComponent: key });
    this.setState({
      activeContainerComponent: key,
    });
  };

  getContainerComponent = (key: string) => {
    return MenuComponents[key];
  };

  render = () => {
    const ContainerComponent = this.getContainerComponent(
      this.state.activeContainerComponent,
    ).screen;

    return (
      <Layout
        menuComponent={
          <AdaptableLayout.Consumer
            renderOnWide={<MainMenu openMenu={this.changeContentOnTablet} />}
            renderOnNarrow={<MainMenu openMenu={this.openMenuOnMobile} />}
          />
        }
        containerComponent={
          <ContainerComponent navigation={this.props.navigation} />
        }
      />
    );
  };
}
