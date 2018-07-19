// @flow

import * as React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import {
  SeparatorTrimmed,
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';

import bannerImage from './insurance.png';
import {
  VariantButtonNone,
  VariantButtonBasic,
  VariantButtonPlus,
} from '../VariantButtons';
import { TravelBasicSummary, TravelPlusSummary } from './InsuranceSummaries';
import IconWithText from './IconWithText';
import PassengerInfo from './PassengerInfo';

type VariantsUnion = 'none' | 'basic' | 'plus';

type Props = {|
  +navigation: NavigationType,
|};

type State = {|
  selectedVariant: VariantsUnion,
|};

class InsuranceSelectionScene extends React.Component<Props, State> {
  state = {
    selectedVariant: 'none',
  };

  goToMoreInfo = () =>
    this.props.navigation.navigate(
      'mmb.trip_services.insurance.selection.more_info',
    );

  selectVariantNone = () => this.setState({ selectedVariant: 'none' });

  selectVariantBasic = () => this.setState({ selectedVariant: 'basic' });

  selectVariantPlus = () => this.setState({ selectedVariant: 'plus' });

  render = () => {
    const { title, fullName, birthday } = this.props.navigation.state.params;
    const { selectedVariant } = this.state;
    let InsuranceSummary = () => null;
    if (selectedVariant === 'basic') {
      InsuranceSummary = TravelBasicSummary;
    } else if (selectedVariant === 'plus') {
      InsuranceSummary = TravelPlusSummary;
    }
    return (
      <View style={styleSheet.wrapper}>
        <Image resizeMode="contain" source={bannerImage} />
        <PassengerInfo title={title} fullName={fullName} birthday={birthday} />
        <SeparatorTrimmed gapSizeStart={0} />
        <View style={styleSheet.marginTop}>
          <Text>
            <Translation id="mmb.trip_services.insurance.selection.travel_insurance" />
            <Translation passThrough=" " />
            <Text style={styleSheet.colorInkLight}>
              <Translation passThrough="(" />
              <Translation id="mmb.trip_services.insurance.selection.provided_by_axa" />
              <Translation passThrough=")" />
            </Text>
          </Text>
        </View>
        <View style={styleSheet.variantsRow}>
          <VariantButtonPlus
            onPress={this.selectVariantPlus}
            isSelected={this.state.selectedVariant === 'plus'}
          />

          <VariantButtonBasic
            onPress={this.selectVariantBasic}
            isSelected={this.state.selectedVariant === 'basic'}
          />

          <VariantButtonNone
            onPress={this.selectVariantNone}
            isSelected={this.state.selectedVariant === 'none'}
          />
        </View>

        <InsuranceSummary />
        <TouchableWithoutFeedback onPress={this.goToMoreInfo}>
          <View>
            <IconWithText
              textIconCode="F"
              text={
                <Translation id="mmb.trip_services.insurance.selection.insurance_summary.more_info" />
              }
              color={Color.product.normal}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };
}

export default withNavigation(InsuranceSelectionScene);

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
    marginTop: 4,
    marginBottom: 4,
    padding: 1,
  },
  colorInkLight: {
    color: Color.ink.light,
  },
  marginTop: {
    marginTop: 10,
  },
});
