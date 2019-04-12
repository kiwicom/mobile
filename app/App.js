// @flow

import React from 'react';
import { Dimensions } from '@kiwicom/mobile-shared';

import Navigation from './core/src/navigation';
import HotelsContextForm from './core/src/screens/hotelsStack/HotelsFormContext';

export default function App() {
  return (
    <Dimensions.Provider>
      <HotelsContextForm>
        <Navigation />
      </HotelsContextForm>
    </Dimensions.Provider>
  );
}
