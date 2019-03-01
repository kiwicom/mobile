// @flow strict

import * as React from 'react';
import { DatePicker } from '@kiwicom/universal-components';
import { Translation, DateUtils } from '@kiwicom/mobile-localization';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import {
  withHotelsContext,
  type HotelsContextState,
} from '../../HotelsContext';

type Props = {|
  +showCheckinDatepicker: boolean,
  +toggleShowCheckinDatepicker: () => void,
  +showCheckoutDatepicker: boolean,
  +toggleShowCheckoutDatepicker: () => void,
  +checkin: Date,
  +checkout: Date,
  +setCheckinDate: Date => void,
  +setCheckoutDate: Date => void,
|};

type LabelProps = {|
  +children: React.Element<typeof Translation>,
|};

const Label = ({ children }: LabelProps) => (
  <Text style={styles.label}>{children}</Text>
);

class SearchDatepickers extends React.Component<Props> {
  setCheckinDate = (date: Date) => {
    this.props.setCheckinDate(DateUtils.stripTimeZoneOffset(date));
    this.props.toggleShowCheckinDatepicker();
  };

  setCheckoutDate = (date: Date) => {
    this.props.setCheckoutDate(DateUtils.stripTimeZoneOffset(date));
    this.props.toggleShowCheckoutDatepicker();
  };

  render() {
    const labels = {
      cancel: (
        <Label>
          <Translation id="shared.button.cancel" />
        </Label>
      ),
      confirm: (
        <Label>
          <Translation id="shared.button.save" />
        </Label>
      ),
    };
    return (
      <>
        <DatePicker
          isVisible={this.props.showCheckinDatepicker}
          labels={labels}
          onDismiss={this.props.toggleShowCheckinDatepicker}
          onConfirm={this.setCheckinDate}
          date={new Date(this.props.checkin)}
          minDate={new Date()}
          maxDate={DateUtils().addDays(364)}
        />
        <DatePicker
          isVisible={this.props.showCheckoutDatepicker}
          labels={labels}
          onDismiss={this.props.toggleShowCheckinDatepicker}
          onConfirm={this.setCheckoutDate}
          date={new Date(this.props.checkout)}
          minDate={DateUtils().addDays(1)}
          maxDate={DateUtils().addDays(365)}
        />
      </>
    );
  }
}

const select = ({
  checkin,
  checkout,
  actions: { setCheckinDate, setCheckoutDate },
}: HotelsContextState) => ({
  checkin,
  checkout,
  setCheckinDate,
  setCheckoutDate,
});

const styles = StyleSheet.create({
  label: {
    color: defaultTokens.paletteProductNormal,
  },
});

export default withHotelsContext(select)(SearchDatepickers);
