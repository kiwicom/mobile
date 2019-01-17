// @flow

import React from 'react';
import { type DimensionType, Dimensions } from '@kiwicom/mobile-shared';

import Navigation from './core/src/navigation';
import HotelsContextForm from './core/src/screens/hotelsStack/HotelsFormContext';

type initialProps = {|
  +dimensions: DimensionType,
|};

export default function App(props: initialProps) {
  return (
    <Dimensions.Provider dimensions={props.dimensions}>
      <HotelsContextForm>
        <Navigation />
      </HotelsContextForm>
    </Dimensions.Provider>
  );
}
