// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TitleTranslation from '../../components/TitleTranslation';
import type { Passenger as PassengerType } from './__generated__/Passenger.graphql';

type Props = {|
  +data: PassengerType,
|};

const Passenger = ({ data }: Props) => {
  const title = idx(data, _ => _.title) || '';
  const fullName = idx(data, _ => _.fullName) || '';
  const birthday = new Date(idx(data, _ => _.birthday) || '');

  return (
    <View style={styles.passenger}>
      <Text style={styles.passengerText}>
        <TitleTranslation title={title} name={fullName} />
      </Text>
      <Text style={[styles.passengerText, styles.passengerBirthday]}>
        <Translation passThrough={DateFormatter(birthday).formatToBirthday()} />
      </Text>
    </View>
  );
};

export default createFragmentContainer(
  Passenger,
  graphql`
    fragment Passenger on Passenger {
      fullName
      title
      birthday
    }
  `,
);

const styles = StyleSheet.create({
  passenger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  passengerText: {
    fontSize: 12,
  },
  passengerBirthday: {
    color: defaultTokens.colorTextSecondary,
  },
});
