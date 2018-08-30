// @flow

import { NativeModules } from 'react-native';

type CardType = {
  cardholder: string,
  expiryMonth: string,
  expiryYear: string,
  number: string,
};

export const getCard = (): Promise<CardType> | null => {
  return NativeModules.RNCardManager.getCard();
};

export const saveCard = (card: CardType) => {
  NativeModules.RNCardManager.saveCard(card);
};
