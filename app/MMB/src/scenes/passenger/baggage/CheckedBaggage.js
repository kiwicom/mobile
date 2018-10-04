// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import BagInfo from './BagInfo';
import BaggageMenuItem from './BaggageMenuItem';
import type { CheckedBaggage as Bags } from './__generated__/CheckedBaggage.graphql';

type Props = {|
  +data: Bags,
|};

const CheckedBaggage = (props: Props) => {
  const bags = idx(props.data, _ => _.checked) || [];

  if (bags.length === 0) {
    return null;
  }

  return (
    <BaggageMenuItem
      bagCount={bags.length}
      icon={<TextIcon code="h" style={styles.icon} />}
      value={
        <View>
          <Translation id="mmb.passengers.cabin_bags.checked_baggage" />
          <BagInfo data={bags[0]} />
        </View>
      }
    />
  );
};

export default createFragmentContainer(
  CheckedBaggage,
  graphql`
    fragment CheckedBaggage on AllowedBaggage {
      checked {
        ...BagInfo
      }
    }
  `,
);

const styles = StyleSheet.create({
  icon: {
    color: defaultTokens.paletteInkDark,
    fontSize: 16,
  },
});
