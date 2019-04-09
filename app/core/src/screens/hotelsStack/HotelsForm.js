// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  TextButton,
  DatePicker,
  StyleSheet,
  IncrementDecrementButtons,
  Translation,
} from '@kiwicom/mobile-shared';
import { DateUtils } from '@kiwicom/mobile-localization';

import {
  withHotelsFormContext,
  type HotelsFormContextType,
} from './HotelsFormContext';

type Props = {|
  +cityName: string,
  +togglePlacepicker: () => void,
  +checkin: Date,
  +checkout: Date,
  +onCheckinChange: Date => void,
  +onCheckoutChange: Date => void,
  +onAdultsChange: number => void,
  +adultsCount: number,
  +childrenCount: number,
  +onChildrenChange: boolean => void,
|};

class HotelsForm extends React.Component<Props> {
  incrementAdults = () => {
    this.props.onAdultsChange(1);
  };

  decrementAdults = () => {
    this.props.onAdultsChange(-1);
  };

  incrementChildren = () => {
    this.props.onChildrenChange(true);
  };

  decrementChildren = () => {
    this.props.onChildrenChange(false);
  };

  render() {
    return (
      <>
        <Translation passThrough="Selected city (click to change)" />
        <TextButton
          title={<Translation passThrough={this.props.cityName} />}
          onPress={this.props.togglePlacepicker}
          type="secondary"
        />
        <View style={styles.row}>
          <View style={styles.item}>
            <Translation passThrough="checkin" />
            <DatePicker
              date={this.props.checkin}
              onDateChange={this.props.onCheckinChange}
              minDate={new Date()}
            />
          </View>
          <View style={styles.item}>
            <Translation passThrough="checkout" />
            <DatePicker
              date={this.props.checkout}
              onDateChange={this.props.onCheckoutChange}
              maxDate={DateUtils().addDays(365)}
              minDate={DateUtils().addDays(1)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <Translation passThrough="Adults" />
          <IncrementDecrementButtons
            onIncrement={this.incrementAdults}
            onDecrement={this.decrementAdults}
            number={this.props.adultsCount}
            showNumber={true}
            plusButtonTestID="adultsIncrement"
          />
          <Translation passThrough="Children" />
          <IncrementDecrementButtons
            onIncrement={this.incrementChildren}
            onDecrement={this.decrementChildren}
            number={this.props.childrenCount}
            showNumber={true}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  item: {
    flex: 1,
    marginEnd: 5,
  },
});

const select = ({
  cityName,
  checkin,
  checkout,
  adultsCount,
  children,
  actions: { onCheckinChange, onCheckoutChange, setAdults, setChildren },
}: HotelsFormContextType) => ({
  cityName,
  checkin,
  checkout,
  onCheckinChange,
  onCheckoutChange,
  onAdultsChange: setAdults,
  onChildrenChange: setChildren,
  adultsCount,
  childrenCount: children.length,
});

export default withHotelsFormContext(select)(HotelsForm);
