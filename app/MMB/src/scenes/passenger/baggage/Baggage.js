// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import {
  TitledMenuGroup,
  MenuGroup,
  SeparatorTrimmed,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import CabinBags from './CabinBags';
import CheckedBaggage from './CheckedBaggage';
import type { Baggage as BaggageType } from './__generated__/Baggage.graphql';

type Props = {|
  +data: BaggageType,
|};

const Baggage = (props: Props) => (
  <TitledMenuGroup title={<Translation passThrough="Baggage" />}>
    <MenuGroup
      customSeparator={<SeparatorTrimmed gapSizeStart={15} gapSizeEnd={15} />}
    >
      <CabinBags data={idx(props.data, _ => _.allowedBaggage)} />
      <CheckedBaggage data={idx(props.data, _ => _.allowedBaggage)} />
    </MenuGroup>
  </TitledMenuGroup>
);

export default createFragmentContainer(
  Baggage,
  graphql`
    fragment Baggage on BookingInterface {
      allowedBaggage {
        ...CabinBags
        ...CheckedBaggage
      }
    }
  `,
);
