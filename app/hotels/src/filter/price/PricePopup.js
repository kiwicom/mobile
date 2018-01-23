// @flow

import * as React from 'react';
import { Text } from 'react-native';
import { ButtonPopup, Slider, Price } from '@kiwicom/react-native-app-common';

type Props = {|
  onClose: () => void,
  onSave: ({ minPrice: number, maxPrice: number }) => void,
  isVisible: boolean,
  min: number,
  max: number,
  start: number,
  end: number,
  currency: string,
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

  componentWillReceiveProps = ({ start, end }: Props) =>
    this.setState({ price: { start, end } });

  handlePriceChanged = ([start, end]: number[]) =>
    this.setState({ price: { start, end } });

  onSave = () =>
    this.props.onSave({
      minPrice: this.state.price.start,
      maxPrice: this.state.price.end,
    });

  renderLabel = (
    start: number,
    end: number,
    min: number,
    max: number,
    currency: string,
  ) => {
    if (start === min && end === max) {
      return <Text>any price</Text>;
    }

    const endPrice = <Price amount={end} currency={currency} />;
    if (start === min) {
      return <Text>maximum {endPrice}</Text>;
    }

    const startPrice = <Price amount={start} currency={currency} />;
    if (end === max) {
      return <Text>minimum {startPrice}</Text>;
    }

    return (
      <Text>
        {startPrice} - {endPrice}
      </Text>
    );
  };

  render() {
    const { start, end } = this.state.price;
    const { min, max, currency } = this.props;

    const label = this.renderLabel(start, end, min, max, currency);
    return (
      <ButtonPopup
        buttonTitle="Save"
        onSave={this.onSave}
        onClose={this.props.onClose}
        isVisible={this.props.isVisible}
        doScroll={false}
      >
        <Text>Price: {label}</Text>
        <Slider
          startValue={start}
          endValue={end}
          min={min}
          max={max}
          onChange={this.handlePriceChanged}
        />
      </ButtonPopup>
    );
  }
}
