// @flow

import * as React from 'react';

/**
 * Regular expression for Mastercard card numbers.
 */
const MASTERCARD = /^5[1-5][0-9]*$/;

/**
 * Strict regular expression for Mastercard card numbers.
 */
const MASTERCARD_STRICT = /^5[1-5][0-9]{14}$/;

/**
 * Regular expression for Visa card numbers.
 */
const VISA = /^4[0-9]*$/;

/**
 * Strict regular expression for Visa card numbers.
 */
const VISA_STRICT = /^4[0-9]{12,18}$/;

/**
 * Regular expression for Maestro card numbers.
 */
const MAESTRO = /^(5018|5020|5038|5893|6304|6759|6761|6762|6763)[0-9]*$/;

/**
 * Strict regular expression for Maestro card numbers.
 */
const MAESTRO_STRICT = /^(5018|5020|5038|5893|6304|6759|6761|6762|6763)[0-9]{8,15}$/;

/**
 * Regular expression for American Express card numbers.
 */
const AMERICAN_EXPRESS = /^3[47][0-9]*$/;

/**
 * Strict regular expression for American Express card numbers.
 */
const AMERICAN_EXPRESS_STRICT = /^3[47][0-9]{13}$/;

/**
 * Regular expression for Discover card numbers.
 */
const DISCOVER = /^(6011|622[1-9]|64[4-9]|65)[0-9]*$/;

/**
 * Strict regular expression for Discover card numbers.
 */
const DISCOVER_STRICT = /^(6011|622[1-9]|64[4-9][0-9]|65[0-9]{2})[0-9]{12,15}$/;

/**
 * Regular expression for Diners Club card numbers.
 */
const DINERS_CLUB = /^(30[0-5]|309|36|3[89])[0-9]*$/;

/**
 * Strict regular expression for Diners Club card numbers.
 */
const DINERS_CLUB_STRICT = /^(30[0-5]|309|36[0-9]|3[89][0-9])[0-9]{11}$/;

/**
 * Regular expression for Mir card numbers.
 */
const MIR = /^220[0-4][0-9]*$/;

/**
 * Strict regular expression for Mir card numbers.
 */
const MIR_STRICT = /^220[0-4][0-9]{12}$/;

type CardType =
  | 'MASTERCARD'
  | 'VISA'
  | 'MAESTRO'
  | 'AMERICAN_EXPRESS'
  | 'DISCOVER'
  | 'DINERS_CLUB'
  | 'MIR'
  | 'UNKNOWN';

export function detectCardType(
  cardNumber: string,
  strict: boolean = false,
): CardType {
  if ((strict ? MASTERCARD_STRICT : MASTERCARD).test(cardNumber)) {
    return 'MASTERCARD';
  } else if ((strict ? VISA_STRICT : VISA).test(cardNumber)) {
    return 'VISA';
  } else if ((strict ? MAESTRO_STRICT : MAESTRO).test(cardNumber)) {
    return 'MAESTRO';
  } else if (
    (strict ? AMERICAN_EXPRESS_STRICT : AMERICAN_EXPRESS).test(cardNumber)
  ) {
    return 'AMERICAN_EXPRESS';
  } else if ((strict ? DISCOVER_STRICT : DISCOVER).test(cardNumber)) {
    return 'DISCOVER';
  } else if ((strict ? DINERS_CLUB_STRICT : DINERS_CLUB).test(cardNumber)) {
    return 'DINERS_CLUB';
  } else if ((strict ? MIR_STRICT : MIR).test(cardNumber)) {
    return 'MIR';
  }
  return 'UNKNOWN';
}

const defaultState = {
  cardNumber: '',
  cardType: 'UNKNOWN',
  expiryDate: { month: '', year: '' },
  securityCode: '',
  cardholderName: '',
  remember: false,
  actions: {
    onCardChange: () => {},
    onExpiryDateChange: () => {},
    onSecurityCodeChange: () => {},
    onCardholderNameChange: () => {},
    onRememberCardChange: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
|};

type State = {|
  cardNumber: string,
  cardType: string,
  expiryDate: {| month: string, year: string |},
  securityCode: string,
  cardholderName: string,
  remember: boolean,
  +actions: {|
    +onCardChange: (cardNumber: string) => void,
    +onExpiryDateChange: (expiryDate: {|
      month: string,
      year: string,
    |}) => void,
    +onSecurityCodeChange: (securityCode: string) => void,
    +onCardholderNameChange: (cardholderName: string) => void,
    +onRememberCardChange: (remember: boolean) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      actions: {
        onCardChange: this.onCardChange,
        onExpiryDateChange: this.onExpiryDateChange,
        onSecurityCodeChange: this.onSecurityCodeChange,
        onCardholderNameChange: this.onCardholderNameChange,
        onRememberCardChange: this.onRememberCardChange,
      },
    };
  }

  onCardChange = (cardNumber: string) => {
    const cardType = detectCardType(cardNumber);
    this.setState({ cardNumber, cardType });
  };

  onExpiryDateChange = (expiryDate: {| month: string, year: string |}) => {
    this.setState({ expiryDate });
  };

  onSecurityCodeChange = (securityCode: string) => {
    this.setState({ securityCode });
  };

  onCardholderNameChange = (cardholderName: string) => {
    this.setState({ cardholderName });
  };

  onRememberCardChange = (remember: boolean) => {
    this.setState({ remember });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

export function withInsurancePaymentContext(select: (state: State) => Object) {
  return function(Component: React.ElementType) {
    const WithInsurancePaymentContext = (props: Object) => {
      const mapStateToProps = state => {
        const stateProps = select(state);
        return <Component {...props} {...stateProps} />;
      };

      return <Consumer>{mapStateToProps}</Consumer>;
    };

    // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
    if (Component.navigationOptions) {
      WithInsurancePaymentContext.navigationOptions =
        Component.navigationOptions;
    }
    return WithInsurancePaymentContext;
  };
}
