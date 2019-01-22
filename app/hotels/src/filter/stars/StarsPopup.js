// @flow strict

import * as React from 'react';
import {
  StyleSheet,
  ButtonPopup,
  Checkbox,
  Text,
  Logger,
} from '@kiwicom/mobile-shared';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SeparatorTrimmed } from '@kiwicom/mobile-navigation';
import { SafeAreaView } from 'react-navigation';

import StarsCheckbox from './StarsCheckbox';

type Props = {|
  +stars: number[],
  +onClose: () => void,
  +onSave: (number[]) => void,
  +isVisible: boolean,
|};

type State = {|
  stars: number[],
|};

export default class StarsPopup extends React.Component<Props, State> {
  state = {
    stars: this.props.stars,
  };

  static getDerivedStateFromProps = ({ stars, isVisible }: Props) => {
    return isVisible ? null : stars;
  };

  handleCheckboxOnPress = (option: number) => () =>
    this.setState(state => {
      let stars = [...state.stars];
      if (stars.includes(option)) {
        stars = stars.filter(star => star !== option);
      } else {
        stars.push(option);
      }
      return { stars };
    });

  onSave = () => {
    this.props.onSave(this.state.stars);
    Logger.hotelsFilterTagSet('Stars');
  };

  renderCheckboxes = (stars: number[]) => {
    const checkboxes = [];
    for (let i = 5; i > 0; i--) {
      const isStarsRowChecked = stars.includes(i);
      checkboxes.push(
        <React.Fragment key={i}>
          <StarsCheckbox
            stars={i}
            isChecked={isStarsRowChecked}
            onPress={this.handleCheckboxOnPress(i)}
          />
          <View style={styles.separatorEnd}>
            <SeparatorTrimmed
              gapSizeStart={0}
              color={defaultTokens.paletteInkLighter}
              height={0.5}
            />
          </View>
        </React.Fragment>,
      );
    }
    const isUnratedChecked = stars.includes(0);
    checkboxes.push(
      <Checkbox
        key={0}
        isChecked={isUnratedChecked}
        onPress={this.handleCheckboxOnPress(0)}
      >
        <Text style={styles.unrated}>
          <Translation id="hotels_search.filter.stars_popup.unrated" />
        </Text>
      </Checkbox>,
    );
    return checkboxes;
  };

  render() {
    const { stars } = this.state;
    return (
      <SafeAreaView>
        <ButtonPopup
          buttonTitle={
            <Translation id="hotels_search.filter.stars_popup.save" />
          }
          onSave={this.onSave}
          onClose={this.props.onClose}
          isVisible={this.props.isVisible}
        >
          <Text style={styles.title}>
            <Translation id="hotels_search.filter.stars_popup.title" />
          </Text>
          {this.renderCheckboxes(stars)}
        </ButtonPopup>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: defaultTokens.colorHeading,
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 15,
    paddingBottom: 10,
  },
  unrated: {
    marginStart: 3,
    fontSize: 16,
  },
  separatorEnd: {
    marginEnd: -15,
  },
});
