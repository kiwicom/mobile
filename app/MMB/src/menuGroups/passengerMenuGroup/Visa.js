// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { Translation } from '@kiwicom/mobile-localization';

import Alert from '../../components/alert/Alert';
import type { Visa as BookingType } from './__generated__/Visa.graphql';
import VisaInformation from '../../scenes/passenger/visa/VisaInformation';

type Props = {|
  +data: BookingType,
|};

const Visa = ({ data }: Props) => {
  const passengers = idx(data, _ => _.passengers) || [];
  const { requiredIn, warningIn } = passengers.reduce(
    (acc, curr) => {
      const requiredIn = idx(curr, _ => _.visaInformation.requiredIn) || [];
      const warningIn = idx(curr, _ => _.visaInformation.warningIn) || [];
      return {
        requiredIn: [
          ...acc.requiredIn,
          ...requiredIn.map(item => idx(item, _ => _.name) || ''),
        ],
        warningIn: [
          ...acc.warningIn,
          ...warningIn.map(item => idx(item, _ => _.name) || ''),
        ],
      };
    },
    {
      requiredIn: [],
      warningIn: [],
    },
  );

  return (
    <VisaInformation requiredIn={requiredIn} warningIn={warningIn}>
      {requiredIn.length > 0 && (
        <Alert
          type="danger"
          title={<Translation id="mmb.visa_state.visa_is_required" />}
        />
      )}
      {warningIn.length > 0 && (
        <Alert
          type="warning"
          title={<Translation id="mmb.visa_state.visa_may_be_required" />}
        />
      )}
    </VisaInformation>
  );
};

export default createFragmentContainer(
  Visa,
  graphql`
    fragment Visa on Booking {
      passengers {
        visaInformation {
          requiredIn {
            name
          }
          warningIn {
            name
          }
        }
      }
    }
  `,
);
