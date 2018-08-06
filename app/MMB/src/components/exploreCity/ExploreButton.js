// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, TextButton } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  +cityName: string,
|};

const onPress = () => {
  console.warn('TODO');
};

/**
 * Since our buttons by default grows the width of the parent, here I need
 * to wrap the button in a view, and put a view with flex 1 next to it.
 * This will make the button match the design
 */
export default function ExploreButton(props: Props) {
  return (
    <View style={styles.row}>
      <View>
        <TextButton
          title={
            <Translation
              id="mmb.main_menu.explore_city.card_content.explore"
              values={{ city: props.cityName }}
            />
          }
          onPress={onPress}
        />
      </View>
      <View style={styles.item} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 25,
  },
  item: {
    flex: 1,
  },
});
