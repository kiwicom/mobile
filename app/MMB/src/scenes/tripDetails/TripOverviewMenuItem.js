// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { MenuItem } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import {
  AdaptableLayout,
  TextIcon,
  StyleSheet,
  Color,
  Touchable,
} from '@kiwicom/mobile-shared';

type Props = {|
  +openSubmenu: (activeId: string, menuId: string) => void,
  +activeId: string,
|};

type State = {|
  expanded: boolean,
|};

export default class TripOverviewMenuItem extends React.Component<
  Props,
  State,
> {
  state = {
    expanded: false,
  };

  handleOpenTripOverviewSubmenu = () => {
    this.props.openSubmenu('mmb.main_menu.trip_overview', 'mmb.trip_overview');
  };

  renderTabletButton = () => {
    return (
      <MenuItem
        onPress={this.handleOpenTripOverviewSubmenu}
        title={<Translation id="mmb.flight_overview.title" />}
        isActive={this.props.activeId === 'mmb.main_menu.trip_overview'}
        icon={<TextIcon code="&#xe08f;" />}
      />
    );
  };

  renderMobileExpandableArea = () => {
    return (
      <View style={styleSheet.expandableWrapper}>
        <TextIcon code="l" />
        {this.state.expanded ? (
          <Translation passThrough="Small trip overview on the mobile" />
        ) : null}
      </View>
    );
  };

  toggleExpandable = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  };

  render = () => {
    return (
      <Touchable onPress={this.toggleExpandable} style={styleSheet.wrapper}>
        <AdaptableLayout.Consumer
          renderOnWide={this.renderTabletButton()}
          renderOnNarrow={this.renderMobileExpandableArea()}
        />
      </Touchable>
    );
  };
}

const styleSheet = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderTopColor: Color.border,
  },
  expandableWrapper: {
    minHeight: 25,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
