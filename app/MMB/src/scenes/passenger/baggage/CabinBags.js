// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Color, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import idx from 'idx';

import type { CabinBags as Bags } from './__generated__/CabinBags.graphql';
import BagInfo from './BagInfo';
import BaggageMenuItem from './BaggageMenuItem';

type Props = {|
  +data: Bags,
|};

const CabinBags = (props: Props) => {
  const bags = idx(props.data, _ => _.cabin) || [];
  if (bags.length === 0) {
    return null;
  }
  return (
    <BaggageMenuItem
      bagCount={bags.length}
      icon={<TextIcon code="&#xe044;" style={styles.icon} />}
      value={
        <View>
          <Translation id="mmb.passengers.cabin_bags.cabin_bags" />
          <BagInfo data={bags[0]} />
        </View>
      }
    />
  );
};

export default createFragmentContainer(
  CabinBags,
  graphql`
    fragment CabinBags on AllowedBaggage {
      cabin {
        ...BagInfo
      }
    }
  `,
);

const styles = StyleSheet.create({
  icon: {
    color: Color.black, // TODO: Consult designer
    fontSize: 14,
  },
});
