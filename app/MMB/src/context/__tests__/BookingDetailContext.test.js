// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import BookingDetailContext from '../BookingDetailContext';

class ContextConsumer extends React.Component<{}> {
  render = () => null;
}

const getWrapper = () =>
  renderer.create(
    <BookingDetailContext.Provider>
      <BookingDetailContext.Consumer>
        {({ isPastBooking, bookingId, actions: { setBookingDetail } }) => (
          <ContextConsumer
            isPastBooking={isPastBooking}
            bookingId={bookingId}
            setBookingDetail={setBookingDetail}
          />
        )}
      </BookingDetailContext.Consumer>
    </BookingDetailContext.Provider>,
  );

describe('BookingDetailContext', () => {
  it('injects the props to consumers', () => {
    const wrapper = getWrapper();

    const instance = wrapper.root.findByType(ContextConsumer);
    expect(instance.props.isPastBooking).toBe(false);
    expect(instance.props.bookingId).toBe('');
    expect(typeof instance.props.setBookingDetail).toBe('function');
  });

  it('it setsBookingDetail', () => {
    const wrapper = getWrapper();
    const instance = wrapper.root.findByType(ContextConsumer);

    instance.props.setBookingDetail({ isPastBooking: true, bookingId: '123' });
    expect(instance.props.isPastBooking).toBe(true);
    expect(instance.props.bookingId).toBe('123');
  });
});
