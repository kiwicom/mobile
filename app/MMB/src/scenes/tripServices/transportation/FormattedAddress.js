// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import isEqual from 'react-fast-compare';

import { withGoogleMapsContext } from '../../../context/GoogleMapsContext';

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

type Props = {|
  +coordinate: Coordinate,
  +getAddress: (coordinate: Coordinate) => ?Promise<string>,
|};

type State = {| formattedAddress: string |};

class FormattedAddress extends React.Component<Props, State> {
  state = {
    formattedAddress: '',
  };

  componentDidMount = () => {
    this.getAddress();
  };

  componentDidUpdate = (prevProps: Props) => {
    if (!isEqual(prevProps.coordinate, this.props.coordinate)) {
      this.getAddress();
    }
  };

  getAddress = async () => {
    const formattedAddress =
      (await this.props.getAddress(this.props.coordinate)) || '';
    this.setState({ formattedAddress });
  };

  render() {
    return <Translation passThrough={this.state.formattedAddress} />;
  }
}

export default withGoogleMapsContext(FormattedAddress);
