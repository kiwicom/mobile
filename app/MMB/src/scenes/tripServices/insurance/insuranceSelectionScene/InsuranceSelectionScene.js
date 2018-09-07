// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import {
  SeparatorTrimmed,
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import bannerImage from './insurance.png';
import VariantButtons from './variantButtons/VariantButtons';
import InsuranceSummary from './InsuranceSummaries';
import IconWithText from './IconWithText';
import PassengerInfo from './PassengerInfo';
import type {
  InsuranceSelectionSceneQueryResponse,
  InsuranceType,
} from './__generated__/InsuranceSelectionSceneContainerQuery.graphql';
import { withInsuranceContext } from '../insuranceOverviewScene/InsuranceOverviewSceneContext';

type Props = {|
  +navigation: NavigationType,
  +data: InsuranceSelectionSceneQueryResponse,
  +updatePassengerInsurance: (args: UpdatePassengerInsurance) => void,
|};

type State = {|
  selectedVariant: InsuranceType,
|};

type UpdatePassengerInsurance = {|
  +databaseId: ?number,
  +insuranceType: ?InsuranceType,
|};

class InsuranceSelectionScene extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedVariant: this.props.navigation.state.params.passenger
        .insuranceType,
    };
  }

  goToMoreInfo = () =>
    this.props.navigation.navigate(
      'mmb.trip_services.insurance.selection.more_info',
    );

  selectVariant = (insuranceType: InsuranceType) => {
    this.setState({ selectedVariant: insuranceType }, () => {
      const { passenger } = this.props.navigation.state.params;
      this.props.updatePassengerInsurance({
        databaseId: passenger.databaseId,
        insuranceType,
      });
    });
  };
  render = () => {
    const { passenger } = this.props.navigation.state.params;

    return (
      <View style={styleSheet.wrapper}>
        <Image resizeMode="contain" source={bannerImage} />
        <PassengerInfo
          title={passenger.title || ''}
          fullName={passenger.fullName || ''}
          birthday={passenger.birthday || null}
        />
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
          <VariantButtons
            data={this.props.data}
            selectedVariant={this.state.selectedVariant}
            selectVariant={this.selectVariant}
          />
        </View>

        <InsuranceSummary selectedVariant={this.state.selectedVariant} />
        <TouchableWithoutFeedback onPress={this.goToMoreInfo}>
          <View>
            <IconWithText
              textIconCode="F"
              text={
                <Translation id="mmb.trip_services.insurance.selection.insurance_summary.more_info" />
              }
              color={defaultTokens.paletteProductNormal}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };
}

export default withNavigation(
  withInsuranceContext(state => ({
    updatePassengerInsurance: state.actions.updatePassengerInsurance,
  }))(InsuranceSelectionScene),
);

const styleSheet = StyleSheet.create({
  wrapper: {
    flex: 1,
    // TODO: every page should have white page by default instead (?)
    backgroundColor: defaultTokens.paletteWhite,
    padding: 10,
  },
  variantsRow: {
    flexDirection: 'row',
    backgroundColor: defaultTokens.paletteCloudNormal,
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 4,
    padding: 1,
  },
  colorInkLight: {
    color: defaultTokens.paletteInkLight,
  },
  marginTop: {
    marginTop: 10,
  },
});
