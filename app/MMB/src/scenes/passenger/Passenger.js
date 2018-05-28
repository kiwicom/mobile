// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { StyleSheet, SimpleCard } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { View } from 'react-native';
import startCase from 'lodash/startCase';

import { SeparatorTrimmed } from '../../components/Separators';
import VisaInformation from './visa/VisaInformation';
import type { Passenger_passenger as PassengerType } from './__generated__/Passenger_passenger.graphql';
import MenuGroup from '../../components/menu/MenuGroup';
import PassengerMenuItem from './PassengerMenuItem';

const Row = ({ children }: {| children: React.Node |}) => (
  <View style={styles.row}>{children}</View>
);

type Props = {|
  passenger: PassengerType,
|};

export const Passenger = ({ passenger }: Props) => {
  const title = idx(passenger, _ => _.title) || '';
  const fullName = idx(passenger, _ => _.fullName) || '';
  const birthday = idx(passenger, _ => _.birthday) || '';
  const nationality = idx(passenger, _ => _.nationality) || '';
  const idNumber = idx(passenger, _ => _.travelDocument.idNumber) || '';
  const insuranceType = startCase(
    (idx(passenger, _ => _.insuranceType) || '').toLowerCase(),
  );

  return (
    <SimpleCard style={styles.card}>
      <MenuGroup
        customSeparator={<SeparatorTrimmed gapSizeStart={15} gapSizeEnd={15} />}
      >
        <Row>
          <PassengerMenuItem
            name={<Translation passThrough={`${title}. ${fullName}`} />}
            title={<Translation id="mmb.passenger.nationality.label" />}
            value={<Translation passThrough={nationality.toUpperCase()} />}
          />
          <PassengerMenuItem
            title={<Translation id="mmb.passenger.birthday" />}
            value={
              <Translation
                passThrough={DateFormatter(
                  new Date(birthday),
                ).formatToBirthday()}
              />
            }
          />
        </Row>
        <Row>
          <PassengerMenuItem
            title={<Translation id="mmb.passenger.id" />}
            value={<Translation passThrough={idNumber} />}
          />
          <PassengerMenuItem
            title={<Translation id="mmb.passenger.insurance" />}
            value={<Translation passThrough={insuranceType} />}
          />
        </Row>
        <VisaInformation visa={passenger} />
      </MenuGroup>
    </SimpleCard>
  );
};

export default createFragmentContainer(
  Passenger,
  graphql`
    fragment Passenger_passenger on Passenger {
      fullName
      title
      birthday
      nationality
      travelDocument {
        idNumber
      }
      insuranceType
      ...VisaInformation_visa
    }
  `,
);

const styles = StyleSheet.create({
  card: {
    padding: 0,
  },
  row: {
    flexDirection: 'row',
  },
});
