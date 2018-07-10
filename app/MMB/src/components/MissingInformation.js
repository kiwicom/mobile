// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import type { NavigationType } from '@kiwicom/mobile-navigation';
import idx from 'idx';
import { View } from 'react-native';
import {
  StyleSheet,
  SimpleCard,
  Text,
  Button,
  Color,
} from '@kiwicom/mobile-shared';
import { withNavigation } from 'react-navigation';

import Alert from '../components/alert/Alert';
import type { MissingInformation as PassengerType } from './__generated__/MissingInformation.graphql';

type Props = {|
  +data: PassengerType,
  +navigation: NavigationType,
|};

export class MissingInformation extends React.Component<Props> {
  fillInPassengerInfo = () => {
    this.props.navigation.navigate({
      routeName: 'TravelDocumentScreen',
      key: 'key-TravelDocumentScreen',
    });
  };

  render = () => {
    const passengers = idx(this.props.data, _ => _.passengers) || [];
    const isPassengerMissingId = passengers.some(
      passenger => idx(passenger, _ => _.travelDocument.idNumber) == null,
    );

    if (!isPassengerMissingId) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Alert
          type="danger"
          title={
            <Translation id="mmb.missing_information.missing_informations" />
          }
          titleStyle={styles.alertText}
        />
        <SimpleCard>
          <Text style={styles.missingInformationText}>
            <Translation id="mmb.missing_information.fill_in_information" />
          </Text>
          <Button onPress={this.fillInPassengerInfo}>
            <Text style={styles.buttonText}>
              <Translation id="mmb.missing_information.button_text" />
            </Text>
          </Button>
        </SimpleCard>
      </View>
    );
  };
}

export default createFragmentContainer(
  withNavigation(MissingInformation),
  graphql`
    fragment MissingInformation on BookingInterface {
      passengers {
        travelDocument {
          idNumber
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  alertText: {
    fontSize: 14,
    fontWeight: '600',
    padding: 9,
  },
  missingInformationText: {
    marginTop: 5,
    marginHorizontal: 5,
    marginBottom: 15,
  },
  buttonText: {
    fontWeight: '600',
    color: Color.white,
  },
});
