// @flow

import * as React from 'react';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import PaymentScene from '../../paymentScene/PaymentScene';

type Props = {|
  +navigation: NavigationType,
|};

export default class InsurancePaymentScreen extends React.Component<Props> {
  static navigationOptions = () => {
    return {
      headerTitle: (
        <HeaderTitle>
          <Translation id="mmb.trip_services.insurance.payment.title" />
        </HeaderTitle>
      ),
      headerStyle: {
        backgroundColor: defaultTokens.paletteWhite,
        borderBottomWidth: 0,
      },
    };
  };

  render() {
    return <PaymentScene />;
  }
}
