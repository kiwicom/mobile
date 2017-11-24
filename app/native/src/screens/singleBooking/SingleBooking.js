// @flow

import * as React from 'react';
import { Text, ScrollView } from 'react-native';

type Props = {|
  bookingId: string,
|};

export default class SingleBooking extends React.Component<Props, {}> {
  static navigationOptions = ({ bookingId }: Props) => ({
    title: `Booking detail - ${bookingId}`,
  });

  render = () => {
    return (
      <ScrollView>
        <Text>TODO: PrivateApiRenderer with offline cache</Text>
        <Text>{JSON.stringify(this.props.bookingId, null, 1)}</Text>
      </ScrollView>
    );
  };
}
