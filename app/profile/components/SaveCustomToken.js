// @flow strict

import * as React from 'react';
import { Text, TextInput, Button, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onPress: (token: string) => void,
|};

type State = {|
  token: string,
|};

export default class SaveCustomToken extends React.Component<Props, State> {
  state = {
    token: '',
  };

  onChangeText = (token: string) => {
    this.setState({ token });
  };

  onPress = () => {
    this.props.onPress(this.state.token);
  };

  render = () => {
    return (
      <React.Fragment>
        <TextInput
          placeholder={<Translation passThrough="Custom token" />}
          onChangeText={this.onChangeText}
        />
        <Button onPress={this.onPress}>
          <Text style={styles.button}>
            <Translation passThrough="Save" />
          </Text>
        </Button>
      </React.Fragment>
    );
  };
}

const styles = StyleSheet.create({
  button: {
    color: defaultTokens.paletteWhite,
  },
});
