// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import {
  type NavigationType,
  HeaderTitle,
} from '@kiwicom/react-native-app-navigation';
import {
  Touchable,
  Text,
  StyleSheet,
  Color,
} from '@kiwicom/react-native-app-shared';
import Translation from '@kiwicom/react-native-app-translations';
import { connect } from '@kiwicom/react-native-app-redux';

import type { HotelsReducerState } from '../HotelsReducer';
import type {
  RoomConfigurationType as Guests,
  OnChangeSearchParams,
} from '../allHotels/searchForm/SearchParametersType.js';
import ChildrenAgesControl from '../allHotels/searchForm/guests/ChildrenAgesControl';
import type {
  RoomConfigurationType as UnsavedRoomConfigurationType,
  ChildAge,
} from '../allHotels/searchForm/guests/GuestsTypes';
import ErrorMessage from '../allHotels/searchForm/guests/ErrorMessage';
import GuestsNumberControls from '../allHotels/searchForm/guests/GuestsNumberControls';

const styles = StyleSheet.create({
  headerButton: {
    padding: 8,
  },
  headerButtonText: {
    color: Color.white,
    fontSize: 17,
  },
  saveButtonText: {
    fontWeight: '600',
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  controlContainer: {
    paddingLeft: 15,
    backgroundColor: Color.white,
  },
  childAgeTitle: {
    paddingLeft: 15,
    paddingVertical: 12,
  },
  childAgeTitleText: {
    color: Color.textLight,
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

type Props = {|
  navigation: NavigationType,
  guests: Guests,
  searchChange: (search: OnChangeSearchParams) => void,
|};

type NavigationProps = {|
  navigation: NavigationType,
|};

type State = {|
  guests: UnsavedRoomConfigurationType,
  isMissingAge: boolean,
|};

export class GuestsModalScreen extends React.Component<Props, State> {
  scrollViewRef: React.ElementRef<typeof ScrollView>;
  state = {
    guests: {
      adultsCount: 0,
      children: [],
    },
    isMissingAge: false,
  };

  static navigationOptions = ({ navigation }: NavigationProps) => {
    function goBack() {
      navigation.goBack();
    }

    function onSave() {
      navigation.state.params.onSave();
    }

    return {
      headerLeft: (
        <Touchable
          borderlessRipple={true}
          onPress={goBack}
          style={styles.headerButton}
        >
          <Text style={styles.headerButtonText}>
            <Translation id="HotelsSearch.GuestsModal.Close" />
          </Text>
        </Touchable>
      ),
      title: (
        <HeaderTitle>
          <Translation id="HotelsSearch.GuestsModal.Header" />
        </HeaderTitle>
      ),
      headerRight: (
        <Touchable
          borderlessRipple={true}
          onPress={onSave}
          style={styles.headerButton}
        >
          <Text style={[styles.headerButtonText, styles.saveButtonText]}>
            <Translation id="HotelsSearch.GuestsModal.Save" />
          </Text>
        </Touchable>
      ),
    };
  };

  componentDidMount = () => {
    this.setState({
      guests: ((this.props.guests: any): UnsavedRoomConfigurationType),
    });
    this.props.navigation.setParams({ onSave: this.onSave });
  };

  isMissingAge = (children: ChildAge[]) => {
    return children.some(child => child.age === null);
  };

  handleAdultChange = (adultsCount: number) => {
    this.setState(state => ({
      guests: {
        adultsCount,
        children: state.guests.children,
      },
    }));
  };

  handleChildrenChange = (number: number) => {
    const children = [...this.state.guests.children];
    if (children.length < number) {
      // Incremented
      children.push({ age: null });
    } else {
      // Decremented
      children.pop();
    }

    this.setState(({ guests, isMissingAge }) => ({
      guests: {
        adultsCount: guests.adultsCount,
        children,
      },
      // Adding children should never produce an error, but it can remove an error
      isMissingAge: this.isMissingAge(children) ? isMissingAge : false,
    }));
  };

  handleChildrenAgesChange = (children: ChildAge[]) => {
    this.setState(({ guests, isMissingAge }) => ({
      guests: {
        adultsCount: guests.adultsCount,
        children,
      },
      // Adding children age should never produce an error, but it can remove an error
      isMissingAge: this.isMissingAge(children) ? isMissingAge : false,
    }));
  };

  onSave = () => {
    if (this.isMissingAge(this.state.guests.children)) {
      this.setState({ isMissingAge: true }, () => {
        // Needs to be done async to show error
        setTimeout(() => {
          this.scrollViewRef.scrollToEnd({ animated: true });
        });
      });
    } else {
      this.props.searchChange({ roomsConfiguration: this.state.guests });
      this.props.navigation.goBack();
    }
  };

  storeScrollViewRef = (ref: React.ElementRef<typeof ScrollView>) => {
    this.scrollViewRef = ref;
  };

  render = () => (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        <GuestsNumberControls
          adultsCount={this.state.guests.adultsCount}
          childCount={this.state.guests.children.length}
          handleAdultChange={this.handleAdultChange}
          handleChildrenChange={this.handleChildrenChange}
        />
      </View>
      {this.state.guests.children.length > 0 && (
        <View style={styles.childContainer}>
          <View style={styles.childAgeTitle}>
            <Text style={styles.childAgeTitleText}>
              <Translation id="HotelsSearch.GuestsModal.ChildAgeTitle" />
            </Text>
          </View>
          <ScrollView
            alwaysBounceVertical={false}
            ref={this.storeScrollViewRef}
          >
            <ChildrenAgesControl
              childrenAges={this.state.guests.children}
              onChange={this.handleChildrenAgesChange}
            />
            {this.state.isMissingAge && (
              <View style={styles.message}>
                <ErrorMessage>
                  <Translation id="HotelsSearch.GuestsModal.Children.ErrorAge" />
                </ErrorMessage>
              </View>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const select = ({ hotels }: { hotels: HotelsReducerState }) => ({
  guests: hotels.searchParams.roomsConfiguration,
});

const action = dispatch => ({
  searchChange: (search: OnChangeSearchParams) =>
    dispatch({
      type: 'setSearch',
      search,
    }),
});

export default connect(select, action)(GuestsModalScreen);
