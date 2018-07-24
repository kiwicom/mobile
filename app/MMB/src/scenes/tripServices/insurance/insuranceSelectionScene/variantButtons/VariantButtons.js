// @flow

import * as React from 'react';
import idx from 'idx';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import VariantButton from './VariantButton';
import type {
  VariantButtons as VariantButtonsType,
  InsuranceType,
} from './__generated__/VariantButtons.graphql';

type PriceType = {|
  +amount: ?number,
  +currency: ?string,
|};

type Props = {|
  +data: VariantButtonsType,
  +selectedVariant: InsuranceType,
  +selectVariant: (variant: ?InsuranceType) => void,
|};

class VariantButtons extends React.Component<Props> {
  getPriceOfType = (insuranceType: InsuranceType): ?PriceType => {
    const insurancePrices = idx(this.props, _ => _.data.insurancePrices) || [];
    return idx(
      insurancePrices.find(
        insurancePrice =>
          idx(insurancePrice, _ => _.insuranceType) === insuranceType,
      ),
      _ => _.price,
    );
  };

  selectTravelPlus = () => this.props.selectVariant('TRAVEL_PLUS');
  selectTravelBasic = () => this.props.selectVariant('TRAVEL_BASIC');
  selectNone = () => this.props.selectVariant('NONE');

  render() {
    const travelPlusPrice = this.getPriceOfType('TRAVEL_PLUS');
    const travelBasicPrice = this.getPriceOfType('TRAVEL_BASIC');
    const nonePrice = this.getPriceOfType('NONE');

    return (
      <React.Fragment>
        <VariantButton
          iconComponent={<TextIcon code="'" />}
          title={<Translation id="mmb.trip_services.insurance.variant.plus" />}
          price={travelPlusPrice}
          isSelected={this.props.selectedVariant === 'TRAVEL_PLUS'}
          onPress={this.selectTravelPlus}
        />
        <VariantButton
          iconComponent={<TextIcon code="'" />}
          title={<Translation id="mmb.trip_services.insurance.variant.basic" />}
          price={travelBasicPrice}
          isSelected={this.props.selectedVariant === 'TRAVEL_BASIC'}
          onPress={this.selectTravelBasic}
        />
        <VariantButton
          iconComponent={<TextIcon code=":" />}
          title={<Translation id="mmb.trip_services.insurance.variant.none" />}
          price={nonePrice}
          isSelected={this.props.selectedVariant === 'NONE'}
          onPress={this.selectNone}
        />
      </React.Fragment>
    );
  }
}

export default createFragmentContainer(
  VariantButtons,
  graphql`
    fragment VariantButtons on BookingInterface {
      insurancePrices {
        insuranceType
        price {
          amount
          currency
        }
      }
    }
  `,
);
