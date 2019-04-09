// @flow strict

import * as React from 'react';
import OriginalReadMore from 'react-native-read-more-text'; // eslint-disable-line no-restricted-imports

import Translation from '../Translation';
import ReadMoreLink from './ReadMoreLink';
import type { StylePropType } from '../../types/Styles';

type Props = {|
  +numberOfLines: number,
  +children: React.Node,
  +truncatedText: React.Element<typeof Translation>,
  +revealedText: React.Element<typeof Translation>,
  +style?: StylePropType,
  +onExpandText?: () => void,
  +onHideText?: () => void,
|};

export default class ReadMore extends React.Component<Props> {
  renderTruncatedFooter = (handlePress: () => void) => (
    <ReadMoreLink
      style={this.props.style}
      label={this.props.truncatedText}
      handlePress={handlePress}
      type="truncated"
      onExpandText={this.props.onExpandText}
      onHideText={this.props.onHideText}
    />
  );

  renderRevealedFooter = (handlePress: () => void) => (
    <ReadMoreLink
      style={this.props.style}
      label={this.props.revealedText}
      handlePress={handlePress}
      type="revealed"
      onExpandText={this.props.onExpandText}
      onHideText={this.props.onHideText}
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
