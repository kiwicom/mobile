// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation, Alert } from '@kiwicom/mobile-localization';
import {
  TextButton,
  Text,
  StyleSheet,
  ModalWithLoader,
} from '@kiwicom/mobile-shared';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import { withBookingDetailContext } from '../../../../context/BookingDetailContext';
import { withAllInsuranceContext } from '../insuranceOverviewScene/InsuranceOverviewSceneContext';
import refundInsuranceMutation from './mutation/RefundInsurance';

type InsuranceType = 'NONE' | 'TRAVEL_BASIC' | 'TRAVEL_PLUS';

type Change = {|
  +databaseId: ?number,
  +from: ?InsuranceType,
  +to: ?InsuranceType,
|};

type Props = {|
  +changes: Change[],
  +bookingId: string,
  +authToken: string,
  +refundMutationSuccesful: () => void,
  +navigation: NavigationType,
  +id: string,
|};
type State = {|
  isSubmitting: boolean,
|};
export class RefundScene extends React.Component<Props, State> {
  state = {
    isSubmitting: false,
  };

  onPress = () => {
    const { bookingId, changes, authToken } = this.props;

    const passengers = [];
    changes.forEach(change => {
      if (change.databaseId && change.to) {
        passengers.push({
          passengerId: change.databaseId,
          insuranceType: change.to,
        });
      }
    });

    this.setState({ isSubmitting: true });
    this.props.navigation.setParams({ disabled: true });
    refundInsuranceMutation(
      {
        id: bookingId,
        simpleToken: authToken,
        passengers,
      },
      this.props.id,
      (response, errors) => {
        this.setState({ isSubmitting: false });
        this.props.navigation.setParams({ disabled: false });
        // BUG when using alerts and modals together: https://github.com/facebook/react-native/issues/10471
        setTimeout(() => {
          if (!errors) {
            this.props.refundMutationSuccesful();
            this.props.navigation.goBack();
            Alert.translatedAlert(null, {
              id: 'mmb.trip_services.insurance.refund.successful',
            });
          } else {
            Alert.translatedAlert(
              { id: 'mmb.trip_services.insurance.refund.problem.title' },
              {
                id: 'mmb.trip_services.insurance.refund.problem.message',
              },
            );
          }
        }, 300);
      },
    );
  };

  noop = () => {};

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text style={[styles.title, styles.marginVertical]}>
            <Translation id="mmb.trip_services.insurance.refund.cancellation_requested" />
          </Text>
          <Text style={styles.marginVertical}>
            <Translation id="mmb.trip_services.insurance.refund.cancellation_requested.comment" />
          </Text>
          <View style={styles.marginVertical}>
            <TextButton
              title={
                <Translation id="mmb.trip_services.insurance.refund.confirm" />
              }
              onPress={this.onPress}
            />
          </View>
        </View>
        <ModalWithLoader
          isVisible={this.state.isSubmitting}
          onRequestClose={this.noop}
        >
          <Translation id="mmb.trip_services.insurance.refund.processing" />
        </ModalWithLoader>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  marginVertical: {
    marginVertical: 10,
  },
});

export default withNavigation(
  withAllInsuranceContext(
    withBookingDetailContext(state => ({
      authToken: state.authToken,
      bookingId: state.id,
      id: state.id,
    }))(RefundScene),
  ),
);
