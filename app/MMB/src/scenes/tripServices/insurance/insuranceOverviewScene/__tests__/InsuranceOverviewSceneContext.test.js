// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import InsuranceOverviewSceneContext from '../InsuranceOverviewSceneContext';

class ContextConsumer extends React.Component<{}> {
  render() {
    return null;
  }
}

const getWrapper = () =>
  renderer.create(
    <InsuranceOverviewSceneContext.Provider>
      <InsuranceOverviewSceneContext.Consumer>
        {({ actions: { initState, updatePassengerInsurance }, ...rest }) => (
          <ContextConsumer
            {...rest}
            initState={initState}
            updatePassengerInsurance={updatePassengerInsurance}
          />
        )}
      </InsuranceOverviewSceneContext.Consumer>
    </InsuranceOverviewSceneContext.Provider>,
  );

describe('InsuranceOverviewSceneContext', () => {
  it('injects the props to consumers', () => {
    const wrapper = getWrapper();

    const instance = wrapper.root.findByType(ContextConsumer);
    expect(instance.props.passengers).toEqual([]);
    expect(instance.props.insurancePrices).toEqual([]);
    expect(instance.props.changes).toEqual([]);
    expect(instance.props.initialised).toBe(false);
    expect(instance.props.amount).toBe(0);
    expect(typeof instance.props.initState).toBe('function');
    expect(typeof instance.props.updatePassengerInsurance).toBe('function');
  });

  it('initialises the state', () => {
    const wrapper = getWrapper();
    const instance = wrapper.root.findByType(ContextConsumer);

    instance.props.initState({
      passengers: [
        {
          fullName: 'John Smith',
          title: 'Mr',
          birthday: new Date('1980-08-08'),
          databaseId: 123,
          insuranceType: 'NONE',
        },
      ],
      insurancePrices: [
        {
          insuranceType: 'NONE',
          price: null,
        },
      ],
    });

    expect(instance.props.passengers).toEqual([
      {
        fullName: 'John Smith',
        title: 'Mr',
        birthday: new Date('1980-08-08'),
        databaseId: 123,
        insuranceType: 'NONE',
      },
    ]);
    expect(instance.props.insurancePrices).toEqual([
      {
        insuranceType: 'NONE',
        price: null,
      },
    ]);
    expect(instance.props.changes).toEqual([
      {
        databaseId: 123,
        from: 'NONE',
        to: 'NONE',
      },
    ]);
    expect(instance.props.initialised).toBe(true);
    expect(instance.props.amount).toBe(0);
  });

  it("updates a passenger's insurance", () => {
    const wrapper = getWrapper();
    const instance = wrapper.root.findByType(ContextConsumer);
    instance.props.updatePassengerInsurance({
      databaseId: 123,
      insuranceType: 'TRAVEL_PLUS',
    });
    expect(instance.props.passengers).toEqual([]);
    expect(instance.props.changes).toEqual([]);
    expect(instance.props.initialised).toBe(false);

    instance.props.initState({
      passengers: [
        {
          fullName: 'John Smith',
          title: 'Mr',
          birthday: new Date('1980-08-08'),
          databaseId: 123,
          insuranceType: 'NONE',
        },
      ],
      insurancePrices: [
        {
          insuranceType: 'NONE',
          price: null,
        },
        {
          insuranceType: 'TRAVEL_PLUS',
          price: {
            amount: 24.32,
            currency: 'EUR',
          },
        },
      ],
    });

    instance.props.updatePassengerInsurance({
      databaseId: 123,
      insuranceType: 'TRAVEL_PLUS',
    });
    expect(instance.props.passengers).toEqual([
      {
        fullName: 'John Smith',
        title: 'Mr',
        birthday: new Date('1980-08-08'),
        databaseId: 123,
        insuranceType: 'TRAVEL_PLUS',
      },
    ]);
    expect(instance.props.changes).toEqual([
      {
        databaseId: 123,
        from: 'NONE',
        to: 'TRAVEL_PLUS',
      },
    ]);
    expect(instance.props.initialised).toBe(true);
    expect(instance.props.amount).toBe(24.32);
  });
});
