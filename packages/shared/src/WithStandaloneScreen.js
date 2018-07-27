// @flow

import * as React from 'react';
import { HeaderBackButton } from 'react-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import {
  GestureController,
  Color,
  HeaderButton,
  StyleSheet,
  Text,
} from '@kiwicom/mobile-shared';
import { type NavigationType } from '@kiwicom/mobile-navigation';

type NavProps = {
  ...NavigationType,
  +onBackClicked: () => void,
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

      const options = {
        headerLeft:
          props.lastNavigationMode && props.lastNavigationMode === 'present' ? (
            <HeaderButton.Left onPress={closeNativeModal}>
              <Text style={styles.closeButton}>
                <Translation id="shared.button.close" />
              </Text>
            </HeaderButton.Left>
          ) : (
            <HeaderBackButton
              tintColor={Color.brand}
              onPress={props.onBackClicked}
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

const styles = StyleSheet.create({
  closeButton: {
    color: Color.brand,
    fontWeight: '600',
    android: {
      fontSize: 18,
    },
    ios: {
      fontSize: 17,
    },
  },
});

export default withStandaloneScreen;
