// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { TextButton, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { getCard } from '@kiwicom/rnmodules';

import OrderSummary from '../insuranceOverviewScene/orderSummary/OrderSummary';
import PaymentFormTitle from './PaymentFormTitle';
import CardOptions from './CardOptions';
import PaymentForm from './PaymentForm';
import InsurancePaymentContext from './InsurancePaymentContext';

const noop = () => {};

type CardType = {|
  +cardholder: string,
  +expiryMonth: string,
  +expiryYear: string,
  +number: string,
|};

type State = {|
  card: ?CardType,
  active: 'SAVED_CARD' | 'ANOTHER_CARD',
|};

export default class PaymentScene extends React.Component<{||}, State> {
  state = {
    card: null,
    active: 'ANOTHER_CARD',
  };

  async componentDidMount() {
    const card = await getCard();
    if (card != null) {
      this.setState({ card, active: 'SAVED_CARD' });
    }
  }

  onPressPaymentButton = () => {
    console.warn('TODO');
  };

  setActiveCard = (pressed: 'SAVED_CARD' | 'ANOTHER_CARD') => {
    if (this.state.active !== pressed) {
      this.setState({
        active: pressed,
      });
    }
  };

  render() {
    const isAnotherCardActive = this.state.active === 'ANOTHER_CARD';

    const cardDigits =
      this.state.card != null ? this.state.card.number.slice(-4) : '';

    return (
      <React.Fragment>
        <InsurancePaymentContext.Provider>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.formRow}>
                <PaymentFormTitle />
              </View>
              {this.state.card != null && (
                <CardOptions
                  active={this.state.active}
                  setActiveCard={this.setActiveCard}
                  onSavedCardSecurityCodeChange={noop}
                  cardDigits={cardDigits}
                />
              )}

              {isAnotherCardActive && <PaymentForm />}
            </View>
            <View style={[styles.container, styles.buttonContainer]}>
              <TextButton
                title={
                  <Translation id="mmb.trip_services.insurance.payment.pay_now" />
                }
                onPress={this.onPressPaymentButton}
                // TODO
                disabled={true}
              />
            </View>
          </ScrollView>
        </InsurancePaymentContext.Provider>
        <OrderSummary />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTokens.paletteWhite,
    padding: 10,
  },
  formRow: {
    paddingTop: 15,
    paddingBottom: 5,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
