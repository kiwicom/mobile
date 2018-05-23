// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import TitledMenuGroup from '../../components/menu/TitledMenuGroup';
import MenuItem from '../../components/menu/MenuItem';
import type { ContactDetails_contactDetails as contactDetailsType } from './__generated__/ContactDetails_contactDetails.graphql';

type Props = {|
  contactDetails: contactDetailsType,
|};

const voidAction = () => {};

const ContactDetails = (props: Props) => (
  <TitledMenuGroup
    title={<Translation id="mmb.passengers.title.contact_details" />}
  >
    <MenuItem
      onPress={voidAction}
      title={<Translation id="mmb.passengers.email.label" />}
      description={
        <Translation passThrough={idx(props.contactDetails, _ => _.email)} />
      }
    />
    <MenuItem
      onPress={voidAction}
      title={<Translation id="mmb.passenger.phone.label" />}
      description={
        <Translation passThrough={idx(props.contactDetails, _ => _.phone)} />
      }
    />
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
