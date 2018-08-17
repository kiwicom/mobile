// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  type NavigationType,
  HeaderButton,
  HeaderTitle,
} from '@kiwicom/mobile-navigation';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { StyleSheet, IconLoading } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import updatePassengerMutation from './mutation/UpdatePassenger';
import { withBookingDetailContext } from '../context/BookingDetailContext';
import { withFormContext } from '../scenes/travelDocument/form/TravelDocumentFormContext';
import TravelDocumentForm from '../scenes/travelDocument/form/TravelDocumentForm';

type Props = {|
  +navigation: NavigationType,
  +title: string,
  +fullName: string,
  +passengerId: number,
  +bookingId: string,
  +authToken: string,
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
      headerLeft: <HeaderButton.CloseModal onPress={goBack} />,
      headerTitle: (
        <HeaderTitle>
          <Translation id="mmb.fill_travel_document_screen_modal.title" />
        </HeaderTitle>
      ),
      headerRight: (
        <HeaderButton.Right
          disabled={navigation.state.params.disabled}
          onPress={onSave}
        >
          <HeaderButton.Text>
            <Translation id="mmb.missing_informaiton.travel_document_modal_screen.save" />
          </HeaderButton.Text>
        </HeaderButton.Right>
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
    const { bookingId, passengerId, authToken } = this.props;
    this.setState({ isSubmitting: true });
    this.props.navigation.setParams({ disabled: true });
    updatePassengerMutation(
      {
        id: bookingId,
        simpleToken: authToken,
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
    backgroundColor: defaultTokens.paletteWhite,
  },
});

export default withFormContext(
  withBookingDetailContext(state => ({
    authToken: state.authToken,
    bookingId: state.id,
  }))(TravelDocumentModalScreen),
);
