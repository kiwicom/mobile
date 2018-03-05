// @flow

import * as React from 'react';
import { Platform } from 'react-native';

import CenteredView from '../view/CenteredView';
import IconLoading from './IconLoading';

export default function FullPageLoading() {
  return (
    <CenteredView>
      <IconLoading
        size={Platform.select({
          android: 'large',
          ios: 'small',
        })}
      />
    </CenteredView>
  );
}
