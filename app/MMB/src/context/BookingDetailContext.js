// @flow

import * as React from 'react';

export type BookingDetail = {|
  +id: string,
  +isPastBooking: boolean,
  +bookingId: number,
  +arrivalCityId: string,
  +arrivalTime: Date,
  +departureTime: Date,
  +authToken: string,
|};

const defaultState = {
  id: '',
  isPastBooking: false,
  bookingId: 0,
  arrivalCityId: '',
  arrivalTime: new Date(),
  departureTime: new Date(),
  isMissingDocumentId: false,
  authToken: '',
  actions: {
    setBookingDetail: () => {},
    setIsMissingDocumentId: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
|};

type State = {|
  ...BookingDetail,
  +isMissingDocumentId: boolean,
  +actions: {|
    +setBookingDetail: (booking: BookingDetail) => void,
    +setIsMissingDocumentId: (isMissingDocumentId: boolean) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      actions: {
        setBookingDetail: this.setBookingDetail,
        setIsMissingDocumentId: this.setIsMissingDocumentId,
      },
    };
  }

  setBookingDetail = (booking: BookingDetail) => {
    this.setState(booking);
  };

  setIsMissingDocumentId = (isMissingDocumentId: boolean) => {
    this.setState({ isMissingDocumentId });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

export function withBookingDetailContext(select: (state: State) => Object) {
  return function(Component: React.ElementType) {
    const WithBookingDetailContext = (props: Object) => {
      const mapStateToProps = state => {
        const stateProps = select(state);
        return <Component {...props} {...stateProps} />;
      };

      return <Consumer>{mapStateToProps}</Consumer>;
    };

    // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
    if (Component.navigationOptions) {
      WithBookingDetailContext.navigationOptions = Component.navigationOptions;
    }
    return WithBookingDetailContext;
  };
}
