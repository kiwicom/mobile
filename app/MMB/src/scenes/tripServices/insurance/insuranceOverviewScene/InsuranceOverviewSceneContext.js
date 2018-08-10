// @flow

import * as React from 'react';

const defaultState = {
  passengers: [],
  insurancePrices: [],
  changes: [],
  initialised: false,
  actions: {
    initState: () => {},
    updatePassengerInsurance: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext(
  defaultState,
);

type InsuranceType = 'NONE' | 'TRAVEL_BASIC' | 'TRAVEL_PLUS';

type Passenger = {|
  +fullName: ?string,
  +title: ?string,
  +birthday: ?Date,
  +databaseId: ?number,
  +insuranceType: ?InsuranceType,
|};

type InsurancePrice = {|
  +insuranceType: InsuranceType,
  +price: {|
    +amount: number,
    +currency: string,
  |},
|};

type Props = {|
  +children: React.Node,
|};

type Data = {|
  +passengers: Passenger[],
  +insurancePrices: InsurancePrice[],
|};

type Change = {|
  +databaseId: ?number,
  +from: ?InsuranceType,
  +to: ?InsuranceType,
|};

type UpdatePassengerInsurance = {|
  +databaseId: ?number,
  +insuranceType: ?InsuranceType,
|};

type State = {|
  ...Data,
  changes: Change[],
  initialised: boolean,
  +actions: {
    +initState: (data: Data) => void,
    +updatePassengerInsurance: (args: UpdatePassengerInsurance) => void,
  },
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ...defaultState,
      actions: {
        initState: this.initState,
        updatePassengerInsurance: this.updatePassengerInsurance,
      },
    };
  }

  initState = ({ passengers, insurancePrices }: Data) => {
    if (
      this.state.passengers.length === 0 &&
      this.state.insurancePrices.length === 0 &&
      !this.state.initialised
    ) {
      const changes = passengers.map(passenger => ({
        databaseId: passenger.databaseId,
        from: passenger.insuranceType,
        to: passenger.insuranceType,
      }));
      this.setState({
        passengers,
        insurancePrices,
        changes,
        initialised: true,
      });
    }
  };

  updatePassengerInsurance = ({
    databaseId,
    insuranceType,
  }: UpdatePassengerInsurance) => {
    if (!this.state.initialised) {
      return;
    }

    const { passengers, changes } = this.state;

    const passengerIndex = passengers.findIndex(
      _passenger => _passenger.databaseId === databaseId,
    );
    const updatedPassengers = [
      ...passengers.slice(0, passengerIndex),
      {
        ...passengers[passengerIndex],
        insuranceType,
      },
      ...passengers.slice(passengerIndex + 1),
    ];
    const changeIndex = changes.findIndex(
      change => change.databaseId === databaseId,
    );
    const updatedChanges = [
      ...changes.slice(0, changeIndex),
      {
        ...changes[changeIndex],
        to: insuranceType,
      },
      ...changes.slice(changeIndex + 1),
    ];
    this.setState({ passengers: updatedPassengers, changes: updatedChanges });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

export function withInsuranceContext(select: (state: State) => Object) {
  return function(Component: React.ElementType) {
    const WithInsuranceContext = (props: Object) => {
      const mapStateToProps = state => {
        const stateProps = select(state);
        return <Component {...props} {...stateProps} />;
      };

      return <Consumer>{mapStateToProps}</Consumer>;
    };

    // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
    if (Component.navigationOptions) {
      WithInsuranceContext.navigationOptions = Component.navigationOptions;
    }
    return WithInsuranceContext;
  };
}
