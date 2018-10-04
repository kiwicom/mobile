// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import MulticityName from './MulticityName';
import type { MulticityTitle as MulticityTitleType } from './__generated__/MulticityTitle.graphql';

type Props = {|
  +data: MulticityTitleType,
|};

const MulticityTitle = (props: Props) => (
  <View style={styles.row}>
    <MulticityName data={props.data.departure} />
    <TextIcon code="o" style={styles.icon} />
    <MulticityName data={props.data.arrival} />
  </View>
);

export default createFragmentContainer(
  MulticityTitle,
  graphql`
    fragment MulticityTitle on Trip {
      departure {
        ...MulticityName
      }
      arrival {
        ...MulticityName
      }
    }
  `,
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginStart: 8,
    marginEnd: 4,
    paddingTop: 2,
    fontSize: 18,
    color: defaultTokens.paletteInkNormal,
  },
});
