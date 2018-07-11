// @flow strict

import * as React from 'react';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { HeaderBackButton } from 'react-navigation';
import { Color } from '@kiwicom/mobile-shared';

import FillTravelDocumentContainer from '../scenes/travelDocument/FillTravelDocumentContainer';

type Props = {|
  +navigation: NavigationType,
|};

export default function FillTravelDocumentScreen() {
  return <FillTravelDocumentContainer />;
}

FillTravelDocumentScreen.navigationOptions = ({ navigation }: Props) => {
  function goBack() {
    navigation.goBack(null);
  }

  return {
    headerLeft: <HeaderBackButton tintColor={Color.brand} onPress={goBack} />,
    headerTitle: (
      <HeaderTitle>
        <Translation id="mmb.fill_travel_document_screen.title" />
      </HeaderTitle>
    ),
  };
};
