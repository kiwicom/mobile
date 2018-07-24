// @flow stict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Button, StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import idx from 'idx';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';

import type { DownloadButton as BoardingPassType } from './__generated__/DownloadButton.graphql';
import BoardingPassInformation from './boardingPassInformation/BoardingPassInformation';

type Props = {|
  +data: BoardingPassType,
  +navigation: NavigationType,
|};

class DownloadButton extends React.Component<Props> {
  navigateToBoardingPass = () => {
    this.props.navigation.navigate('mmb.tickets.boarding_pass', {
      boardingPassUrl: idx(this.props, _ => _.data.boardingPassUrl),
    });
  };

  render = () => {
    const isDisabled = !idx(this.props.data, _ => _.boardingPassUrl);
    return (
      <React.Fragment>
        <BoardingPassInformation data={this.props.data} />
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
      ...BoardingPassInformation
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
