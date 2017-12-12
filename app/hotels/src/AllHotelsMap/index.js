// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Map, { type Marker } from './Map';

type Props_ = {|
  markers: Marker[],
  selectedMarkerId: string,
  currency: string,
|};

type Props = Props & $Shape<Props_>;

type State = {|
  selectedMarker: Marker | null,
|};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

class AllHotelsMap extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    const selectedMarker = this.getSelectedMarker(
      props.markers,
      props.selectedMarkerId,
    );

    this.state = {
      selectedMarker,
    };
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.selectedMarkerId !== nextProps.selectedMarkerId) {
      const selectedMarker = this.getSelectedMarker(
        nextProps.markers,
        nextProps.selectedMarkerId,
      );

      this.setState({ selectedMarker });
    }
  };

  getSelectedMarker = (markers, selectedMarkerId) => {
    return markers.find(m => m.id === selectedMarkerId);
  };

  selectMarker = (selectedMarker: Object | null) => {
    if (!selectedMarker) {
      return;
    }

    if (this.state.selectedMarker === selectedMarker) {
      return;
    }

    this.setState({ selectedMarker });
  };

  onSelectMarker = (markerId: string) => {
    const selectedMarker = this.props.markers.find(m => m.id === markerId);

    this.selectMarker(selectedMarker);
  };

  onSwipeChange = (index: number) => {
    const marker = this.props.markers[index];

    this.selectMarker(marker);
  };

  render = () => {
    const { markers, currency } = this.props;
    const { selectedMarker } = this.state;

    return (
      <View style={styles.container}>
        <Map
          currency={currency}
          markers={markers}
          selectedMarker={selectedMarker}
          onSelectMarker={this.onSelectMarker}
        />
      </View>
    );
  };
}

// temporary solution to fake data
const FakeHOC = (ComponentToRender: React.ComponentType<Props>) => {
  // Prague coordinates
  const LATITUDE = 50.08804;
  const LONGITUDE = 14.42076;
  const markers = [
    {
      id: '1',
      coordinate: { latitude: LATITUDE, longitude: LONGITUDE },
      data: {
        price: 9987,
        name: 'Cozy hotel',
      },
    },
    {
      id: '2',
      coordinate: { latitude: LATITUDE + 0.004, longitude: LONGITUDE - 0.004 },
      data: {
        price: 9170,
        name: 'Hotel as well',
      },
    },
    {
      id: '3',
      coordinate: { latitude: LATITUDE - 0.004, longitude: LONGITUDE + 0.004 },
      data: {
        price: 7551,
        name: 'Cheaper hotel',
      },
    },
    {
      id: '4',
      coordinate: {
        latitude: LATITUDE + 0.0045,
        longitude: LONGITUDE - 0.0045,
      },
      data: {
        price: 89,
        name: 'under bridge',
      },
    },
    {
      id: '5',
      coordinate: {
        latitude: LATITUDE + 0.0035,
        longitude: LONGITUDE - 0.0035,
      },
      data: {
        price: 17551,
        name: 'Hilton',
      },
    },
  ];
  const props = {
    markers,
    currency: 'CZK',
    selectedMarkerId: '2',
  };

  const hoc = () => <ComponentToRender {...props} />;
  hoc.displayName = 'FakeHoc(AllHotelsMap)';

  return hoc;
};

export default FakeHOC(AllHotelsMap);
