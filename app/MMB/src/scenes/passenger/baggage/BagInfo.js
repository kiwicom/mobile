// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { BagInfo as BagInfoType } from './__generated__/BagInfo.graphql';

type Props = {|
  +data: BagInfoType,
|};

const BagInfo = ({ data }: Props) => {
  const height = data.height ?? '';
  const length = data.length ?? '';
  const width = data.width ?? '';
  const weight = data.weight ?? '';
  return (
    <Text style={styles.text}>
      <Translation
        id="mmb.passengers.bag_info.bag_info"
        values={{
          height,
          length,
          width,
          weight,
        }}
      />
    </Text>
  );
};

export default createFragmentContainer(
  BagInfo,
  graphql`
    fragment BagInfo on Baggage {
      height
      length
      width
      weight
    }
  `,
);

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: defaultTokens.colorTextSecondary,
  },
});
