/* @flow */

import * as React from 'react';
import { View } from 'react-native';

type Props = {|
  children?: React.Node,
|};

// TODO Jest is having problems with the real module
const ReactNativeModal = (props: Props) => <View>{props.children}</View>;

export default ReactNativeModal;
