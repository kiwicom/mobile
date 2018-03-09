// @flow

import * as React from 'react';
import { HeaderRightButton } from '@kiwicom/react-native-app-shared';

type Props = {|
  onPress: () => void,
|};

export default function MapHeaderButton(props: Props) {
  return <HeaderRightButton onPress={props.onPress} />;
}
