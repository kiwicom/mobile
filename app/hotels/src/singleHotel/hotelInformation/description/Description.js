// @flow

import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import {
  Color,
  Text,
  SimpleCard,
  StyleSheet,
  AdaptableLayout,
} from '@kiwicom/react-native-app-shared';

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
  linkView: {
    flexDirection: 'row',
  },
  linkText: {
    color: Color.brand,
    fontWeight: '800',
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
});

const Link = ({
  label,
  handlePress,
}: {|
  label: string,
  handlePress: () => void,
|}) => (
  <View style={styles.linkView}>
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.linkText}>{label}</Text>
    </TouchableOpacity>
  </View>
);

const renderTruncatedFooter = (handlePress: () => void) => (
  <Link label="Show More" handlePress={handlePress} />
);

const renderRevealedFooter = (handlePress: () => void) => (
  <Link label="Show Less" handlePress={handlePress} />
);

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
          renderTruncatedFooter={renderTruncatedFooter}
          renderRevealedFooter={renderRevealedFooter}
        >
          <Text style={styles.summary}>
            {idx(this.props, _ => _.hotel.summary)}
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
      <AdaptableLayout
        renderOnNarrow={baseComponent}
        renderOnWide={
          <View style={styles.simpleCardWideWrapper}>
            <SimpleCard
              style={{
                marginVertical: 0,
                paddingVertical: 0,
                paddingHorizontal: 0,
              }}
            >
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
