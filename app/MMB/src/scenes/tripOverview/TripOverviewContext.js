//@flow

import * as React from 'react';
import { type AlertTranslationType } from '@kiwicom/mobile-localization';

const { Consumer, Provider: ContextProvider } = React.createContext();

type Props = {|
  +children: React.Node,
|};

type TimelineTitle = {|
  +localTime: ?Date,
  +iataCode: ?string,
|};

type Warning = {| +text: AlertTranslationType, +timelineTitle: TimelineTitle |};

type State = {|
  warnings: Warning[],
  +actions: {|
    +addWarningData: (warning: Warning) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      warnings: [],
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
