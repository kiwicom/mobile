// @flow stict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Button, StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { withNavigation } from 'react-navigation';
import type { NavigationType } from '@kiwicom/mobile-navigation';

import type { DownloadButton as BoardingPassType } from './__generated__/DownloadButton.graphql';

type Props = {|
  +data: BoardingPassType,
  +navigation: NavigationType,
|};

class DownloadButton extends React.Component<Props> {
  navigateToBoardingPass = () => {
    this.props.navigation.navigate({
      routeName: 'mmb.tickets.boarding_pass',
      key: `key-mmb.tickets.boarding_pass`,
      params: {
        boardingPassUrl: idx(this.props, _ => _.data.boardingPassUrl),
      },
    });
  };

  render = () => {
    const isDisabled = !idx(this.props.data, _ => _.boardingPassUrl);
    return (
      <React.Fragment>
        {/* TODO: Find out how this text is decided */}
        <Translation passThrough="put some random text here i guess that should be really long so I can check that it breaks on to new line" />
        <Button
          onPress={this.navigateToBoardingPass}
          style={[styles.button, isDisabled && styles.disabled]}
          disabled={isDisabled}
        >
          <Text style={styles.buttonText}>
            <Translation id="mmb.boarding_passes.download_button.open_printable_document" />
          </Text>
        </Button>
      </React.Fragment>
    );
  };
}

export default createFragmentContainer(
  withNavigation(DownloadButton),
  graphql`
    fragment DownloadButton on BoardingPass {
      boardingPassUrl
    }
  `,
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.brand,
    height: 44,
    borderRadius: 4,
    marginTop: 15,
  },
  buttonText: {
    color: Color.white,
  },
  disabled: {
    backgroundColor: Color.disabled,
  },
});
