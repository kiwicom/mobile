// @flow strict

import * as React from 'react';

const defaultState = {
  formattedAddress: '',
  actions: {
    getAddress: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

type Props = {|
  +children: React.Node,
  +googleMapsAPIKey: string,
|};

type State = {|
  formattedAddress: string,
  actions: {
    +getAddress: (coordinate: Coordinate) => ?Promise<string>,
  },
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      actions: {
        getAddress: this.getAddress,
      },
    };
  }

  getAddress = async (coordinate: Coordinate) => {
    const { latitude, longitude } = coordinate;
    if (latitude != null && longitude != null) {
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

      return formattedAddress;
    }
    return '';
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

type PropsWithContext = {};

export function withGoogleMapsContext(Component: React.ElementType) {
  const WithGoogleMapsContext = (props: PropsWithContext) => (
    <Consumer>
      {({ actions, ...rest }) => (
        <Component {...props} {...actions} {...rest} />
      )}
    </Consumer>
  );
  // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
  if (Component.navigationOptions) {
    WithGoogleMapsContext.navigationOptions = Component.navigationOptions;
  }
  return WithGoogleMapsContext;
}
