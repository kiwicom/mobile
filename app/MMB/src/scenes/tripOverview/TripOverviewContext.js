//@flow

import * as React from 'react';
import { type AlertTranslationType } from '@kiwicom/mobile-localization';

const defaultState = {
  warnings: [],
  type: '%other',
  actions: {
    addWarningData: () => {},
  },
};
const { Consumer, Provider: ContextProvider } = React.createContext<State>({
  ...defaultState,
});

export type BookingType =
  | 'BookingReturn'
  | 'BookingOneWay'
  | 'BookingMulticity'
  | '%other';

type Props = {|
  +children: React.Node,
  +type: BookingType,
|};

type TimelineTitle = {|
  +localTime: ?Date,
  +iataCode: ?string,
|};

type Warning = {| +text: AlertTranslationType, +timelineTitle: TimelineTitle |};

type State = {|
  warnings: Warning[],
  +type: BookingType,
  +actions: {|
    +addWarningData: (warning: Warning) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      warnings: [],
      type: props.type,
      actions: {
        addWarningData: this.addWarningData,
      },
    };
  }

  addWarningData = (warning: Warning) => {
    const { warnings } = this.state;
    this.setState({ warnings: [...warnings, warning] });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };
