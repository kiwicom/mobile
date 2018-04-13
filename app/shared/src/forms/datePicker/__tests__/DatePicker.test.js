// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';
import { View } from 'react-native';
import MockDate from 'mockdate';

import DatePicker from '../DatePicker';
import TextIcon from '../../../icons/TextIcon';

MockDate.set('2018-01-01');

class PickerWrapper extends React.Component<{}, { date: Date }> {
  state = {
    date: new Date(),
  };

  onDateChange = (date: Date) => {
    this.setState({ date });
  };

  render = () => (
    <DatePicker
      date={this.state.date}
      onDateChange={this.onDateChange}
      iconComponent={<TextIcon>&#xe0a2;</TextIcon>}
      {...this.props}
    />
  );
}

describe('DatePicker', () => {
  it('renders in playground', () => {
    PlaygroundRenderer.render(<PickerWrapper />);
  });

  it('works with min date', () => {
    PlaygroundRenderer.render(
      <View>
        <PickerWrapper minDate={new Date()} />
      </View>,
    );
  });

  it('works with max date', () => {
    PlaygroundRenderer.render(
      <View>
        <PickerWrapper maxDate={new Date()} />
      </View>,
    );
  });

  it('works with other date formats', () => {
    PlaygroundRenderer.render(
      <View>
        <PickerWrapper format="L" />
      </View>,
    );
  });
});
