// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import {
  TitledMenuGroup,
  MenuGroup,
  SeparatorTrimmed,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import CabinBags from './CabinBags';
import CheckedBaggage from './CheckedBaggage';
import BaggageGroupButton from './BaggageGroupButton';
import type { Baggage as BaggageType } from './__generated__/Baggage.graphql';

type Props = {|
  +data: BaggageType,
|};

const Baggage = ({ data }: Props) => (
  <TitledMenuGroup title={<Translation passThrough="Baggage" />}>
    <BaggageGroupButton>
      <MenuGroup
        customSeparator={<SeparatorTrimmed gapSizeStart={15} gapSizeEnd={15} />}
      >
        <CabinBags data={data.allowedBaggage} />
        <CheckedBaggage data={data.allowedBaggage} />
      </MenuGroup>
    </BaggageGroupButton>
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
