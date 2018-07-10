// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color, TextIcon } from '@kiwicom/mobile-shared';

type Props = {|
  +isExpanded: boolean,
  +children: React.Node,
|};

export default function MobileTripOverviewHandle(props: Props) {
  return (
    <View style={styleSheet.handleWrapper}>
      {props.isExpanded ? (
        <React.Fragment>
          <View style={styleSheet.icon}>
            <TextIcon
              style={[styleSheet.textIcon, styleSheet.downTextIcon]}
              code="m"
            />
          </View>
          {props.children}
        </React.Fragment>
      ) : (
        <View style={styleSheet.icon}>
          <TextIcon style={styleSheet.textIcon} code="l" />
        </View>
      )}
    </View>
  );
}

const styleSheet = StyleSheet.create({
  handleWrapper: {
    backgroundColor: Color.white,
  },
  icon: {
    height: 24,
    alignSelf: 'center',
  },
  textIcon: {
    color: Color.product.normal,
  },
  downTextIcon: {
    paddingTop: 6,
  },
});
