// @flow

import * as React from 'react';
import { Animated, View } from 'react-native';
import {
  LayoutAnimation,
  StyleSheet,
  Color,
  TextIcon,
} from '@kiwicom/mobile-shared';

type Props = {|
  +isExpanded: boolean,
  +children: React.Node,
|};

type State = {|
  anim: Animated.Value,
|};

const AnimatedTextIcon = Animated.createAnimatedComponent(TextIcon);

export default class MobileTripOverviewHandle extends React.Component<
  Props,
  State,
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.isExpanded && this.props.isExpanded) {
      Animated.timing(this.state.anim, {
        toValue: 0.5,
        duration: 500,
      }).start();
      LayoutAnimation.linear(300);
    }
    if (prevProps.isExpanded && !this.props.isExpanded) {
      Animated.timing(this.state.anim, {
        toValue: 1,
        duration: 200,
      }).start(() => this.state.anim.setValue(0));
      LayoutAnimation.linear(150);
    }
  }

  render() {
    const interpolationRotation = this.state.anim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '360deg'],
    });
    const interpolationTranslationY = this.state.anim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -3, 0],
    });
    const interpolationTranslationX = this.state.anim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });

    const animatedTextIconRotationStyle = {
      transform: [
        { rotate: interpolationRotation },
        { translateY: interpolationTranslationY },
        { translateX: interpolationTranslationX },
      ],
    };

    const animatedChildrenHeightStyle = !this.props.isExpanded && {
      height: 0,
    };

    return (
      <View style={styleSheet.handleWrapper}>
        <React.Fragment>
          <View style={styleSheet.icon}>
            <AnimatedTextIcon
              style={[styleSheet.textIcon, animatedTextIconRotationStyle]}
              code="l"
            />
          </View>
          <View style={animatedChildrenHeightStyle}>{this.props.children}</View>
        </React.Fragment>
      </View>
    );
  }
}

const styleSheet = StyleSheet.create({
  handleWrapper: {
    backgroundColor: Color.white,
  },
  icon: {
    height: 24,
    alignSelf: 'center',
  },
  textIcon: {
    color: Color.product.normal,
  },
});
