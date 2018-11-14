// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';

import TextButton from '../../buttons/TextButton';
import AgePicker from '../AgePicker';

type State = {|
  isVisible: boolean,
  number: number,
|};

class Wrapper extends React.Component<{||}, State> {
  state = {
    isVisible: false,
    number: 0,
  };

  toggle = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  onChange = (number: number) => {
    this.setState({ number });
  };

  render() {
    return (
      <React.Fragment>
        <TextButton
          title={<Translation passThrough="Show age picker" />}
          onPress={this.toggle}
        />
        <AgePicker
          isVisible={this.state.isVisible}
          onClose={this.toggle}
          max={3}
          min={1}
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}

it('renders', () => {
  PlaygroundRenderer.render(<Wrapper />, false, 'AgePicker');
});
