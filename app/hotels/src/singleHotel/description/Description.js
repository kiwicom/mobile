// @flow

import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import {
  Color,
  SimpleCard,
  StyleSheet,
} from '@kiwicom/react-native-app-shared';

import type { Description_hotel } from './__generated__/Description_hotel.graphql';
import Facilities from './Facilities';

const styles = StyleSheet.create({
  simpleCardWrapper: {
    android: {
      marginTop: 10,
    },
    ios: {
      marginTop: -2,
    },
  },
  linkView: {
    flexDirection: 'row',
  },
  linkText: {
    color: Color.brand,
    fontWeight: '800',
  },
});

const Link = ({
  label,
  handlePress,
}: {|
  label: string,
  handlePress: () => void,
|}) => (
  <View style={styles.linkView}>
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.linkText}>{label}</Text>
    </TouchableOpacity>
  </View>
);

const renderTruncatedFooter = (handlePress: () => void) => (
  <Link label="Show More" handlePress={handlePress} />
);

const renderRevealedFooter = (handlePress: () => void) => (
  <Link label="Show Less" handlePress={handlePress} />
);

type ContainerProps = {|
  hotel: any,
|};

type Props = {
  ...ContainerProps,
  hotel: ?Description_hotel,
};

export function Description({ hotel }: Props) {
  return (
    <View style={styles.simpleCardWrapper}>
      <SimpleCard>
        <ReadMore
          numberOfLines={5}
          renderTruncatedFooter={renderTruncatedFooter}
          renderRevealedFooter={renderRevealedFooter}
        >
          <Text>{idx(hotel, _ => _.summary)}</Text>
        </ReadMore>
        <Facilities facilities={idx(hotel, _ => _.facilities)} />
      </SimpleCard>
    </View>
  );
}

export default (createFragmentContainer(
  Description,
  graphql`
    fragment Description_hotel on Hotel {
      summary
      facilities {
        ...Facilities_facilities
      }
    }
  `,
): React.ComponentType<ContainerProps>);
