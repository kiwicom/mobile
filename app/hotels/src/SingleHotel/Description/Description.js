// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReadMore from 'react-native-read-more-text';

import type { DescriptionContainer_hotel } from './DescriptionContainer';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    borderTopColor: '#edeff2',
    borderTopWidth: 1,
  },
  description: {
    paddingVertical: 15,
  },
  linkView: {
    flexDirection: 'row',
  },
  linkText: {
    color: '#0097a9',
    fontWeight: '800',
  },
  facilities: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#edeff2',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  facilityView: {
    borderRadius: 2,
    backgroundColor: '#edeff2',
    marginRight: 5,
    marginBottom: 5,
  },
  facilityText: {
    fontSize: 12,
    padding: 4,
    color: '#79818a',
    backgroundColor: 'transparent',
  },
});

const Link = ({
  label,
  handlePress,
}: {
  label: string,
  handlePress: () => void,
}) => (
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

type Props = {
  hotel: DescriptionContainer_hotel,
};

export default function Description({ hotel }: Props) {
  const facilities = hotel.facilities.edges.map(edge => edge.node.name);

  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <ReadMore
          numberOfLines={5}
          renderTruncatedFooter={renderTruncatedFooter}
          renderRevealedFooter={renderRevealedFooter}
        >
          <Text>{hotel.description}</Text>
        </ReadMore>
      </View>
      <View style={styles.facilities}>
        {facilities.map((facility, index) => (
          <View key={index} style={styles.facilityView}>
            <Text style={styles.facilityText}>{facility}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
