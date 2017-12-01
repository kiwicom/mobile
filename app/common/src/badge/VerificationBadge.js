// @flow

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {|
  verified: boolean,
|};

type TextOnLayout = {|
  nativeEvent: {|
    layout: {|
      x: number,
      y: number,
      width: number,
      height: number,
    |},
  |},
|};

/**
 * This component creates badge for verified/unverified statuses. It
 * automatically calculates the container width based on width of text
 * inside of this container so the result looks like this:
 *
 * .----------.
 * | VERIFIED |
 * `----------`
 *
 * And it expands with long text:
 *
 * .-------------------------------------------------.
 * | UNVERIFIED with very long text to make it clear |
 * `-------------------------------------------------`
 */
export default class VerificationBadge extends React.Component<Props> {
  viewContainerReference: React.Ref<typeof View> | null;

  /**
   * React will call the 'ref' callback with the DOM element when the
   * component mounts, and call it with null when it unmounts.
   * 'ref' callbacks are invoked before componentDidMount or
   * componentDidUpdate lifecycle hooks.
   */
  storeContainerReference = (reference: React.Ref<typeof View> | null) =>
    (this.viewContainerReference = reference);

  recalculateWidth = (textElement: TextOnLayout) => {
    if (!this.viewContainerReference) {
      return;
    }
    // $FlowFixMe: FLow is broken for Native, this is correct: http://facebook.github.io/react-native/releases/0.49/docs/direct-manipulation.html
    this.viewContainerReference.setNativeProps({
      style: {
        width: textElement.nativeEvent.layout.width + 10, // extra padding to prevent text wrapping (text container must be always bigger)
      },
    });
  };

  render = () => {
    let styleSet = unverifiedStyle;
    let badgeText = 'UNVERIFIED';

    if (this.props.verified === true) {
      styleSet = verifiedStyle;
      badgeText = 'VERIFIED';
    }

    return (
      <View style={styleSet.button} ref={this.storeContainerReference}>
        <Text style={styleSet.buttonText} onLayout={this.recalculateWidth}>
          {badgeText}
        </Text>
      </View>
    );
  };
}

const basicButtonStyle = {
  padding: 1,
  borderRadius: 2,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  width: 100,
};

const basicButtonTextStyle = {
  color: '#fff',
  fontSize: 10,
};

const verifiedStyle = StyleSheet.create({
  button: {
    ...basicButtonStyle,
    backgroundColor: '#60CA60',
  },
  buttonText: basicButtonTextStyle,
});

const unverifiedStyle = StyleSheet.create({
  button: {
    ...basicButtonStyle,
    backgroundColor: '#CA6060',
  },
  buttonText: basicButtonTextStyle,
});
