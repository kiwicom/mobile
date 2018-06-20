// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Popup, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import {
  MenuGroup,
  MenuGroupTitle,
  SeparatorTrimmed,
} from '@kiwicom/mobile-navigation';

type Props = {|
  +isVisible: boolean,
  +onClose: () => void,
  +children: React.Node,
|};

export default function LocationsPopup(props: Props) {
  return (
    <Popup isVisible={props.isVisible} onClose={props.onClose}>
      <View style={styleSheet.popupView}>
        <MenuGroupTitle
          title={<Translation id="mmb.trip_services.locations_popup.title" />}
        />

        <MenuGroup
          customSeparator={
            <SeparatorTrimmed gapSizeStart={15} gapSizeEnd={15} />
          }
        >
          {props.children}
        </MenuGroup>
      </View>
    </Popup>
  );
}

const styleSheet = StyleSheet.create({
  popupView: {
    padding: 5,
  },
});
