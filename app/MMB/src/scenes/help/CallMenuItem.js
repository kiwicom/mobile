// @flow

import * as React from 'react';
import call from 'react-native-phone-call';
import { TextIcon, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import MenuItem from '../../components/menu/MenuItem';

type Props = {|
  title: React.Element<typeof Translation>,
  description: React.Element<typeof Translation>,
|};

export default class CallMenuItem extends React.Component<Props> {
  call = () => {
    const args = {
      number: '420123456789', // TODO: must be without spaces, plusses and other special symbols like "(..)"
      prompt: true,
    };

    call(args).catch(console.error);
  };

  render = () => (
    <MenuItem
      // TODO: icons - source unknown
      actionIcon={<TextIcon code="&#xe058;" style={styleSheet.icon} />}
      onPress={this.call}
      {...this.props}
    />
  );
}

const styleSheet = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: Color.brand,
  },
});
