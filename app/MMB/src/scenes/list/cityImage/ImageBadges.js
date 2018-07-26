// @flow

import * as React from 'react';
import { AdaptableBadge, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import type { ImageBadges as ImageBadgesType } from './__generated__/ImageBadges.graphql';
import StatusBadge from './StatusBadge';

type Props = {|
  +data: ImageBadgesType,
|};

const ImageBadges = (props: Props) => (
  <React.Fragment>
    <StatusBadge data={props.data} />
    <AdaptableBadge
      translation={<Translation passThrough={props.data.databaseId} />}
      style={styles.bookingIdBadge}
      textStyle={styles.badgeText}
    />
  </React.Fragment>
);

export default createFragmentContainer(
  ImageBadges,
  graphql`
    fragment ImageBadges on BookingInterface {
      databaseId
      ...StatusBadge
    }
  `,
);

const styles = StyleSheet.create({
  bookingIdBadge: {
    backgroundColor: Color.grey.transparent.outerSpace.$60,
  },
  badgeText: {
    fontSize: 10,
    color: Color.white,
    padding: 2.5,
  },
});
