// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { TextIcon, StyleSheet } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { BoardingPassOneWay as BookingType } from './__generated__/BoardingPassOneWay.graphql';
import FlightSegments from './FlightSegments';

type Props = {|
  +data: BookingType,
|};

const BoardingPassOneWay = (props: Props) => (
  <FlightSegments
    data={idx(props.data, _ => _.trip)}
    icon={<TextIcon code="&#xe103;" style={styles.outboundIcon} />}
    iconTitle={
      <Translation id="mmb.boarding_passes.boarding_pass_one_way.departure" />
    }
  />
);

export default createFragmentContainer(
  BoardingPassOneWay,
  graphql`
    fragment BoardingPassOneWay on BookingOneWay {
      trip {
        ...FlightSegments
      }
    }
  `,
);

const styles = StyleSheet.create({
  outboundIcon: {
    color: defaultTokens.paletteProductNormal,
  },
});
