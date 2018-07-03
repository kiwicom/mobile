// @flow stict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Button, StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import idx from 'idx';

import type { DownloadButton as BoardingPassType } from './__generated__/DownloadButton.graphql';

type Props = {|
  +data: BoardingPassType,
|};

class DownloadButton extends React.Component<Props> {
  download = () => {
    console.warn('TODO');
  };

  render = () => {
    const isDisabled = !idx(this.props.data, _ => _.boardingPassUrl);
    return (
      <React.Fragment>
        {/* TODO: Find out how this text is decided */}
        <Translation passThrough="put some random text here i guess that should be really long so I can check that it breaks on to new line" />
        <Button
          onPress={this.download}
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
  DownloadButton,
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
