// @flow strict

import * as React from 'react';
import { Platform, View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import idx from 'idx';
import { StyleSheet, SimpleCard, Text, Button } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Alert from '../components/alert/Alert';
import BookingDetailContext from '../context/BookingDetailContext';
import type { MissingInformation as PassengerType } from './__generated__/MissingInformation.graphql';

type PropsWithContext = {|
  ...Props,
  +setIsMissingDocumentId: (isMissingDocumentId: boolean) => void,
|};

export class MissingInformation extends React.Component<PropsWithContext> {
  componentDidMount = () => {
    this.props.setIsMissingDocumentId(this.isSomePassengerMissingId());
  };

  isSomePassengerMissingId = () => {
    const passengers = idx(this.props.data, _ => _.passengers) || [];
    return passengers.some(
      passenger => idx(passenger, _ => _.travelDocument.idNumber) == null,
    );
  };

  fillInPassengerInfo = () => {
    this.props.navigation.navigate('TravelDocumentScreen');
  };

  render = () => {
    if (!this.isSomePassengerMissingId()) {
      return null;
    }

    const alert = (
      <Alert
        type="danger"
        title={
          <Translation id="mmb.missing_information.missing_informations" />
        }
        titleStyle={styles.alertText}
      />
    );

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && alert}
        <SimpleCard style={styles.card}>
          <React.Fragment>
            {Platform.OS === 'android' && alert}
            <View style={styles.cardContent}>
              <Text style={styles.missingInformationText}>
                <Translation id="mmb.missing_information.fill_in_information" />
              </Text>
              <Button onPress={this.fillInPassengerInfo}>
                <Text style={styles.buttonText}>
                  <Translation id="mmb.missing_information.button_text" />
                </Text>
              </Button>
            </View>
          </React.Fragment>
        </SimpleCard>
      </View>
    );
  };
}

type Props = {|
  +data: PassengerType,
  +navigation: NavigationType,
|};

const MissingInformationWithContext = (props: Props) => (
  <BookingDetailContext.Consumer>
    {({ actions: { setIsMissingDocumentId } }) => (
      <MissingInformation
        {...props}
        setIsMissingDocumentId={setIsMissingDocumentId}
      />
    )}
  </BookingDetailContext.Consumer>
);

export default createFragmentContainer(
  withNavigation(MissingInformationWithContext),
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
  card: {
    padding: 0,
  },
  cardContent: {
    padding: 10,
  },
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
    color: defaultTokens.paletteWhite,
  },
});
