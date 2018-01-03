// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';

import StarsFilter from './stars/StarsFilter';
import PriceFilter from './price/PriceFilter';

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

export default class FilterStripe extends React.Component<{||}> {
  handleChange = () => {
    // TODO add onChange prop, pass changed values via callback
  };

  render = () => {
    return (
      <View style={styles.view}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <StarsFilter onChange={this.handleChange} />
          <PriceFilter
            onChange={this.handleChange}
            min={18}
            max={365}
            start={18}
            end={365}
            currency="EUR"
          />
        </ScrollView>
      </View>
    );
  };
}
