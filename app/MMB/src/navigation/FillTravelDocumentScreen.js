// @flow strict

import * as React from 'react';
import { HeaderTitle } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import FillTravelDocumentContainer from '../scenes/travelDocument/FillTravelDocumentContainer';

export default function FillTravelDocumentScreen() {
  return <FillTravelDocumentContainer />;
}

FillTravelDocumentScreen.navigationOptions = () => ({
  headerTitle: (
    <HeaderTitle>
      <Translation id="mmb.fill_travel_document_screen.title" />
    </HeaderTitle>
  ),
});
