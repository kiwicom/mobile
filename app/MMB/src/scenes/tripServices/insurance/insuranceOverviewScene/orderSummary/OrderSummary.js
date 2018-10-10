// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Text,
  Price,
  TextIcon,
  TouchableWithoutFeedback,
} from '@kiwicom/mobile-shared';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import { withInsuranceContext } from '../InsuranceOverviewSceneContext';
import InsuranceRow from './InsuranceRow';

type PriceType = {|
  +amount: number,
  +currency: string,
|};

type Props = {|
  +price: PriceType,
|};

type State = {|
  isExpanded: boolean,
|};

class OrderSummary extends React.Component<Props, State> {
  state = {
    isExpanded: false,
  };

  updateExpanded = () => {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  };

  render() {
    const styleExpanded = this.state.isExpanded
      ? styleSheet.textIconExpanded
      : null;
    return (
      <TouchableWithoutFeedback onPress={this.updateExpanded}>
        <View style={styleSheet.wrapper}>
          <TextIcon
            code="&#xe09D;"
            style={[styleSheet.textIcon, styleExpanded]}
          />
          {this.state.isExpanded && (
            <React.Fragment>
              <InsuranceRow insuranceType="TRAVEL_PLUS" />
              <InsuranceRow insuranceType="TRAVEL_BASIC" />
              <InsuranceRow insuranceType="NONE" />
              <View style={styleSheet.separatorFullWidth}>
                <SeparatorFullWidth color={defaultTokens.paletteInkLight} />
              </View>
            </React.Fragment>
          )}

          <View style={styleSheet.row}>
            <View style={styleSheet.item}>
              <Text style={styleSheet.text}>
                <Translation id="mmb.trip_services.order.total" />
              </Text>
            </View>
            <Price price={this.props.price} style={styleSheet.price} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withInsuranceContext(state => ({
  amount: state.amount,
  currency: state.currency,
}))(OrderSummary);

const styleSheet = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: defaultTokens.paletteInkNormal,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  item: {
    flexGrow: 1,
  },
  text: {
    color: defaultTokens.colorTextSecondary,
  },
  price: {
    color: defaultTokens.paletteWhite,
  },
  separatorFullWidth: {
    marginVertical: 15,
  },
  textIcon: {
    fontSize: 12,
    color: defaultTokens.colorTextSecondary,
    alignSelf: 'center',
    transform: [{ rotate: '180deg' }],
    marginTop: 5,
  },
  textIconExpanded: {
    transform: [],
    marginTop: 0,
  },
});
