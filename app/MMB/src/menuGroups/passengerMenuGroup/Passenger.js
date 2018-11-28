// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TitleTranslation from '../../components/TitleTranslation';
import type { Passenger as PassengerType } from './__generated__/Passenger.graphql';

type Props = {|
  +data: PassengerType,
|};

const Passenger = ({ data }: Props) => {
  const title = data.title ?? '';
  const fullName = data.fullName ?? '';
  const birthday = data.birthday == null ? null : new Date(data.birthday);

  return (
    <View style={styles.passenger}>
      <Text style={styles.passengerText}>
        <TitleTranslation title={title} name={fullName} />
      </Text>
      {birthday !== null && (
        <Text style={[styles.passengerText, styles.passengerBirthday]}>
          <Translation
            passThrough={DateFormatter(birthday).formatToBirthday()}
          />
        </Text>
      )}
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
