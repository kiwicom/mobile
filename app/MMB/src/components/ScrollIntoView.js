// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';

type Props = {|
  +shouldScrollIntoView: boolean,
  +scrollToY?: (y: number) => void,
  +children: React.Node,
|};

type OnLayoutEvent = {|
  +nativeEvent: {
    +layout: { +x: number, +y: number, +width: number, +height: number },
  },
|};

export class ScrollIntoView extends React.Component<Props> {
  onLayout = (e: OnLayoutEvent) => {
    this.props.scrollToY && this.props.scrollToY(e.nativeEvent.layout.y);
  };
  render() {
    const onLayout = this.props.shouldScrollIntoView ? this.onLayout : null;
    return <View onLayout={onLayout}>{this.props.children}</View>;
  }
}

type ScrollViewWithScrollToYProps = {|
  +children: React.Node,
|};

export class ScrollViewWithScrollToY extends React.Component<
  ScrollViewWithScrollToYProps,
> {
  scrollView: ?ScrollView;

  constructor(props: ScrollViewWithScrollToYProps) {
    super(props);
    this.scrollView = React.createRef();
  }

  scrollToY = (y: number) => {
    if (this.scrollView && this.scrollView.current) {
      this.scrollView.current.scrollTo({ y });
    }
  };

  render() {
    return (
      <ScrollView ref={this.scrollView}>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, { scrollToY: this.scrollToY }),
        )}
      </ScrollView>
    );
  }
}
