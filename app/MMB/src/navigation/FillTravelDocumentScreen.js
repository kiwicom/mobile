// @flow strict

import * as React from 'react';
import { HeaderTitle } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import FillTravelDocumentContainer from '../scenes/travelDocument/FillTravelDocumentContainer';

export default function FillTravelDocumentScreen() {
  return <FillTravelDocumentContainer />;
}

// TODO: All text is not showing on mobile. Find out how to enlarge surrounding view
FillTravelDocumentScreen.navigationOptions = () => ({
  title: (
    <HeaderTitle>
      <Translation id="mmb.fill_travel_document_screen.title" />
    </HeaderTitle>
  ),
});
