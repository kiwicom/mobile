// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import BookingDetailContext from '../BookingDetailContext';

class ContextConsumer extends React.Component<{}> {
  render = () => null;
}

describe('BookingDetailContext', () => {
  it('injects the props to consumers', () => {
    const wrapper = renderer.create(
      <BookingDetailContext.Provider isPastBooking={false} bookingId="1234">
        <BookingDetailContext.Consumer>
          {({ isPastBooking, bookingId }) => (
            <ContextConsumer
              isPastBooking={isPastBooking}
              bookingId={bookingId}
            />
          )}
        </BookingDetailContext.Consumer>
      </BookingDetailContext.Provider>,
    );

    const instance = wrapper.root.findByType(ContextConsumer);
    expect(instance.props.isPastBooking).toBe(false);
    expect(instance.props.bookingId).toBe('1234');
  });
});
