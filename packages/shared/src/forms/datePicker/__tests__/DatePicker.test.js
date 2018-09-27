// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import MockDate from 'mockdate';

import DatePicker from '../DatePicker';
import TextIcon from '../../../icons/TextIcon';

MockDate.set('2018-01-01');

const DEEP_RENDER = false;
const TITLE = 'DatePicker';

class PickerWrapper extends React.Component<{}, {| date: Date |}> {
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
      iconComponent={<TextIcon code="z" orbit={true} />}
      {...this.props}
    />
  );
}

describe('DatePicker', () => {
  it('renders in playground', () => {
    PlaygroundRenderer.render(<PickerWrapper />, DEEP_RENDER, TITLE);
  });

  it('works with min date', () => {
    PlaygroundRenderer.render(
      <PickerWrapper minDate={new Date()} />,
      DEEP_RENDER,
      TITLE,
    );
  });

  it('works with max date', () => {
    PlaygroundRenderer.render(
      <PickerWrapper maxDate={new Date()} />,
      DEEP_RENDER,
      TITLE,
    );
  });

  it('works with other date formats', () => {
    PlaygroundRenderer.render(<PickerWrapper format="L" />, DEEP_RENDER, TITLE);
  });
});
