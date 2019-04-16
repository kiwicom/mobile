// @flow strict

import * as React from 'react';
import { AuthContext } from '@kiwicom/mobile-relay';

import {
  type AncillaryDefinition,
  ancillariesDefinitions,
} from '../config/ancillariesDefinitions';
import NoAncillaryMessage from '../components/NoAncillaryMessage';

type Props = {|
  +service: string,
  +bookingId: number,
  +kwAuthToken: string,
|};

class AncillaryFactory extends React.Component<Props> {
  getRequestedAncillary() {
    const { service } = this.props;

    const ancillary: AncillaryDefinition =
      ancillariesDefinitions[service.toUpperCase()];

    if (ancillary && typeof ancillary.renderComponent === 'function') {
      return ancillary.renderComponent;
    }

    return null;
  }

  render() {
    const { bookingId, kwAuthToken } = this.props;

    const ancillaryProps = {
      bookingId,
      kwAuthToken,
    };

    const Component = this.getRequestedAncillary() || NoAncillaryMessage;

    return (
      <AuthContext.Provider accessToken={kwAuthToken}>
        <Component {...ancillaryProps} />
      </AuthContext.Provider>
    );
  }
}

export default AncillaryFactory;
