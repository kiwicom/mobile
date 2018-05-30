// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import BookingDetailContext from '../BookingDetailContext';

class ContextConsumer extends React.Component<{}> {
  render = () => null;
}

describe('BookingDetailContext', () => {
  it('injects the isPastBooking prop to consumers', () => {
    const wrapper = renderer.create(
      <BookingDetailContext.Provider isPastBooking={false}>
        <BookingDetailContext.Consumer>
          {({ isPastBooking }) => (
            <ContextConsumer isPastBooking={isPastBooking} />
          )}
        </BookingDetailContext.Consumer>
      </BookingDetailContext.Provider>,
    );

    const instance = wrapper.root.findByType(ContextConsumer);
    expect(instance.props.isPastBooking).toBe(false);
  });
});
