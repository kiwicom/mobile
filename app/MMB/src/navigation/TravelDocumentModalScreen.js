// @flow strict

import * as React from 'react';
import {
  type NavigationType,
  HeaderTitle,
  HeaderButton,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  +navigation: NavigationType,
|};

export default class TravelDocumentModalScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => {
    function goBack() {
      navigation.goBack(null);
    }
    return {
      headerLeft: (
        <HeaderButton onPress={goBack}>
          <Translation id="mmb.missing_informaiton.travel_document_modal_screen.close" />
        </HeaderButton>
      ),
      headerTitle: (
        <HeaderTitle>
          <Translation id="mmb.fill_travel_document_screen_modal.title" />
        </HeaderTitle>
      ),
      headerRight: (
        <HeaderButton onPress={goBack}>
          <Translation id="mmb.missing_informaiton.travel_document_modal_screen.save" />
        </HeaderButton>
      ),
    };
  };

  render = () => <Translation passThrough="TODO" />;
}
