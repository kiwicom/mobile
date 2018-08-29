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
  +googleMapsAPIKey: string,
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
    if (!isEqual(prevProps, this.props)) {
      this.getAddress();
    }
  };

  shouldComponentUpdate = (nextProps: Props, nextState: State) => {
    const isPropsEqual = isEqual(nextProps, this.props);
    const isStateEqual = isEqual(nextState, this.state);

    return !isPropsEqual || !isStateEqual;
  };

  getAddress = async () => {
    const {
      coordinate: { latitude, longitude },
    } = this.props;
    const address = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${
        this.props.googleMapsAPIKey
      }`,
    )
      .then(res => res.json())
      .then(json => json.results[0].address_components);

    const city = (address.find(x => x.types.includes('locality')) || {})
      .long_name;
    const route = (address.find(x => x.types.includes('route')) || {})
      .long_name;
    const streetNumber = (
      address.find(x => x.types.includes('street_number')) || {}
    ).long_name;

    const area = (
      address.find(x => x.types.includes('administrative_area_level_1')) || {}
    ).long_name;

    const streetAddress =
      route !== undefined && streetNumber !== undefined
        ? route.concat(' ', streetNumber)
        : route;

    const formattedAddress = [city, streetAddress, area]
      .filter(item => item !== undefined)
      .join(', ');

    this.setState({
      formattedAddress,
    });
  };

  render() {
    return <Translation passThrough={this.state.formattedAddress} />;
  }
}

export default withGoogleMapsContext(FormattedAddress);
