// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, Color, Icon, Touchable } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { withNavigation } from 'react-navigation';
import type { NavigationType } from '@kiwicom/mobile-navigation';

import PassengerSubtitle from './PassengerSubtitle';
import PassengerMenuRightContent from './PassengerMenuRightContent';
import type { PassengerMenuItem as PassengerType } from './__generated__/PassengerMenuItem.graphql';

type Props = {|
  +data: PassengerType,
  +navigation: NavigationType,
|};

class PassengerMenuItem extends React.Component<Props> {
  onPress = () => {
    this.props.navigation.navigate({
      routeName: 'TravelDocumentModalScreen',
      key: 'key-TravelDocumentModalScreen',
    });
  };

  render = () => {
    const date = idx(this.props.data, _ => _.travelDocument.expiration) || null;
    const idNumber =
      idx(this.props.data, _ => _.travelDocument.idNumber) || null;

    return (
      <Touchable onPress={this.onPress} disabled={idNumber !== null}>
        <View style={styles.container}>
          <View>
            <Translation passThrough={idx(this.props.data, _ => _.fullName)} />
            <PassengerSubtitle expirationDate={date} idNumber={idNumber} />
          </View>
          <View style={styles.rightContent}>
            <PassengerMenuRightContent idNumber={idNumber} />
            {Platform.select({
              android: null,
              ios: <Icon name="chevron-right" size={26} color={Color.brand} />,
            })}
          </View>
        </View>
      </Touchable>
    );
  };
}
export default createFragmentContainer(
  withNavigation(PassengerMenuItem),
  graphql`
    fragment PassengerMenuItem on Passenger {
      fullName
      travelDocument {
        idNumber
        expiration
      }
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
