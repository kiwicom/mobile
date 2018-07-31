// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, TextIcon, Color } from '@kiwicom/mobile-shared';

import TitleTranslation from '../../../components/TitleTranslation';
import IdInput from './IdInput';
import ExpiryDatePicker from './ExpiryDatePicker';

type Props = {|
  +fullName: string,
  +title: string,
|};

export default function TravelDocumentForm(props: Props) {
  return (
    <React.Fragment>
      <View style={styles.row}>
        <TextIcon code="w" style={styles.icon} />
        <TitleTranslation title={props.title} name={props.fullName} />
      </View>
      <View style={styles.inputContainer}>
        <IdInput />
      </View>
      <View style={styles.inputContainer}>
        <ExpiryDatePicker />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: Color.black,
    fontSize: 16,
    paddingTop: 2,
    marginEnd: 5,
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  inputContainer: {
    marginTop: 15,
  },
});
