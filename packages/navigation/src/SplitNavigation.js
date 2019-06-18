// @flow

import * as React from 'react';
import { AdaptableLayout, LayoutDoubleColumn } from '@kiwicom/mobile-shared';

import type { RouteNames, Navigation } from '../types/Navigation';

type Props = {|
  +navigation: Navigation,
  +containerComponents: {
    [string]: {
      +screen:
        | React.ComponentType<any>
        | React.StatelessFunctionalComponent<any>,
      ...
    },
    ...,
  },
  +menuComponent: React.Element<any>,
  +initialActiveId: string,
  +onContentChange: (key: string) => void,
|};

type State = {|
  activeId: string,
|};

const { Provider, Consumer: _Consumer } = React.createContext<State>({
  activeId: '',
});

export const Consumer = _Consumer;

export default class SplitNavigation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeId: props.initialActiveId,
    };
  }

  /**
   * Do proper navigation transition on mobile (narrow) devices.
   */
  navigate = (key: RouteNames) => {
    this.props.navigation.navigate({
      routeName: key,
    });
  };

  /**
   * Just change container content for tablets. It's also necessary to change
   * the header title.
   */
  changeContentOnTablet = (activeId: string) => {
    this.setState({ activeId });
    this.props.onContentChange(activeId);
  };

  getContainerComponent = () =>
    this.props.containerComponents[this.state.activeId].screen;

  render() {
    const MainMenuContainerWide = React.cloneElement(this.props.menuComponent, {
      onNavigate: this.changeContentOnTablet,
    });
    const MainMenuContainerNarrow = React.cloneElement(
      this.props.menuComponent,
      {
        onNavigate: this.navigate,
      },
    );
    const ContainerComponent = this.getContainerComponent();
    return (
      <Provider value={this.state}>
        <LayoutDoubleColumn
          menuComponent={
            <AdaptableLayout
              renderOnWide={MainMenuContainerWide}
              renderOnNarrow={MainMenuContainerNarrow}
            />
          }
          containerComponent={<ContainerComponent />}
        />
      </Provider>
    );
  }
}
