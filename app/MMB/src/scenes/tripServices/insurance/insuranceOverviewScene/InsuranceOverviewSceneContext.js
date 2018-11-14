// @flow

import * as React from 'react';

const defaultState = {
  passengers: [],
  insurancePrices: [],
  changes: [],
  initialised: false,
  amount: 0,
  currency: 'EUR',
  actions: {
    initState: () => {},
    updatePassengerInsurance: () => {},
    reset: () => {},
    refundMutationSuccesful: () => {},
    hasChanged: () => false,
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext<State>({
  ...defaultState,
});

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
  +price?: {|
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
  amount: number,
  currency: string,
  +actions: {
    +initState: (data: Data) => void,
    +updatePassengerInsurance: (args: UpdatePassengerInsurance) => void,
    +reset: () => void,
    +refundMutationSuccesful: () => void,
    +hasChanged: () => boolean,
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
        reset: this.reset,
        refundMutationSuccesful: this.refundMutationSuccesful,
        hasChanged: this.hasChanged,
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
      // TODO test whether all currencies are the same and do something if not?
      const currency =
        insurancePrices.find(insurancePrice => insurancePrice.price?.currency)
          ?.price?.currency ?? '';
      this.setState({
        passengers,
        insurancePrices,
        changes,
        initialised: true,
        currency,
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

    const updatedAmount = this.computeUpdatedAmount(updatedChanges);

    this.setState({
      passengers: updatedPassengers,
      changes: updatedChanges,
      amount: updatedAmount,
    });
  };

  hasChanged = () => {
    return !this.state.changes.every(change => change.from === change.to);
  };

  computeUpdatedAmount = (updatedChanges: Change[]) => {
    //TODO deal with edge case when all provided insurance prices are not in the same currency
    return updatedChanges
      .map(change => {
        if (change.to === change.from) {
          return 0;
        }
        let newPrice = 0;
        let originalPrice = 0;
        if (change.to !== 'NONE') {
          newPrice =
            this.state.insurancePrices.find(
              insurancePrice => insurancePrice.insuranceType === change.to,
            )?.price?.amount ?? 0;
        }
        if (change.from !== 'NONE') {
          originalPrice =
            this.state.insurancePrices.find(
              insurancePrice => insurancePrice.insuranceType === change.from,
            )?.price?.amount ?? 0;
        }
        return newPrice - originalPrice;
      })
      .reduce((curr, acc) => curr + acc, 0);
  };

  reset = () => {
    this.setState({
      passengers: [],
      insurancePrices: [],
      changes: [],
      initialised: false,
      amount: 0,
    });
  };

  refundMutationSuccesful = () => {
    this.setState({
      changes: [],
      amount: 0,
    });
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

export function withAllInsuranceContext(Component: React.ElementType) {
  const WithAllInsuranceContext = (props: Object) => (
    <Consumer>
      {({ actions, ...rest }) => (
        <Component {...props} {...rest} {...actions} />
      )}
    </Consumer>
  );
  // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
  if (Component.navigationOptions) {
    WithAllInsuranceContext.navigationOptions = Component.navigationOptions;
  }
  return WithAllInsuranceContext;
}
