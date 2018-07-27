// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  type NavigationType,
  HeaderTitle,
  HeaderButton,
} from '@kiwicom/mobile-navigation';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { StyleSheet, Color, IconLoading } from '@kiwicom/mobile-shared';
import { withAuthContext } from '@kiwicom/mobile-relay';

import updatePassengerMutation from './mutation/UpdatePassenger';
import { withFormContext } from '../scenes/travelDocument/form/TravelDocumentFormContext';
import TravelDocumentForm from '../scenes/travelDocument/form/TravelDocumentForm';

type Props = {|
  +navigation: NavigationType,
  +title: string,
  +fullName: string,
  +passengerId: number,
  +bookingId: string,
  +accessToken: string,
  +idNumber: string,
  +expiryDate: Date | null,
  +noExpiry: boolean,
  +onIdNumberChange: (idNumber: string) => void,
  +onDateChange: (date: Date) => void,
  +onNoExpiryChange: (noExpiry: boolean) => void,
  +reset: () => void,
|};

type State = {|
  isSubmitting: boolean,
|};

const noop = () => {};

export class TravelDocumentModalScreen extends React.Component<Props, State> {
  state = {
    isSubmitting: false,
  };

  static navigationOptions = ({ navigation }: Props) => {
    function goBack() {
      navigation.goBack(null);
    }
    const onSave = navigation.state.params.onSave || noop;
    return {
      headerLeft: (
        <HeaderButton onPress={goBack}>
          <Translation id="mmb.missing_informaiton.travel_document_modal_screen.close" />
        </HeaderButton>
      ),
      headerTitle: (
        <HeaderTitle>
          <Translation id="mmb.fill_travel_document_screen_modal.title" />
        </HeaderTitle>
      ),
      headerRight: (
        <HeaderButton
          onPress={onSave}
          disabled={navigation.state.params.disabled}
        >
          <Translation id="mmb.missing_informaiton.travel_document_modal_screen.save" />
        </HeaderButton>
      ),
      gesturesEnabled: false,
    };
  };

  componentDidMount = () => {
    this.props.navigation.setParams({ onSave: this.onSave, disabled: true });
  };

  componentDidUpdate = (prevProps: Props) => {
    if (
      prevProps.idNumber !== this.props.idNumber ||
      prevProps.expiryDate !== this.props.expiryDate ||
      prevProps.noExpiry !== this.props.noExpiry
    ) {
      const expiryError = this.props.noExpiry
        ? false
        : this.props.expiryDate === null;
      const hasError = this.props.idNumber.length < 5 || expiryError;

      this.props.navigation.setParams({
        disabled: hasError,
      });
    }
  };

  componentWillUnmount = () => {
    this.props.reset();
  };

  onSave = () => {
    const { bookingId, passengerId, accessToken } = this.props;
    this.setState({ isSubmitting: true });
    this.props.navigation.setParams({ disabled: true });
    updatePassengerMutation(
      {
        id: bookingId,
        passengers: [
          {
            passengerId,
            documentExpiry:
              this.props.expiryDate === null
                ? null
                : DateFormatter(this.props.expiryDate).formatForMachine(),
            documentNumber: this.props.idNumber,
          },
        ],
      },
      (response, errors) => {
        if (!errors) {
          this.props.navigation.goBack();
        } else {
          // TODO: Show some error message
        }
        this.setState({ isSubmitting: false });
        this.props.navigation.setParams({ disabled: false });
      },
      accessToken,
    );
  };

  render = () => {
    const { title, fullName } = this.props;
    return (
      <View style={styles.container}>
        <TravelDocumentForm fullName={fullName} title={title} />
        {this.state.isSubmitting && <IconLoading />}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Color.white,
  },
});

export default withFormContext(withAuthContext(TravelDocumentModalScreen));
