// @flow strict

import * as React from 'react';
import { View, ScrollView, InteractionManager } from 'react-native';
import { Text, StyleSheet, ErrorMessage } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import ChildrenAgesControl from './ChildrenAgesControl';
import type {
  RoomConfigurationType as UnsavedRoomConfigurationType,
  ChildAge,
} from './GuestsTypes';
import GuestsNumberControls from './GuestsNumberControls';

type Props = {|
  +guests: UnsavedRoomConfigurationType,
  +isMissingAge: boolean,
  +handleAdultChange: (adultsCount: number) => void,
  +handleChildrenChange: (number: number) => void,
  +handleChildrenAgesChange: (children: ChildAge[]) => void,
|};

export default class GuestsModal extends React.Component<Props> {
  scrollViewRef: React.ElementRef<typeof ScrollView>;

  storeScrollViewRef = (ref: React.ElementRef<typeof ScrollView>) => {
    this.scrollViewRef = ref;
  };

  componentDidUpdate = (prevProps: Props) => {
    if (this.props.isMissingAge === true && prevProps.isMissingAge === false) {
      InteractionManager.runAfterInteractions(() => {
        this.scrollViewRef.scrollToEnd({ animated: true });
      });
    }
  };

  render = () => {
    return (
      <View style={styles.container}>
        <View style={styles.controlContainer}>
          <GuestsNumberControls
            adultsCount={this.props.guests.adultsCount}
            childCount={this.props.guests.children.length}
            handleAdultChange={this.props.handleAdultChange}
            handleChildrenChange={this.props.handleChildrenChange}
          />
        </View>
        {this.props.guests.children.length > 0 && (
          <View style={styles.childContainer}>
            <View style={styles.childAgeTitle}>
              <Text style={styles.childAgeTitleText}>
                <Translation id="hotels_search.guests_modal.child_age_title" />
              </Text>
            </View>
            <ScrollView
              alwaysBounceVertical={false}
              ref={this.storeScrollViewRef}
            >
              <ChildrenAgesControl
                childrenAges={this.props.guests.children}
                onChange={this.props.handleChildrenAgesChange}
              />
              {this.props.isMissingAge && (
                <View style={styles.message}>
                  <ErrorMessage>
                    <Translation id="hotels_search.guests_modal.children.error_age" />
                  </ErrorMessage>
                </View>
              )}
            </ScrollView>
          </View>
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  controlContainer: {
    paddingStart: 15,
    backgroundColor: defaultTokens.paletteWhite,
  },
  childAgeTitle: {
    paddingStart: 15,
    paddingVertical: 12,
  },
  childAgeTitleText: {
    color: defaultTokens.colorTextSecondary,
  },
  message: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  childContainer: {
    flex: 1,
  },
});
