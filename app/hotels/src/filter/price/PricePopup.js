// @flow

import * as React from 'react';
import { Text, ButtonPopup, Slider } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

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

  static getDerivedStateFromProps = ({ start, end }: Props) => ({
    price: {
      start,
      end,
    },
  });

  handlePriceChanged = ([start, end]: number[]) =>
    this.setState({
      price: {
        start,
        end,
      },
    });

  onSave = () =>
    this.props.onSave({
      minPrice: this.state.price.start,
      maxPrice: this.state.price.end,
    });

  renderLabel = () => {
    const { start, end } = this.state.price;
    const { currency } = this.props;

    return (
      <Text>
        <Translation passThrough={`${start} ${currency}`} />
        <Translation passThrough=" - " />
        <Translation passThrough={`${end} ${currency}`} />
      </Text>
    );
  };

  render() {
    const { start, end } = this.state.price;
    const { min, max } = this.props;

    const label = this.renderLabel();
    return (
      <ButtonPopup
        buttonTitle={<Translation id="hotels_search.filter.price_popup.save" />}
        onSave={this.onSave}
        onClose={this.props.onClose}
        isVisible={this.props.isVisible}
      >
        <Text>
          <Translation id="hotels_search.filter.price_popup.title" />
          <Translation passThrough=" " />
          {label}
        </Text>
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
