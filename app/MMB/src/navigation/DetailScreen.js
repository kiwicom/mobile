// @flow

import * as React from 'react';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';
import { AdaptableLayout } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import Layout from '../Layout';
import MainMenu from '../menu/MainMenu';
import HelpSubmenu from '../menu/HelpSubmenu';
import OtherSubmenu, { OtherSubmenuItems } from '../menu/OtherSubmenu';

type Props = {|
  bookingId: string,
  navigation: NavigationType,
|};

type State = {|
  activeContainerComponent: string,
|};

export const MenuComponents = {
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
  ...OtherSubmenuItems,
};

export default class DetailsScreen extends React.Component<Props, State> {
  state = {
    activeContainerComponent: 'mmb.other',
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
      params: {
        bookingId: this.props.bookingId,
      },
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
          <ContainerComponent
            navigation={this.props.navigation}
            bookingId={this.props.bookingId}
          />
        }
      />
    );
  };
}
