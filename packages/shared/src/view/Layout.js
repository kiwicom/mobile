// @flow strict

import * as React from 'react';
import { StatusBar } from 'react-native';

import Color from '../Color';

export type BarStyle = 'default' | 'dark-content' | 'light-content';

type Props = {|
  +children: React.Node,
  +barStyle: BarStyle,
|};

export default function Layout(props: Props) {
  return (
    <React.Fragment>
      <StatusBar
        animated={true}
        barStyle={props.barStyle}
        backgroundColor={Color.transparent.black.$30} // Android only
      />
      {props.children}
    </React.Fragment>
  );
}

Layout.defaultProps = {
  barStyle: 'default',
};
