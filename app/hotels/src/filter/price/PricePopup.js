// @flow

import * as React from 'react';
import {
  Text,
  ButtonPopup,
  Slider,
  StyleSheet,
  SliderLabels,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
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

  static getDerivedStateFromProps = ({ start, end, isVisible }: Props) =>
    isVisible
      ? null
      : {
          price: {
            start,
            end,
          },
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
          buttonCloseTitle={
            <Translation id="hotels_search.filter.hotel_facilities_popup.close" />
          }
          onSave={this.onSave}
          onClose={this.props.onClose}
          isVisible={this.props.isVisible}
        >
          <Text style={styles.title}>
            <Translation id="hotels_search.filter.price_popup.title" />
            <Translation passThrough=" " />
            <Text style={styles.subtitle}>
              <Translation id="hotels_search.filter.price_popup.subtitle" />
            </Text>
          </Text>
          <SliderLabels
            max={max}
            min={min}
            startLabel={
              <Translation
                id="hotels_search.filter.price_popup.price_label"
                values={{
                  amount: start * daysOfStay,
                  currency: currency,
                }}
              />
            }
            startValue={start}
            endLabel={
              <Translation
                id="hotels_search.filter.price_popup.price_label"
                values={{
                  amount: end * daysOfStay,
                  currency: currency,
                }}
              />
            }
            endValue={end}
          />
          <Slider
            startValue={start}
            endValue={end}
            min={min}
            max={max}
            onChange={this.handlePriceChanged}
          />
        </ButtonPopup>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: defaultTokens.colorHeading,
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 15,
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '200',
    color: defaultTokens.colorTextSecondary,
  },
});
