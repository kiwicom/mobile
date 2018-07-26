// @flow strict

import * as React from 'react';
import { StatusBar } from 'react-native';

import Color from '../Color';

type Props = {|
  +children: React.Node,
|};

export default function Layout(props: Props) {
  return (
    <React.Fragment>
      <StatusBar
        animated={true}
        barStyle="default"
        backgroundColor={Color.transparent.black.$30} // Android only
      />
      {props.children}
    </React.Fragment>
  );
}
