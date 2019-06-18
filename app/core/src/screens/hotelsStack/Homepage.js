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
  HotelsFormContext,
  type HotelsFormContextType,
} from './HotelsFormContext';

type Props = {|
  +navigation: NavigationType,
|};

function Section({ children }: {| +children: React.Node |}) {
  const sectionStyle = {
    margin: 10,
    padding: 10,
  };
  return <View style={sectionStyle}>{children}</View>;
}

const Homepage = (props: Props) => {
  const [showPlacepicker, setShowPlacepicker] = React.useState(false);
  const {
    cityName,
    cityId,
    checkin,
    checkout,
    coordinates: { lat, lng },
    adultsCount,
    children,
  }: HotelsFormContextType = React.useContext(HotelsFormContext);

  function goToNewHotelsPage() {
    props.navigation.navigate('NewHotelsPackage', {
      cityId,
      cityName,
      currency: 'EUR',
      checkin: DateFormatter(checkin).formatForMachine(),
      checkout: DateFormatter(checkout).formatForMachine(),
      roomsConfiguration: [{ adultsCount, children }],
    });
  }

  function goToStay22HotelsPage() {
    props.navigation.navigate('NewHotelsPackage', {
      cityName,
      currency: 'EUR',
      checkin: DateFormatter(checkin).formatForMachine(),
      checkout: DateFormatter(checkout).formatForMachine(),
      roomsConfiguration: [{ adultsCount, children }],
      coordinates: { latitude: lat, longitude: lng },
    });
  }

  function goToSingleHotel() {
    props.navigation.navigate('SingleHotelPackage');
  }

  function togglePlacepicker() {
    setShowPlacepicker(show => !show);
  }

  return (
    <LayoutSingleColumn testID="homePage">
      <ScrollView>
        <Section>
          <HotelsForm togglePlacepicker={togglePlacepicker} />
        </Section>
        <Section>
          <TextButton
            title={<Translation passThrough="Open hotels" />}
            testID="homePage__Hotels-button"
            onPress={goToNewHotelsPage}
          />
        </Section>

        <Section>
          <TextButton
            title={<Translation passThrough="Open Stay 22Hotels" />}
            onPress={goToStay22HotelsPage}
          />
        </Section>

        <Section>
          <TextButton
            title={<Translation passThrough="Go to single hotel" />}
            onPress={goToSingleHotel}
          />
        </Section>
        <PlacepickerModal
          isVisible={showPlacepicker}
          onClose={togglePlacepicker}
          onSave={togglePlacepicker}
          cityName={cityName}
        />
      </ScrollView>
    </LayoutSingleColumn>
  );
};

Homepage.navigationOptions = {
  headerTitle: (
    <HeaderTitle>
      <Translation passThrough="Welcome to rn-hotels" />
    </HeaderTitle>
  ),
};

export default Homepage;
