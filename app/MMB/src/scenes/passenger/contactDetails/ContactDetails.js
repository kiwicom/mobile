// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import {
  TitledMenuGroup,
  MenuGroup,
  SeparatorTrimmed,
} from '@kiwicom/mobile-navigation';

import ContactMenuItem from './ContactMenuItem';
import type { ContactDetails_contactDetails as ContactDetailsType } from './__generated__/ContactDetails_contactDetails.graphql';

type Props = {|
  contactDetails: ContactDetailsType,
|};

const ContactDetails = (props: Props) => (
  <TitledMenuGroup
    title={<Translation id="mmb.passengers.title.contact_details" />}
  >
    <MenuGroup
      customSeparator={<SeparatorTrimmed gapSizeStart={15} gapSizeEnd={15} />}
    >
      <ContactMenuItem
        title={<Translation id="mmb.passengers.email" />}
        value={<Translation passThrough={props.contactDetails.email} />}
      />
      <ContactMenuItem
        title={<Translation id="mmb.passengers.phone" />}
        value={<Translation passThrough={props.contactDetails.phone} />}
      />
    </MenuGroup>
  </TitledMenuGroup>
);

export default createFragmentContainer(
  ContactDetails,
  graphql`
    fragment ContactDetails_contactDetails on BookingContactDetails {
      phone
      email
    }
  `,
);
