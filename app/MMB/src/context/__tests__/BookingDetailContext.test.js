// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { DateFormatter } from '@kiwicom/mobile-localization';

import BookingDetailContext from '../BookingDetailContext';

class ContextConsumer extends React.Component<{}> {
  render = () => null;
}

const getWrapper = () =>
  renderer.create(
    <BookingDetailContext.Provider>
      <BookingDetailContext.Consumer>
        {({ actions: { setBookingDetail, setETicketPath }, ...rest }) => (
          <ContextConsumer
            {...rest}
            setBookingDetail={setBookingDetail}
            setETicketPath={setETicketPath}
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
    expect(
      DateFormatter(instance.props.arrivalTime).formatForMachine(),
    ).toEqual(DateFormatter(new Date()).formatForMachine());
    expect(instance.props.arrivalCityId).toBe('');
    expect(typeof instance.props.setBookingDetail).toBe('function');
  });

  it('it setsBookingDetail', () => {
    const wrapper = getWrapper();
    const instance = wrapper.root.findByType(ContextConsumer);

    instance.props.setBookingDetail({
      isPastBooking: true,
      bookingId: '123',
      arrivalCityId: 'oslo_no',
      arrivalTime: new Date(1),
    });

    expect(instance.props.isPastBooking).toBe(true);
    expect(instance.props.bookingId).toBe('123');
    expect(instance.props.arrivalCityId).toBe('oslo_no');
    expect(instance.props.arrivalTime).toEqual(new Date(1));
  });

  it('it sets eTicketPath', () => {
    const wrapper = getWrapper();
    const instance = wrapper.root.findByType(ContextConsumer);

    instance.props.setETicketPath('path/is/test');

    expect(instance.props.eTicketPath).toBe('path/is/test');
  });
});
