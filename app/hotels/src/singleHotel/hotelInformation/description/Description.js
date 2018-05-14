// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  Text,
  SimpleCard,
  StyleSheet,
  AdaptableLayout,
  ReadMore,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import type { Description_hotel } from './__generated__/Description_hotel.graphql';
import Facilities from './Facilities';

const styles = StyleSheet.create({
  simpleCardWrapper: {
    android: {
      marginTop: 10,
    },
    ios: {
      marginTop: -2,
    },
  },
  simpleCardWideWrapper: {
    marginTop: 10,
  },
  summary: {
    android: {
      lineHeight: 21,
    },
    ios: {
      lineHeight: 19,
    },
  },
  wideCardChildrenWrapper: {
    marginVertical: 3,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  card: {
    marginVertical: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

type ContainerProps = {|
  hotel: any,
  locationView?: any,
|};

type Props = {
  ...ContainerProps,
  hotel: ?Description_hotel,
  locationView?: React.Node,
};

export class Description extends React.Component<Props> {
  renderCardChildren = (isWide: boolean) => (
    <View>
      {this.props.locationView}
      <View style={isWide ? styles.wideCardChildrenWrapper : null}>
        <ReadMore
          numberOfLines={5}
          truncatedText="Show More"
          revealedText="Show Less"
        >
          <Text style={styles.summary}>
            <Translation passThrough={idx(this.props, _ => _.hotel.summary)} />
          </Text>
        </ReadMore>
        <Facilities facilities={idx(this.props, _ => _.hotel.facilities)} />
      </View>
    </View>
  );

  renderBaseComponent = () => {
    return (
      <View style={styles.simpleCardWrapper}>
        <SimpleCard>{this.renderCardChildren(false)}</SimpleCard>
      </View>
    );
  };

  render = () => {
    const baseComponent = this.renderBaseComponent();
    return (
      <AdaptableLayout.Consumer
        renderOnNarrow={baseComponent}
        renderOnWide={
          <View style={styles.simpleCardWideWrapper}>
            <SimpleCard style={StyleSheet.flatten(styles.card)}>
              {this.renderCardChildren(true)}
            </SimpleCard>
          </View>
        }
      />
    );
  };
}

export default (createFragmentContainer(
  Description,
  graphql`
    fragment Description_hotel on Hotel {
      summary
      facilities {
        ...Facilities_facilities
      }
    }
  `,
): React.ComponentType<ContainerProps>);
