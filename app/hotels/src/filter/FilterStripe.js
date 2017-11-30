// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import FilterButton from './FilterButton';
import type { Filter } from './types';

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

type State = {
  filters: Filter[],
};

export default class FilterStripe extends React.Component<{}, State> {
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

  _handleButtonPress = (filterId: string) => () => {
    // TODO Open filter control

    const filters = this.state.filters;
    const filter: ?Filter = filters.find(filter => filter.filter === filterId);
    if (!filter) {
      return;
    }
    const isActive = filter.isActive;
    filter.isActive = Boolean(filter.configuration) || !isActive;
    this.setState({ filters });
  };

  _renderFilterButton = ({ title, icon, filter, isActive }: Filter) => (
    <FilterButton
      key={filter}
      title={title}
      icon={icon}
      isActive={isActive}
      onPress={this._handleButtonPress(filter)}
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
          {filters.map(this._renderFilterButton)}
        </ScrollView>
      </View>
    );
  };
}
