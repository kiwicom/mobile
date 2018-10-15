// @flow

import * as React from 'react';
import { Image } from 'react-native';

type CardType =
  | 'MASTERCARD'
  | 'VISA'
  | 'MAESTRO'
  | 'AMERICAN_EXPRESS'
  | 'DISCOVER'
  | 'DINERS_CLUB'
  | 'MIR'
  | 'UNKNOWN';

type Props = {|
  +cardType: CardType,
|};

const CardImage = ({ cardType }: Props) => {
  let source;
  switch (cardType) {
    case 'MASTERCARD': {
      source = require('./images/MasterCardLogo.imageset/mastercard.png');
      break;
    }
    case 'VISA': {
      source = require('./images/VisaLogo.imageset/visa.png');
      break;
    }
    case 'MAESTRO': {
      source = require('./images/MaestroLogo.imageset/maestro.png');
      break;
    }
    case 'AMERICAN_EXPRESS': {
      source = require('./images/AmexLogo.imageset/amex.png');
      break;
    }
    case 'DISCOVER': {
      source = require('./images/DiscoverLogo.imageset/discover.png');
      break;
    }
    case 'DINERS_CLUB': {
      source = require('./images/DinersLogo.imageset/diners.png');
      break;
    }
    case 'MIR': {
      source = require('./images/MirLogo.imageset/mir.png');
      break;
    }

    case 'UNKNOWN':
    default: {
      source = require('./images/all_cards.imageset/all_cards.png');
      break;
    }
  }
  return <Image source={source} mode="contain" />;
};

export default CardImage;
