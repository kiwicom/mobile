// @flow

import * as React from 'react';
import {
  Text,
  StyleSheet,
  Color,
  Touchable,
} from '@kiwicom/react-native-app-shared';
import { View } from 'react-native';
import idx from 'idx';

type Props = {|
  city: {
    id: string,
    name: ?string,
  },
  onCitySelected: (cityId: string, cityName: ?string) => void,
  search: string,
|};

const styles = StyleSheet.create({
  row: {
    backgroundColor: Color.white,
    marginBottom: 5,
    paddingHorizontal: 11,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  cityText: {
    fontSize: 14,
    fontWeight: '600',
    color: Color.textDark,
  },
  matchText: {
    color: Color.brand,
  },
});

export default class SuggestionListItem extends React.Component<Props> {
  onPress = () => {
    const { id, name } = this.props.city;
    this.props.onCitySelected(id, name);
  };

  splitText = () => {
    const { search } = this.props;
    const name = idx(this.props, _ => _.city.name) || '';
    const searchLength = search.length;
    const matchStart = name.indexOf(search);

    if (!name || matchStart < 0) {
      return { before: '', match: '', after: name };
    }

    return {
      before: name.substr(0, matchStart),
      match: name.substring(matchStart, matchStart + searchLength),
      after: name.substring(matchStart + searchLength),
    };
  };

  render = () => {
    const { before, match, after } = this.splitText();
    return (
      <Touchable onPress={this.onPress}>
        <View style={styles.row}>
          <Text style={styles.cityText}>{before}</Text>
          <Text style={[styles.cityText, styles.matchText]}>{match}</Text>
          <Text style={styles.cityText}>{after}</Text>
        </View>
      </Touchable>
    );
  };
}
