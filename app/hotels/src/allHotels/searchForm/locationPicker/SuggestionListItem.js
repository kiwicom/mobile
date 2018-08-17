// @flow strict

import * as React from 'react';
import { Text, StyleSheet, Touchable } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Row from './Row';

type Props = {|
  +city: {
    +id: string,
    +name: ?string,
  },
  +onCitySelected: (cityId: string | null, cityName: ?string) => void,
  +search: string,
|};

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

const styles = StyleSheet.create({
  matchText: {
    color: defaultTokens.paletteProductNormal,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: defaultTokens.colorTextAttention,
  },
});
