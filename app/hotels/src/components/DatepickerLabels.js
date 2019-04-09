// @flow strict

import * as React from 'react';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Translation } from '@kiwicom/mobile-localization';

/**
 * TODO: This should be a part of Datepicker in shared.
 * But due to require cycles tests fail. We should solve these require cycles
 * and move this inside Datpicker component
 */
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

export default labels;
