// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  AdaptableLayout,
  StyleSheet,
  Device,
  Dimensions,
} from '@kiwicom/mobile-shared';

type Props = {|
  +children: React.Node,
|};

export default function FlightItemLayout(props: Props) {
  return (
    <AdaptableLayout
      renderOnNarrow={
        <View style={styles.itemContainer}>{props.children}</View>
      }
      renderOnWide={
        <Dimensions.Consumer>
          {dimensions => {
            return (
              <View
                style={[
                  styles.itemContainer,
                  Device.isPortrait(dimensions)
                    ? styles.portrait
                    : styles.landscape,
                ]}
              >
                {props.children}
              </View>
            );
          }}
        </Dimensions.Consumer>
      }
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 16,
  },
  portrait: {
    width: '50%',
    paddingEnd: 15,
  },
  landscape: {
    width: '33.3%',
    paddingEnd: 15,
  },
});
