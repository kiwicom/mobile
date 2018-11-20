// @flow

import * as React from 'react';
import { HeaderBackButton } from 'react-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { HeaderButton, type NavigationType } from '@kiwicom/mobile-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import GestureController from './GestureController';

type NavProps = {
  ...NavigationType,
  +isStandAlonePackage?: boolean,
  +onBackClicked: () => void,
  +goBack?: () => void,
  +lastNavigationMode?: string,
};

function withStandaloneScreen<Props>(
  WrappedComponent: React.ComponentType<Props>,
  moduleName: string,
): React.ComponentType<Props> {
  return class WithStandaloneScreen extends React.Component<*> {
    static navigationOptions = (props: NavProps) => {
      function closeNativeModal() {
        GestureController.closeModal(moduleName);
      }

      const showAsModal =
        (typeof props.isStandAlonePackage === 'undefined' ||
          props.isStandAlonePackage) &&
        props.lastNavigationMode &&
        props.lastNavigationMode === 'present';

      const options = {
        headerLeft: showAsModal ? (
          <HeaderButton.Left onPress={closeNativeModal}>
            <HeaderButton.Text>
              <Translation id="shared.button.close" />
            </HeaderButton.Text>
          </HeaderButton.Left>
        ) : (
          <HeaderBackButton
            tintColor={defaultTokens.paletteProductNormal}
            onPress={props.goBack ? props.goBack : props.onBackClicked}
          />
        ),
      };

      let wrappedOptions = {};
      // $FlowExpectedError: Don't know how to type navigationOptions in HOC yet
      if (WrappedComponent.navigationOptions) {
        wrappedOptions =
          typeof WrappedComponent.navigationOptions === 'function'
            ? WrappedComponent.navigationOptions(props)
            : WrappedComponent.navigationOptions || {};
      }

      return {
        ...options,
        ...wrappedOptions,
      };
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withStandaloneScreen;
