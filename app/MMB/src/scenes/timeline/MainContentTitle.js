// @flow

import * as React from 'react';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { type TranslationType } from '@kiwicom/mobile-localization';

import { TextWithIsPastEventContext } from '../../context/TimelineEventContext';

type Props = {|
  +children: ?TranslationType,
|};

const Title = (props: Props): React.Node => {
  if (props.children) {
    return (
      <TextWithIsPastEventContext style={styles.title}>
        {props.children}
      </TextWithIsPastEventContext>
    );
  }
  return null;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
