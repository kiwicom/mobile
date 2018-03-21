// @flow

import * as React from 'react';
import {
  StyleSheet,
  ButtonPopup,
  Color,
  Checkbox,
  Text,
} from '@kiwicom/react-native-app-shared';

import StarsCheckbox from './StarsCheckbox';

type Props = {|
  stars: number[],
  onClose: () => void,
  onSave: (number[]) => void,
  isVisible: boolean,
|};

type State = {|
  stars: number[],
|};

export default class StarsPopup extends React.Component<Props, State> {
  state = {
    stars: this.props.stars,
  };

  componentWillReceiveProps = ({ stars }: Props) => this.setState({ stars });

  handleCheckboxOnPress = (option: number) => () =>
    this.setState(state => {
      let stars = [...state.stars];
      if (stars.indexOf(option) >= 0) {
        stars = stars.filter(star => star !== option);
      } else {
        stars.push(option);
      }
      return { stars };
    });

  onSave = () => this.props.onSave(this.state.stars);

  renderCheckboxes = (stars: number[]) => {
    const checkboxes = [];
    for (let i = 5; i > 0; i--) {
      checkboxes.push(
        <StarsCheckbox
          key={i}
          stars={i}
          isChecked={stars.indexOf(i) >= 0}
          style={styles.delimiter}
          onPress={this.handleCheckboxOnPress(i)}
        />,
      );
    }
    checkboxes.push(
      <Checkbox
        key={0}
        isChecked={stars.indexOf(0) >= 0}
        onPress={this.handleCheckboxOnPress(0)}
      >
        <Text style={styles.unrated}>Unrated</Text>
      </Checkbox>,
    );
    return checkboxes;
  };

  render() {
    const { stars } = this.state;
    return (
      <ButtonPopup
        buttonTitle="Save"
        onSave={this.onSave}
        onClose={this.props.onClose}
        isVisible={this.props.isVisible}
      >
        <Text style={styles.title}>Hotel stars</Text>
        {this.renderCheckboxes(stars)}
      </ButtonPopup>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: Color.textLight,
    paddingBottom: 5,
    fontSize: 12,
  },
  delimiter: {
    borderBottomWidth: 1,
    borderBottomColor: Color.backgroundGray,
  },
  unrated: {
    marginLeft: 3,
    fontSize: 16,
  },
});
