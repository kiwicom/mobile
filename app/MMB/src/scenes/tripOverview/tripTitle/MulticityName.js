// @flow strict

import * as React from 'react';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import type { MulticityName as MulticityNameType } from './__generated__/MulticityName.graphql';

type Props = {|
  +data: MulticityNameType,
|};

const MulticityName = (props: Props) => {
  const cityName = idx(props, _ => _.data.airport.city.name);
  if (cityName == null) {
    return null;
  }
  return (
    <Text style={styles.text}>
      <Translation passThrough={cityName} />
    </Text>
  );
};

export default createFragmentContainer(
  MulticityName,
  graphql`
    fragment MulticityName on RouteStop {
      airport {
        city {
          name
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
  },
});
