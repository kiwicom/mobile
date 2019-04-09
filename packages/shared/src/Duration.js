// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Translation from './Translation';
import StyleSheet from './PlatformStyleSheet';
import Icon from './icons/Icon';
import Text from './Text';
import type { StylePropType } from '../types/Styles';

type Props = {|
  +showIcon: boolean,
  +duration: ?number,
  +style?: StylePropType,
  +iconStyle?: StylePropType,
|};

export const separateHours = (durationInMinutes: number) => {
  let minutes = durationInMinutes;

  if (minutes < 0) {
    minutes = 0;
  }

  const hours = Math.floor(minutes / 60);
  minutes %= 60;

  return { hours, minutes };
};

export default function Duration(props: Props) {
  const { hours, minutes } = separateHours(props.duration || 0);

  return (
    <View style={styleSheet.row}>
      {props.showIcon && (
        <Icon
          name="clock"
          fontSize={13}
          color={defaultTokens.colorTextSecondary}
          style={props.iconStyle}
        />
      )}
      <Text style={[styleSheet.durationText, props.style]}>
        <Translation passThrough=" " />
        <Translation passThrough={hours} />
        <Translation id="shared.hours_short" />
        <Translation passThrough=" " />
        <Translation passThrough={minutes} />
        <Translation id="shared.minutes_short" />
      </Text>
    </View>
  );
}

Duration.defaultProps = {
  showIcon: true,
};

const styleSheet = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 10,
    color: defaultTokens.colorTextSecondary,
  },
});
