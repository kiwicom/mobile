// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, TextIcon } from '@kiwicom/mobile-shared';

import SecurityCodeInput from './SecurityCodeInput';
import CardOption from './CardOption';
import VisaLogo from './images/VisaLogo.imageset/visa_logo.png';

type Props = {|
  +cardDigits: string,
  +active: 'SAVED_CARD' | 'ANOTHER_CARD',
  +setActiveCard: (active: 'SAVED_CARD' | 'ANOTHER_CARD') => void,
  +onSavedCardSecurityCodeChange: () => void,
|};

export default class PaymentScene extends React.Component<Props> {
  onPressAnotherCard = () => {
    this.props.setActiveCard('ANOTHER_CARD');
  };

  onPressSavedCard = () => {
    this.props.setActiveCard('SAVED_CARD');
  };

  render() {
    const isSavedCardActive = this.props.active === 'SAVED_CARD';
    const isAnotherCardActive = this.props.active === 'ANOTHER_CARD';

    return (
      <React.Fragment>
        <View style={styles.savedCardContainer}>
          <View style={styles.savedCard}>
            <CardOption
              leftIcon={
                // TODO Choose image depending on the type of the card
                <Image source={VisaLogo} resizeMode="contain" />
              }
              isActive={isSavedCardActive}
              onPress={this.onPressSavedCard}
              cardOption={
                <Translation
                  id="mmb.trip_services.insurance.payment.card"
                  values={{ digits: this.props.cardDigits }}
                />
              }
            />
          </View>
          {isSavedCardActive && (
            <View style={styles.securityCode}>
              <SecurityCodeInput
                onSecurityCodeChange={this.props.onSavedCardSecurityCodeChange}
                inputWrapperStyle={styles.inputWrapperStyle}
                displayLabel={false}
                placeholder={
                  <Translation id="mmb.trip_services.insurance.payment.CVV" />
                }
                placeholderStyle={styles.placeholder}
              />
            </View>
          )}
        </View>

        <CardOption
          leftIcon={<TextIcon code="&#xe034;" />}
          isActive={isAnotherCardActive}
          onPress={this.onPressAnotherCard}
          cardOption={
            <Translation id="mmb.trip_services.insurance.payment.use_another_card" />
          }
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapperStyle: {
    android: {
      elevation: 1,
      height: 38,
    },
    ios: {
      height: 37,
    },
  },
  placeholder: {
    paddingVertical: 10,
  },
  savedCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  savedCard: {
    flex: 1,
  },
  securityCode: {
    flex: 0.5,
    marginStart: 10,
  },
});
