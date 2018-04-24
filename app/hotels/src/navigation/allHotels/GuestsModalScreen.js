// @flow

import * as React from 'react';
import { type NavigationType, HeaderTitle } from '@kiwicom/mobile-navigation';
import { Touchable, Text, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import HotelsSearchContext from '../../HotelsSearchContext';
import type {
  RoomConfigurationType as Guests,
  OnChangeSearchParams,
} from '../../allHotels/searchForm/SearchParametersType.js';
import type {
  RoomConfigurationType as UnsavedRoomConfigurationType,
  ChildAge,
} from '../../allHotels/searchForm/guests/GuestsTypes';
import GuestsModal from '../../allHotels/searchForm/guests/GuestsModal';

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
});

type PropsWithContext = {
  ...Props,
  guests: Guests,
  searchChange: (search: OnChangeSearchParams) => void,
};

type State = {|
  guests: UnsavedRoomConfigurationType,
  isMissingAge: boolean,
|};

export class GuestsModalScreen extends React.Component<
  PropsWithContext,
  State,
> {
  state = {
    guests: {
      adultsCount: 0,
      children: [],
    },
    isMissingAge: false,
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
      this.setState({ isMissingAge: true });
    } else {
      this.props.searchChange({ roomsConfiguration: this.state.guests });
      this.props.navigation.goBack();
    }
  };

  render = () => (
    <GuestsModal
      guests={this.state.guests}
      isMissingAge={this.state.isMissingAge}
      handleAdultChange={this.handleAdultChange}
      handleChildrenChange={this.handleChildrenChange}
      handleChildrenAgesChange={this.handleChildrenAgesChange}
    />
  );
}

type Props = {|
  navigation: NavigationType,
|};

export default class GuestsModalScreenWithContext extends React.Component<
  Props,
> {
  static navigationOptions = ({ navigation }: Props) => {
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
            <Translation id="hotels_search.guests_modal.close" />
          </Text>
        </Touchable>
      ),
      title: (
        <HeaderTitle>
          <Translation id="hotels_search.guests_modal.header" />
        </HeaderTitle>
      ),
      headerRight: (
        <Touchable
          borderlessRipple={true}
          onPress={onSave}
          style={styles.headerButton}
        >
          <Text style={[styles.headerButtonText, styles.saveButtonText]}>
            <Translation id="hotels_search.guests_modal.save" />
          </Text>
        </Touchable>
      ),
    };
  };

  render = () => (
    <HotelsSearchContext.Consumer>
      {({ searchParams, actions }) => (
        <GuestsModalScreen
          {...this.props}
          guests={searchParams.roomsConfiguration}
          searchChange={actions.setSearch}
        />
      )}
    </HotelsSearchContext.Consumer>
  );
}
