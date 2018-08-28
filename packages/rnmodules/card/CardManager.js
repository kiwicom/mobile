// @flow

import { NativeModules } from 'react-native';

type CardType = {
  cardholder: string,
  expiry: {
    month: number,
    year: number,
  },
  number: string,
};

export const getCard = (): Promise<CardType> => {
  return NativeModules.RNCardManager.getCard();
};

export const saveCard = (card: CardType) => {
  NativeModules.RNCardManager.saveCard(card);
};
