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
import type { Baggage as BaggageType } from './__generated__/Baggage.graphql';

type Props = {|
  +data: BaggageType,
|};

const Baggage = (props: Props) => (
  <TitledMenuGroup title={<Translation passThrough="Baggage" />}>
    <MenuGroup
      customSeparator={<SeparatorTrimmed gapSizeStart={15} gapSizeEnd={15} />}
    >
      <CabinBags data={props.data.allowedBaggage} />
    </MenuGroup>
  </TitledMenuGroup>
);

export default createFragmentContainer(
  Baggage,
  graphql`
    fragment Baggage on BookingInterface {
      allowedBaggage {
        ...CabinBags
      }
    }
  `,
);
