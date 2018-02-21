// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  ButtonPopup,
  NumberControl,
  Message,
  StyleSheet,
} from '@kiwicom/react-native-app-shared';

import ChildrenAgesControl from './ChildrenAgesControl';
import type { RoomConfigurationType } from '../SearchParametersType';
import type {
  RoomConfigurationType as UnsavedRoomConfigurationType,
  ChildAge,
} from './GuestsTypes';

type Props = {|
  guests: RoomConfigurationType,
  onChange: (guests: RoomConfigurationType) => void,
  onClose: Function,
  isVisible: boolean,
|};

type State = {|
  guests: UnsavedRoomConfigurationType,
  isMissingAge: boolean,
|};

export default class GuestsPopup extends React.Component<Props, State> {
  state = {
    guests: ((this.props.guests: any): UnsavedRoomConfigurationType),
    isMissingAge: false,
  };

  componentWillReceiveProps = ({ guests }: Props) =>
    this.setState({
      guests: ((guests: any): UnsavedRoomConfigurationType),
    });

  isMissingAge = (children: ChildAge[]) => {
    return children.some(child => child.age === null);
  };

  /**
   * Save only with filled children ages.
   * Show info message on missing age.
   */
  handleSave = () => {
    if (this.isMissingAge(this.state.guests.children)) {
      this.setState({ isMissingAge: true });
    } else {
      this.setState({ isMissingAge: false }, () => {
        this.props.onChange(
          // eslint-disable-next-line react/no-access-state-in-setstate
          ((this.state.guests: any): RoomConfigurationType),
        );
        this.props.onClose();
      });
    }
  };

  handleAdultChange = (adultsCount: number) => {
    this.setState(prevState => ({
      guests: {
        adultsCount,
        children: prevState.guests.children,
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
      isMissingAge: children.length ? isMissingAge : false,
    }));
  };

  handleChildrenAgesChange = (children: ChildAge[]) =>
    this.setState(({ guests }) => ({
      guests: {
        adultsCount: guests.adultsCount,
        children,
      },
      isMissingAge: this.isMissingAge(children),
    }));

  render = () => {
    const { guests, isMissingAge } = this.state;
    return (
      <ButtonPopup
        buttonTitle="Save"
        onSave={this.handleSave}
        onClose={this.props.onClose}
        isVisible={this.props.isVisible}
        style={{ content: styles.content }}
      >
        <View style={styles.controls}>
          <NumberControl
            label="Adult"
            number={guests.adultsCount}
            min={1}
            max={30}
            style={{ marginBottom: 20 }}
            icon="person"
            onChange={this.handleAdultChange}
          />
          <NumberControl
            label="Infant"
            number={guests.children.length}
            min={0}
            max={10}
            icon="child-friendly"
            onChange={this.handleChildrenChange}
            style={{
              marginBottom: guests.children.length > 0 ? POPUP_PADDING : 0,
            }}
          />
        </View>
        <ChildrenAgesControl
          childrenAges={guests.children}
          onChange={this.handleChildrenAgesChange}
        />
        {isMissingAge && (
          <View style={styles.message}>
            <Message type="error">Please fill children ages first.</Message>
          </View>
        )}
      </ButtonPopup>
    );
  };
}

const POPUP_PADDING = 20;

const styles = StyleSheet.create({
  content: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  controls: {
    padding: POPUP_PADDING,
    paddingBottom: 0,
  },
  message: {
    alignItems: 'center',
  },
});
