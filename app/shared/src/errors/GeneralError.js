// @flow

import * as React from 'react';
import Translation from '@kiwicom/react-native-app-translations';

import CenteredView from '../view/CenteredView';
import Color from '../Color';
import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  // error message visible by user
  errorMessage: string,
|};

export default function GeneralError({ errorMessage }: Props) {
  return (
    <CenteredView>
      <Text style={styleSheet.text}>
        <Translation passThrough={errorMessage} />
      </Text>
    </CenteredView>
  );
}

const styleSheet = StyleSheet.create({
  text: {
    color: Color.red.$500,
    textAlign: 'center',
  },
});
