// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import {
  VariantButtonNone,
  VariantButtonBasic,
  VariantButtonPlus,
} from './VariantButtons';

type VariantsUnion = 'none' | 'basic' | 'plus';

type Props = {||};

type State = {|
  selectedVariant: VariantsUnion,
|};

export default class InsuranceSelectionScene extends React.Component<
  Props,
  State,
> {
  state = {
    selectedVariant: 'none',
  };

  selectVariantNone = () => this.setState({ selectedVariant: 'none' });

  selectVariantBasic = () => this.setState({ selectedVariant: 'basic' });

  selectVariantPlus = () => this.setState({ selectedVariant: 'plus' });

  render = () => {
    return (
      <View style={styleSheet.wrapper}>
        <Translation passThrough="TODO Travel insurance powered by ..." />
        <View style={styleSheet.variantsRow}>
          <VariantButtonNone
            onPress={this.selectVariantNone}
            isSelected={this.state.selectedVariant === 'none'}
          />

          <VariantButtonBasic
            onPress={this.selectVariantBasic}
            isSelected={this.state.selectedVariant === 'basic'}
          />

          <VariantButtonPlus
            onPress={this.selectVariantPlus}
            isSelected={this.state.selectedVariant === 'plus'}
          />
        </View>

        <View>
          <Translation passThrough="TODO more info about the selected variant + help link" />
        </View>
      </View>
    );
  };
}

const styleSheet = StyleSheet.create({
  wrapper: {
    flex: 1,
    // TODO: every page should have white page by default instead (?)
    backgroundColor: Color.white,
    padding: 10,
  },
  variantsRow: {
    flexDirection: 'row',
    backgroundColor: Color.inputBackground,
    borderRadius: 5,
  },
});
