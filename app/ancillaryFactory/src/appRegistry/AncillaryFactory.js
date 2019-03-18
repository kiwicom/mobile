// @flow strict

import * as React from 'react';

import {
  type AncillaryDefinition,
  ancillariesDefinitions,
} from '../config/ancillariesDefinitions';
import NoAncillaryMessage from '../components/NoAncillaryMessage';

type Props = {|
  +service: string,
  +bookingId: number,
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
    const { bookingId } = this.props;

    const ancillaryProps = {
      bookingId,
    };

    const Component = this.getRequestedAncillary() || NoAncillaryMessage;

    return <Component {...ancillaryProps} />;
  }
}

export default AncillaryFactory;
