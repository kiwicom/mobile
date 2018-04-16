// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import MockDate from 'mockdate';

import DatePicker from '../DatePicker';
import TextIcon from '../../../icons/TextIcon';

MockDate.set('2018-01-01');

class PickerWrapper extends React.Component<{}, {| date: Date |}> {
  state = {
    date: new Date(),
  };

  onDateChange = (date: Date) => {
    this.setState({ date });
  };

  render = () => (
    // $FlowIssue: https://github.com/facebook/flow/issues/2405 (cannot use spread operator with exact object)
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
    PlaygroundRenderer.render(<PickerWrapper minDate={new Date()} />);
  });

  it('works with max date', () => {
    PlaygroundRenderer.render(<PickerWrapper maxDate={new Date()} />);
  });

  it('works with other date formats', () => {
    PlaygroundRenderer.render(<PickerWrapper format="L" />);
  });
});
