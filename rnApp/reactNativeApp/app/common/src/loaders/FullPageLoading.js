// @flow

import * as React from 'react';

import CenteredView from '../view/CenteredView';
import IconLoading from './IconLoading';

export default function FullPageLoading() {
  return (
    <CenteredView>
      <IconLoading />
    </CenteredView>
  );
}
