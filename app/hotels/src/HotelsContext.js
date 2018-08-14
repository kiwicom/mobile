// @flow

import * as React from 'react';

const defaultState = {
  version: '',
  cityId: null,
  checkin: null,
  checkout: null,
  roomsConfiguration: null,
  currency: '',
  cityName: null,
  isNew: false,
  actions: {
    setIsNew: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

export type RoomConfigurationType = {|
  +adultsCount: number,
  +children: $ReadOnlyArray<{|
    +age: number,
  |}>,
|};

type Props = {|
  +children: React.Node,
  +version: string,
  +cityName: ?string,
  +cityId: ?string,
  +checkin: ?string,
  +checkout: ?string,
  +roomsConfiguration: ?RoomConfigurationType,
  +currency: string,
|};

type State = {|
  +version: string,
  +cityName: string | null,
  +cityId: string | null,
  +checkin: Date | null,
  +checkout: Date | null,
  +roomsConfiguration: RoomConfigurationType | null,
  +currency: string,
  isNew: boolean,
  +actions: {|
    +setIsNew: (isNew: boolean) => void,
  |},
|};

const validateDate = (input: string): boolean => {
  const reg = /^\d{4}-\d{2}-\d{2}$/;
  return reg.test(input);
};

export const getAsUtcDate = (input: ?string): Date | null => {
  if (input == null || !validateDate(input)) {
    return null;
  }
  const [year, month, date] = input.split('-').map(item => parseInt(item));
  return new Date(Date.UTC(year, month - 1, date));
};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      version: props.version,
      cityId: props.cityId || null,
      checkin: getAsUtcDate(props.checkin),
      checkout: getAsUtcDate(props.checkout),
      roomsConfiguration: props.roomsConfiguration || null,
      currency: props.currency,
      cityName: props.cityName || null,
      isNew: false,
      actions: {
        setIsNew: this.setIsNew,
      },
    };
  }

  setIsNew = (isNew: boolean) => {
    this.setState({ isNew });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

export function withHotelsContext(Component: React.ElementType) {
  return function WithHotelsContext(props: Object) {
    return <Consumer>{value => <Component {...props} {...value} />}</Consumer>;
  };
}
