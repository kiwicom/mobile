// @flow

import { NativeModules } from 'react-native';

type CardType = {
  cardholder: string,
  expiryMonth: number,
  expireYear: number,
  number: string,
};

export const getCard = (): Promise<CardType> | null => {
  return NativeModules.RNCardManager.getCard();
};

export const saveCard = (card: CardType) => {
  NativeModules.RNCardManager.saveCard(card);
};
