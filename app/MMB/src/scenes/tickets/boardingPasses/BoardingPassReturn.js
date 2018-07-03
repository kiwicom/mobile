// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { TextIcon, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import FlightSegments from './FlightSegments';
import type { BoardingPassReturn as BoardingPassReturnType } from './__generated__/BoardingPassReturn.graphql';

type Props = {|
  +data: BoardingPassReturnType,
|};

export const BoardingPassReturn = (props: Props) => (
  <React.Fragment>
    <FlightSegments
      data={idx(props.data, _ => _.outbound)}
      icon={<TextIcon code="&#xe079;" style={styles.outboundIcon} />}
      iconTitle={
        <Translation id="mmb.boarding_passes.boarding_pass_return.departure" />
      }
    />
    <FlightSegments
      data={idx(props.data, _ => _.inbound)}
      icon={<TextIcon code="&#xe079;" style={styles.inboundIcon} />}
      iconTitle={
        <Translation id="mmb.boarding_passes.boarding_pass_return.return" />
      }
    />
  </React.Fragment>
);

export default createFragmentContainer(
  BoardingPassReturn,
  graphql`
    fragment BoardingPassReturn on BookingReturn {
      outbound {
        ...FlightSegments
      }
      inbound {
        ...FlightSegments
      }
    }
  `,
);

const styles = StyleSheet.create({
  outboundIcon: {
    color: Color.brand,
    transform: [{ rotate: '90deg' }],
  },
  inboundIcon: {
    color: Color.orange.normal,
    transform: [{ rotate: '270deg' }],
  },
});
