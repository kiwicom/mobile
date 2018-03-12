// @flow

import * as React from 'react';
import {
  Text,
  ButtonPopup,
  Slider,
  Price,
} from '@kiwicom/react-native-app-shared';
import Translation from '@kiwicom/react-native-app-translations';

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

  renderLabel = () => {
    const { start, end } = this.state.price;
    const { currency } = this.props;
    const endPrice = <Price amount={end} currency={currency} />;
    const startPrice = <Price amount={start} currency={currency} />;

    return (
      <Text>
        {startPrice} - {endPrice}
      </Text>
    );
  };

  render() {
    const { start, end } = this.state.price;
    const { min, max } = this.props;

    const label = this.renderLabel();
    return (
      <ButtonPopup
        buttonTitle={<Translation id="HotelsSearch.Filter.PricePopup.Save" />}
        onSave={this.onSave}
        onClose={this.props.onClose}
        isVisible={this.props.isVisible}
      >
        <Text>Price per night: {label}</Text>
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
