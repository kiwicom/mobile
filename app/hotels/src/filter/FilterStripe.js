// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';

import FilterButton from './FilterButton';
import type { FilterType } from './FilterType';

const styles = {
  view: {
    width: '100%',
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
};

type State = {|
  filters: FilterType[],
|};

export default class FilterStripe extends React.Component<{||}, State> {
  state = {
    filters: [
      {
        title: 'price',
        filter: 'price',
        icon: { name: 'attach-money' },
        isActive: false,
      },
      {
        title: 'price2',
        filter: 'price2',
        icon: { name: 'attach-money' },
        isActive: false,
      },
    ],
  };

  handleButtonPress = (filterId: string) => () => {
    // TODO Open filter control

    this.setState(prevState => {
      const filters = prevState.filters;
      const filter: ?FilterType = filters.find(
        filter => filter.filter === filterId,
      );
      if (!filter) {
        return;
      }
      const isActive = filter.isActive;
      filter.isActive = Boolean(filter.configuration) || !isActive;

      return { filters };
    });
  };

  renderFilterButton = ({ title, icon, filter, isActive }: FilterType) => (
    <FilterButton
      key={filter}
      title={title}
      icon={icon}
      isActive={isActive}
      onPress={this.handleButtonPress(filter)}
    />
  );

  render = () => {
    const { filters } = this.state;
    return (
      <View style={styles.view}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {filters.map(this.renderFilterButton)}
        </ScrollView>
      </View>
    );
  };
}
