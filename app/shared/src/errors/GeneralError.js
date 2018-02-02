// @flow

import * as React from 'react';
import { Text } from 'react-native';
import { CenteredView, Color } from '@kiwicom/react-native-app-shared';

type Props = {|
  errorMessage: string,
|};

export default function GeneralError({ errorMessage }: Props) {
  return (
    <CenteredView>
      <Text style={{ color: Color.red.$500 }}>{errorMessage}</Text>
    </CenteredView>
  );
}
