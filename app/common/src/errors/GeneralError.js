// @flow

import * as React from 'react';
import { Text } from 'react-native';
import { CenteredView } from '@kiwicom/react-native-app-common';

type Props = {|
  errorMessage: string,
|};

export default function GeneralError({ errorMessage }: Props) {
  return (
    <CenteredView>
      <Text>{errorMessage}</Text>
    </CenteredView>
  );
}
