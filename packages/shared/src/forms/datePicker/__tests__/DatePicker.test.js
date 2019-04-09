// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import MockDate from 'mockdate';

import Text from '../../../Text';
import DatePicker from '../DatePicker';
import Icon from '../../../icons/Icon';

MockDate.set('2018-01-01');

const DEEP_RENDER = false;
const TITLE = 'DatePicker';

type Props = { +useCustomButton?: boolean };
type State = {| date: Date |};

class PickerWrapper extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  onDateChange = (date: Date) => {
    this.setState({ date });
  };

  render() {
    const { useCustomButton, ...rest } = this.props;
    const CustomButton = useCustomButton ? (
      // $FlowExpectedError: this is fine
      <Text>{this.state.date.toISOString()}</Text>
    ) : (
      undefined
    );

    return (
      <DatePicker
        date={this.state.date}
        onDateChange={this.onDateChange}
        iconComponent={<Icon name="wifi-off" />}
        {...rest}
        customButton={CustomButton}
      />
    );
  }
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

  it('works with custom button', () => {
    PlaygroundRenderer.render(
      <PickerWrapper useCustomButton={true} />,
      DEEP_RENDER,
      TITLE,
    );
  });
});
