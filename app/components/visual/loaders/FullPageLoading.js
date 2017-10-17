// @flow

import * as React from 'react';

import CenteredView from '../view/CenteredView';
import SimpleLoading from './SimpleLoading';

export default function FullPageLoading() {
  return (
    <CenteredView>
      <SimpleLoading />
    </CenteredView>
  );
}
