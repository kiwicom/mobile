// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import Alert from '../../components/alert/Alert';
import type { Visa as BookingType } from './__generated__/Visa.graphql';
import VisaInformation from '../../scenes/passenger/visa/VisaInformation';

type Props = {|
  +data: BookingType,
|};

const Visa = ({ data }: Props) => {
  const passengers = data.passengers ?? [];
  const { requiredIn, warningIn } = passengers.reduce(
    (acc, curr) => {
      const requiredIn = curr?.visaInformation?.requiredIn ?? [];
      const warningIn = curr?.visaInformation?.warningIn ?? [];
      return {
        requiredIn: [
          ...acc.requiredIn,
          ...requiredIn.map(item => item?.name ?? ''),
        ],
        warningIn: [
          ...acc.warningIn,
          ...warningIn.map(item => item?.name ?? ''),
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
    fragment Visa on BookingInterface {
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
