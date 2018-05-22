// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import VisaRequired from './VisaRequired';
import type { VisaInformation_visa as VisaType } from './__generated__/VisaInformation_visa.graphql';

type Props = {|
  visa: VisaType,
|};

const VisaInformation = (props: Props) => {
  const requiredIn = idx(props.visa, _ => _.visaInformation.requiredIn) || [];
  const notice = idx(props.visa, _ => _.visaInformation.warningIn) || [];

  if (requiredIn.length === 0 && notice.length === 0) {
    // TODO: return ok;
    return null;
  }

  return (
    <VisaRequired
      countries={requiredIn.map(country => idx(country, _ => _.name) || '')}
    />
    // TODO: Add visa warning
  );
};

export default createFragmentContainer(
  VisaInformation,
  graphql`
    fragment VisaInformation_visa on Passenger {
      visaInformation {
        requiredIn {
          name
        }
        warningIn {
          name
        }
      }
    }
  `,
);
