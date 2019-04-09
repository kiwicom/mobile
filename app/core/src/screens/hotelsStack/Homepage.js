// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import {
  TextButton,
  LayoutSingleColumn,
  Translation,
} from '@kiwicom/mobile-shared';
import { type NavigationType, HeaderTitle } from '@kiwicom/mobile-navigation';
import { DateFormatter } from '@kiwicom/mobile-localization';

import PlacepickerModal from './placepicker/PlacepickerModal';
import HotelsForm from './HotelsForm';
import {
  withHotelsFormContext,
  type HotelsFormContextType,
} from './HotelsFormContext';

type Props = {|
  +navigation: NavigationType,
  +cityName: string,
  +cityId: string,
  +checkin: Date,
  +checkout: Date,
  +coordinates: {|
    +lat: number,
    +lng: number,
  |},
  +adultsCount: number,
  +childrenCount: Array<{| +age: number |}>,
|};

type State = {|
  showPlacepicker: boolean,
|};

function Section({ children }: { children: React.Node }) {
  const sectionStyle = {
    margin: 10,
    padding: 10,
  };
  return <View style={sectionStyle}>{children}</View>;
}

class Homepage extends React.Component<Props, State> {
  static navigationOptions = {
    headerTitle: (
      <HeaderTitle>
        <Translation passThrough="Welcome to rn-hotels" />
      </HeaderTitle>
    ),
  };

  state = {
    showPlacepicker: false,
  };

  goToNewHotelsPage = () => {
    const {
      cityId,
      cityName,
      checkin,
      checkout,
      adultsCount,
      childrenCount: children,
    } = this.props;
    this.props.navigation.navigate('NewHotelsPackage', {
      cityId,
      cityName,
      currency: 'EUR',
      checkin: DateFormatter(checkin).formatForMachine(),
      checkout: DateFormatter(checkout).formatForMachine(),
      roomsConfiguration: [{ adultsCount, children }],
    });
  };

  goToStay22HotelsPage = () => {
    const {
      coordinates: { lat, lng },
      cityName,
      checkin,
      checkout,
      adultsCount,
      childrenCount: children,
    } = this.props;
    this.props.navigation.navigate('NewHotelsPackage', {
      cityName,
      currency: 'EUR',
      checkin: DateFormatter(checkin).formatForMachine(),
      checkout: DateFormatter(checkout).formatForMachine(),
      roomsConfiguration: [{ adultsCount, children }],
      coordinates: { latitude: lat, longitude: lng },
    });
  };

  goToSingleHotel = () => {
    this.props.navigation.navigate('SingleHotelPackage');
  };

  togglePlacepicker = () => {
    this.setState(state => ({
      showPlacepicker: !state.showPlacepicker,
    }));
  };

  render() {
    return (
      <LayoutSingleColumn testID="homePage">
        <ScrollView>
          <Section>
            <HotelsForm togglePlacepicker={this.togglePlacepicker} />
          </Section>
          <Section>
            <TextButton
              title={<Translation passThrough="Open hotels" />}
              testID="homePage__Hotels-button"
              onPress={this.goToNewHotelsPage}
            />
          </Section>

          <Section>
            <TextButton
              title={<Translation passThrough="Open Stay 22Hotels" />}
              onPress={this.goToStay22HotelsPage}
            />
          </Section>

          <Section>
            <TextButton
              title={<Translation passThrough="Go to single hotel" />}
              onPress={this.goToSingleHotel}
            />
          </Section>
          <PlacepickerModal
            isVisible={this.state.showPlacepicker}
            onClose={this.togglePlacepicker}
            onSave={this.togglePlacepicker}
            cityName={this.props.cityName}
          />
        </ScrollView>
      </LayoutSingleColumn>
    );
  }
}

const select = ({
  cityName,
  cityId,
  checkin,
  checkout,
  coordinates,
  adultsCount,
  children,
}: HotelsFormContextType) => ({
  cityName,
  cityId,
  checkin,
  checkout,
  coordinates,
  adultsCount,
  childrenCount: children,
});

export default withHotelsFormContext(select)(Homepage);
