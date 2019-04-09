// @flow

import * as React from 'react';
import { DatePicker as UniversalDatePicker } from '@kiwicom/universal-components';
import {
  Translation,
  type DateFormatterFunctions,
} from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import DatePickerButton from './DatePickerButton';
import Text from '../../Text';
import StyleSheet from '../../PlatformStyleSheet';

type Props = {|
  +date: ?Date,
  +onDateChange: (date: Date) => void,
  +placeholder?: string,
  +minDate?: Date,
  +maxDate?: Date,
  +iconComponent?: React.Node,
  +formatFunction?: DateFormatterFunctions,
  +disabled: boolean,
  +customButton?: React.Node | null,
|};

const Label = ({
  children,
}: {|
  +children: React.Element<typeof Translation>,
|}) => <Text style={styles.label}>{children}</Text>;

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

const styles = StyleSheet.create({
  label: {
    color: defaultTokens.paletteProductNormal,
  },
});

export default function DatePicker(props: Props) {
  const [isVisible, setIsVisible] = React.useState(false);

  function hidePicker() {
    setIsVisible(false);
  }
  function showPicker() {
    setIsVisible(true);
  }
  function onConfirm(newDate: Date) {
    props.onDateChange(newDate);
    hidePicker();
  }
  return (
    <>
      <DatePickerButton
        customButton={props.customButton}
        onPress={showPicker}
        date={props.date}
        iconComponent={props.iconComponent}
        formatFunction={props.formatFunction}
        disabled={props.disabled}
      />
      <UniversalDatePicker
        isVisible={isVisible}
        labels={labels}
        onDismiss={hidePicker}
        date={props.date ?? new Date()}
        onConfirm={onConfirm}
        minDate={props.minDate}
        maxDate={props.maxDate}
      />
    </>
  );
}

DatePicker.defaultProps = {
  disabled: false,
};
