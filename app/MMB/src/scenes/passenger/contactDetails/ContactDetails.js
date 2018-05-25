// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { Translation } from '@kiwicom/mobile-localization';

import TitledMenuGroup from '../../../components/menu/TitledMenuGroup';
import ContactMenuItem from './ContactMenuItem';
import { SeparatorTrimmed } from '../../../components/Separators';
import MenuGroup from '../../../components/menu/MenuGroup';
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
        value={
          <Translation passThrough={idx(props.contactDetails, _ => _.email)} />
        }
      />
      <ContactMenuItem
        title={<Translation id="mmb.passengers.phone" />}
        value={
          <Translation passThrough={idx(props.contactDetails, _ => _.phone)} />
        }
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
