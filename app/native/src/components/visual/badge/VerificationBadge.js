// @flow

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {|
  verified: boolean,
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
export default function VerificationBadge({ verified }: Props) {
  let styleSet = unverifiedStyle;
  let badgeText = 'UNVERIFIED';

  if (verified === true) {
    styleSet = verifiedStyle;
    badgeText = 'VERIFIED';
  }

  return (
    <View
      style={styleSet.button}
      ref={viewContainer => {
        this.viewContainer = viewContainer;
      }}
    >
      <Text
        style={styleSet.buttonText}
        onLayout={textElement => {
          this.viewContainer.setNativeProps({
            style: {
              width: textElement.nativeEvent.layout.width + 10, // extra padding to prevent text wrapping (text container must be always bigger)
            },
          });
        }}
      >
        {badgeText}
      </Text>
    </View>
  );
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
