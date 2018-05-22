// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { SimpleCard, StyleSheet, Text, Color } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { View } from 'react-native';
import startCase from 'lodash/startCase';

import { SeparatorFullWidth } from '../../components/Separators';
import VisaInformation from './visa/VisaInformation';
import type { Passenger_passenger as PassengerType } from './__generated__/Passenger_passenger.graphql';

const Row = ({ children }: {| children: React.Node |}) => (
  <View style={styles.row}>{children}</View>
);

type ColumnProps = {|
  title: React.Element<typeof Translation>,
  value: React.Element<typeof Translation>,
|};

const Column = (props: ColumnProps) => (
  <View style={styles.column}>
    <Text style={styles.titleLight}>{props.title}</Text>
    {props.value}
  </View>
);

type Props = {|
  passenger: PassengerType,
|};

export class Passenger extends React.Component<Props> {
  render = () => {
    const { passenger } = this.props;
    if (passenger == null) {
      return null;
    }

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
        <View style={styles.cardContainer}>
          <Text style={styles.name}>
            <Translation passThrough={`${title}. ${fullName}`} />
          </Text>
          <Row>
            <Column
              title={<Translation id="mmb.passenger.nationality.label" />}
              value={<Translation passThrough={nationality.toUpperCase()} />}
            />
            <Column
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
          <View style={styles.separator}>
            <SeparatorFullWidth />
          </View>
          <Row>
            <Column
              title={<Translation id="mmb.passenger.id" />}
              value={<Translation passThrough={idNumber} />}
            />
            <Column
              title={<Translation id="mmb.passenger.insurance" />}
              value={<Translation passThrough={insuranceType} />}
            />
          </Row>
        </View>
        <VisaInformation visa={passenger} />
      </SimpleCard>
    );
  };
}

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
    marginBottom: 0,
  },
  cardContainer: {
    paddingHorizontal: 15,
    paddingTop: 13,
    paddingBottom: 16,
  },
  name: {
    fontSize: 16,
    marginBottom: 17,
  },
  row: {
    flexDirection: 'row',
  },
  separator: {
    marginVertical: 15,
  },
  column: {
    flex: 1,
  },
  titleLight: {
    color: Color.textLight,
    fontSize: 12,
  },
});
