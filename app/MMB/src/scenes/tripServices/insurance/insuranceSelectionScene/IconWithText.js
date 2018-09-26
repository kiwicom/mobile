// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, TextIcon, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +textIconCode: string,
  +text: React.Element<typeof Translation>,
  +color?: string,
|};

const IconWithText = (props: Props) => {
  const textStyle = StyleSheet.create({
    text: {
      fontSize: 13,
      color: props.color || defaultTokens.colorTextSecondary,
    },
  });
  return (
    <View style={styles.container}>
      <TextIcon style={textStyle.text} code={props.textIconCode} orbit={true} />
      <Text style={textStyle.text}>
        <Translation passThrough=" " />
        {props.text}
      </Text>
    </View>
  );
};

export default IconWithText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
});
