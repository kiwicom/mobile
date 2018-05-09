// @flow

import * as React from 'react';
import { View } from 'react-native';
import { AdaptableLayout, StyleSheet } from '@kiwicom/mobile-shared';

type Props = {|
  menuComponent: React.Node,
  containerComponent: React.Node,
|};

/**
 * The layout has 2 columns. One small on the left and one larger on the right.
 * Left column should be visible ONLY on mobile devices. Examples:
 *
 * Tablet in landscape mode
 * ========================
 *
 *  PART 1             PART 2
 * .-------------------.----------------------------------------.
 * |                   |      .--------------------------.      |
 * |    <- 520pt –>    | 86pt |    <- fluid layout ->    | 86pt |
 * |                   |      |                          |      |
 * |                   |      `--------------------------`      |
 * `-------------------`----------------------------------------`
 *
 * Tablet in portrait mode
 * =======================
 *
 * ???
 * ???
 *
 * Mobile
 * ======
 *
 * PART 1              (no PART 2)
 * .-------------------.
 * |                   |
 * |    <- fluid –>    |
 * |                   |
 * |                   |
 * `-------------------`
 */
export default function Layout(props: Props) {
  return (
    <AdaptableLayout.Consumer
      renderOnNarrow={<NarrowLayout menuComponent={props.menuComponent} />}
      renderOnWide={
        <WideLayout
          menuComponent={props.menuComponent}
          containerComponent={props.containerComponent}
        />
      }
    />
  );
}

function NarrowLayout(props: {| menuComponent: React.Node |}) {
  return <View style={styleSheet.menuNarrow}>{props.menuComponent}</View>;
}

function WideLayout(props: Props) {
  return (
    <View style={styleSheet.wrapper}>
      <View style={[styleSheet.menu, styleSheet.menuWide]}>
        {props.menuComponent}
      </View>
      <View style={styleSheet.container}>{props.containerComponent}</View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  menuNarrow: {
    flex: 1,
  },
  menuWide: {
    width: 520,
    borderRightWidth: 1,
    borderRightColor: '#cad2dc',
  },
  container: {
    flex: 1,
  },
});
