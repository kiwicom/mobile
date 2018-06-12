// @flow strict

import * as React from 'react';
import { StatusBar } from 'react-native';

type Props = {|
  +children: React.Node,
|};

export default function Layout(props: Props) {
  return (
    <React.Fragment>
      <StatusBar
        animated={true}
        barStyle="default"
        translucent={true} // Android only
        backgroundColor="rgba(0, 0, 0, 0.3)" // Android only
      />
      {props.children}
    </React.Fragment>
  );
}
