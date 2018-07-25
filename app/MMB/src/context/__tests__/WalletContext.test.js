// @flow strict

import * as React from 'react';
import renderer from 'react-test-renderer';
import MockDate from 'mockdate';

import WalletContext from '../WalletContext';

MockDate.set('2018-01-01');

class ContextConsumer extends React.Component<{}> {
  render = () => null;
}

const getWrapper = () =>
  renderer.create(
    <WalletContext.Provider>
      <WalletContext.Consumer>
        {({
          actions: { addSegment, addPkpassData, setSelectedSegment },
          ...rest
        }) => (
          <ContextConsumer
            {...rest}
            addSegment={addSegment}
            addPkpassData={addPkpassData}
            setSelectedSegment={setSelectedSegment}
          />
        )}
      </WalletContext.Consumer>
    </WalletContext.Provider>,
  );

const segment1 = {
  id: '123',
  airlineLogoUrl: 'lol',
  flightDate: new Date(),
};
const segment2 = {
  id: '1234',
  airlineLogoUrl: 'lollo',
  flightDate: new Date(),
};

describe('WalletContext', () => {
  it('injects the props to consumers', () => {
    const wrapper = getWrapper();

    const instance = wrapper.root.findByType(ContextConsumer);
    expect(instance.props.segments).toEqual([]);
    expect(instance.props.selectedSegment).toBe(null);

    expect(typeof instance.props.addSegment).toBe('function');
    expect(typeof instance.props.addPkpassData).toBe('function');
    expect(typeof instance.props.setSelectedSegment).toBe('function');
  });

  it('adds segment', () => {
    const wrapper = getWrapper();
    const instance = wrapper.root.findByType(ContextConsumer);

    instance.props.addSegment(segment1);
    expect(instance.props.segments).toEqual([segment1]);

    instance.props.addSegment(segment2);
    expect(instance.props.segments).toEqual([segment1, segment2]);
  });

  it('adds pkpass data', () => {
    const wrapper = getWrapper();
    const instance = wrapper.root.findByType(ContextConsumer);

    instance.props.addSegment(segment1);
    instance.props.addSegment(segment2);
    instance.props.addPkpassData('Passenger', 'url', segment1.id);

    const expectedResult = {
      ...segment1,
      passengerName: 'Passenger',
      pkpassUrl: 'url',
    };
    expect(instance.props.segments).toEqual([expectedResult, segment2]);
    expect(instance.props.selectedSegment).toEqual(expectedResult);
  });

  it('sets selected segment', () => {
    const wrapper = getWrapper();
    const instance = wrapper.root.findByType(ContextConsumer);

    instance.props.addSegment(segment1);
    instance.props.addSegment(segment2);

    instance.props.setSelectedSegment(segment1.id);
    expect(instance.props.selectedSegment).toEqual(segment1);

    instance.props.setSelectedSegment(null);
    expect(instance.props.selectedSegment).toBe(null);
  });
});
