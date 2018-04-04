// @flow

import * as React from 'react';
import { View } from 'react-native';
import { connect } from '@kiwicom/react-native-app-redux';
import { Icon, Color } from '@kiwicom/react-native-app-shared';
import Translation, {
  DummyTranslation,
} from '@kiwicom/react-native-app-translations';

import PricePopup from './PricePopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';
import type { CurrentSearchStats } from '../../filter/CurrentSearchStatsType';

type Props = {|
  start: number | null,
  end: number | null,
  currency: string,
  onChange: OnChangeFilterParams => void,
  currentSearchStats: CurrentSearchStats,
  isActive: boolean,
|};

type State = {|
  isPopupOpen: boolean,
|};

class PriceFilter extends React.Component<Props, State> {
  state = {
    isPopupOpen: false,
  };

  filterButtonClicked = () => {
    if (this.props.isActive) {
      this.props.onChange({
        minPrice: null,
        maxPrice: null,
      });
    } else {
      this.openPopup();
    }
  };

  openPopup = () =>
    this.setState({
      isPopupOpen: true,
    });

  closePopup = (callback?: Function) =>
    this.setState(
      {
        isPopupOpen: false,
      },
      callback,
    );

  handleSave = ({
    minPrice,
    maxPrice,
  }: {
    minPrice: number,
    maxPrice: number,
  }) => {
    const filter = {
      minPrice:
        minPrice !== this.props.currentSearchStats.priceMin ? minPrice : null,
      maxPrice:
        maxPrice !== this.props.currentSearchStats.priceMax ? maxPrice : null,
    };
    this.closePopup(() => this.props.onChange(filter));
  };

  getTitle = (
    start: number,
    end: number,
    min: number,
    max: number,
    currency: string,
  ) => {
    if (start === min && end === max) {
      return <Translation id="HotelsSearch.Filter.PriceFilter.Price" />;
    }
    if (start === min) {
      return <DummyTranslation id={`< ${end} ${currency}`} />;
    }
    if (end === max) {
      return <DummyTranslation id={`> ${start} ${currency}`} />;
    }
    return <DummyTranslation id={`${start} - ${end} ${currency}`} />;
  };

  render() {
    const { currentSearchStats: { priceMin, priceMax }, isActive } = this.props;
    const start = this.props.start || priceMin;
    const end = this.props.end || priceMax;
    const currency = 'EUR'; // Currently only EUR supported. Should be improved in future release
    return (
      <View>
        <FilterButton
          title={this.getTitle(start, end, priceMin, priceMax, currency)}
          icon={<Icon name="attach-money" size={18} color={Color.white} />}
          isActive={isActive}
          onPress={this.filterButtonClicked}
        />
        <PricePopup
          isVisible={this.state.isPopupOpen}
          onClose={this.closePopup}
          onSave={this.handleSave}
          min={priceMin}
          max={priceMax}
          start={start}
          end={end}
          currency={currency}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentSearchStats: state.hotels.currentSearchStats,
});

export default connect(mapStateToProps)(PriceFilter);
