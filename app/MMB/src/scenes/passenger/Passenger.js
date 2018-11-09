// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { StyleSheet, SimpleCard } from '@kiwicom/mobile-shared';
import { MenuGroup, SeparatorTrimmed } from '@kiwicom/mobile-navigation';
import { View } from 'react-native';
import startCase from 'lodash/startCase';

import VisaInformation from './visa/VisaInformation';
import VisaWarning from './visa/VisaWarning';
import VisaRequired from './visa/VisaRequired';
import PassengerMenuItem from './PassengerMenuItem';
import TitleTranslation from '../../components/TitleTranslation';
import type { Passenger_passenger as PassengerType } from './__generated__/Passenger_passenger.graphql';

const Row = ({ children }: {| children: React.Node |}) => (
  <View style={styles.row}>{children}</View>
);

type Props = {|
  +passenger: PassengerType,
|};

export const Passenger = ({ passenger }: Props) => {
  const title = passenger.title ?? '';
  const fullName = passenger.fullName ?? '';
  const birthday = passenger.birthday ?? '';
  const nationality = passenger.nationality ?? '';
  const idNumber = passenger.travelDocument?.idNumber ?? '';
  const insuranceType = startCase(
    (passenger.insuranceType ?? '').toLowerCase(),
  );

  let requiredIn = passenger.visaInformation?.requiredIn ?? [];
  requiredIn = requiredIn.map(item => item?.name ?? '');
  let warningIn = passenger.visaInformation?.warningIn ?? [];
  warningIn = warningIn.map(item => item?.name ?? '');

  return (
    <SimpleCard style={styles.card}>
      <MenuGroup
        customSeparator={<SeparatorTrimmed gapSizeStart={15} gapSizeEnd={15} />}
      >
        <Row>
          <PassengerMenuItem
            name={<TitleTranslation title={title} name={fullName} />}
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
        <VisaInformation requiredIn={requiredIn} warningIn={warningIn}>
          <VisaRequired countries={requiredIn} />
          <VisaWarning countries={warningIn} />
        </VisaInformation>
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

const styles = StyleSheet.create({
  card: {
    padding: 0,
  },
  row: {
    flexDirection: 'row',
  },
});
