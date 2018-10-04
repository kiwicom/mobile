// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TitleTranslation from '../../components/TitleTranslation';

type Props = {|
  +name?: React.Element<typeof Translation | typeof TitleTranslation>,
  +title: React.Element<typeof Translation>,
  +value: React.Element<typeof Translation>,
|};

export default function PassengerMenuItem(props: Props) {
  return (
    <View style={styleSheet.wrapper}>
      {props.name && (
        <View style={styleSheet.row}>
          <TextIcon code="w" style={styleSheet.icon} />
          <Text style={styleSheet.name}>{props.name}</Text>
        </View>
      )}
      <Text style={styleSheet.title}>{props.title}</Text>
      <Text>{props.value}</Text>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  name: {
    fontSize: 16,
    marginBottom: 17,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
    backgroundColor: defaultTokens.paletteWhite,
  },
  title: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 12,
  },
  icon: {
    color: defaultTokens.colorIconAttention,
    fontSize: 18,
    paddingTop: 2,
    marginEnd: 5,
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
});
