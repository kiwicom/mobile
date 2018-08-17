// @flow strict

import * as React from 'react';
import { Touchable, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Row from './Row';

type Location = {|
  +id: string,
  +name: string,
|};

type Props = {|
  +location: Location,
  +onCitySelected: (cityId: string, cityName: string) => void,
|};

export default class RecentSearchItem extends React.Component<Props> {
  onPress = () => {
    const { id, name } = this.props.location;
    this.props.onCitySelected(id, name);
  };

  render = () => (
    <Touchable onPress={this.onPress}>
      <Row>
        <Text style={styles.text}>
          <Translation passThrough={this.props.location.name} />
        </Text>
      </Row>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: defaultTokens.colorTextAttention,
  },
});
