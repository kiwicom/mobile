// @flow

import * as React from 'react';
import {
  Text,
  StyleSheet,
  Color,
  Touchable,
} from '@kiwicom/react-native-app-shared';
import { Translation } from '@kiwicom/react-native-app-localization';
import idx from 'idx';

import Row from './Row';

type Props = {|
  city: {
    id: string,
    name: ?string,
  },
  onCitySelected: (cityId: string, cityName: ?string) => void,
  search: string,
|};

const styles = StyleSheet.create({
  matchText: {
    color: Color.brand,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: Color.textDark,
  },
});

export default class SuggestionListItem extends React.Component<Props> {
  onPress = () => {
    const { id, name } = this.props.city;
    this.props.onCitySelected(id, name);
  };

  /**
   * Returns array in this format:
   *
   * [
   *   'string before the highlight',
   *   'string to be highlighted',
   *   'string after the highligh'
   * ]
   *
   * It always returns at least empty strings so even this is a valid
   * response:
   *
   * ['', '', '']
   */
  getHighlightedStringChunks = (): [string, string, string] => {
    const fullText = idx(this.props, _ => _.city.name) || '';
    const stringToHighlight = this.props.search;

    const matchResult = fullText.match(
      new RegExp(
        `([\\s\\S]*?)(${stringToHighlight})([\\s\\S]*)`,
        'i', // case insensitive
      ),
    );

    if (matchResult == null) {
      return [fullText, '', ''];
    }

    const [, before, match, after] = matchResult;
    return [before, match, after];
  };

  render = () => {
    const [before, match, after] = this.getHighlightedStringChunks();

    return (
      <Touchable onPress={this.onPress}>
        <Row>
          <Text style={styles.text}>
            <Translation passThrough={before} />
          </Text>
          <Text style={[styles.text, styles.matchText]}>
            <Translation passThrough={match} />
          </Text>
          <Text style={styles.text}>
            <Translation passThrough={after} />
          </Text>
        </Row>
      </Touchable>
    );
  };
}
