// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  ButtonPopup,
  Slider,
  StyleSheet,
  Price,
  Translation,
  AdaptableBadge,
  TranslationFragment,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SafeAreaView } from 'react-navigation';

type Props = {|
  onClose: () => void,
  onSave: ({ minPrice: number, maxPrice: number }) => void,
  isVisible: boolean,
  min: number,
  max: number,
  start: number,
  end: number,
  currency: string,
  daysOfStay: number,
|};

type State = {|
  price: {
    start: number,
    end: number,
  },
|};

export default class PricePopup extends React.Component<Props, State> {
  state = {
    price: {
      start: 0,
      end: 0,
    },
  };

  static getDerivedStateFromProps = ({ start, end, isVisible }: Props) => {
    return isVisible
      ? null
      : {
          price: {
            start,
            end,
          },
        };
  };

  handlePriceChanged = ([start, end]: number[]) =>
    this.setState({
      price: { start, end },
    });

  onSave = () =>
    this.props.onSave({
      minPrice: this.state.price.start,
      maxPrice: this.state.price.end,
    });

  render() {
    const { start, end } = this.state.price;
    const { min, max, currency, daysOfStay } = this.props;

    return (
      <SafeAreaView>
        <ButtonPopup
          buttonTitle={
            <Translation id="hotels_search.filter.price_popup.save" />
          }
          onSave={this.onSave}
          onClose={this.props.onClose}
          isVisible={this.props.isVisible}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              <Translation id="hotels_search.filter.price_popup.title" />
              <Translation passThrough=" " />
            </Text>
            <AdaptableBadge
              translation={
                <TranslationFragment>
                  <Price amount={start * daysOfStay} currency={currency} />
                  <Translation passThrough=" - " />
                  <Price amount={end * daysOfStay} currency={currency} />
                </TranslationFragment>
              }
              type="info"
              circled={true}
              style={styles.priceBadge}
            />
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              startValue={start}
              endValue={end}
              min={min}
              max={max}
              onChange={this.handlePriceChanged}
              startLabel={
                <Price amount={min * daysOfStay} currency={currency} />
              }
              endLabel={<Price amount={max * daysOfStay} currency={currency} />}
            />
          </View>
        </ButtonPopup>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: defaultTokens.paletteInkNormal,
    paddingBottom: 10,
    lineHeight: 19,
  },
  sliderContainer: {
    paddingHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  priceBadge: {
    paddingHorizontal: 7,
  },
});
