// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import OriginalReadMore from 'react-native-read-more-text'; // eslint-disable-line no-restricted-imports
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Text from './Text';
import Touchable from './Touchable';
import StyleSheet from './PlatformStyleSheet';
import type { StylePropType } from '../types/Styles';

type Props = {|
  +numberOfLines: number,
  +children: React.Node,
  +truncatedText: React.Element<typeof Translation>,
  +revealedText: React.Element<typeof Translation>,
  +style?: StylePropType,
|};

const Link = ({
  label,
  handlePress,
  style,
}: {|
  label: React.Element<typeof Translation>,
  handlePress: () => void,
  style?: StylePropType,
|}) => (
  <View style={styles.linkView}>
    <Touchable onPress={handlePress} noRipple={true}>
      <Text style={[styles.linkText, style]}>{label}</Text>
    </Touchable>
  </View>
);

export default class ReadMore extends React.Component<Props> {
  renderTruncatedFooter = (handlePress: () => void) => (
    <Link
      style={this.props.style}
      label={this.props.truncatedText}
      handlePress={handlePress}
    />
  );

  renderRevealedFooter = (handlePress: () => void) => (
    <Link
      style={this.props.style}
      label={this.props.revealedText}
      handlePress={handlePress}
    />
  );

  render() {
    return (
      <OriginalReadMore
        numberOfLines={this.props.numberOfLines}
        renderTruncatedFooter={this.renderTruncatedFooter}
        renderRevealedFooter={this.renderRevealedFooter}
      >
        {this.props.children}
      </OriginalReadMore>
    );
  }
}

const styles = StyleSheet.create({
  linkView: {
    flexDirection: 'row',
  },
  linkText: {
    color: defaultTokens.paletteProductNormal,
    fontWeight: '500',
  },
});
