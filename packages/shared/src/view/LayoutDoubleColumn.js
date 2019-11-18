// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import AdaptableLayout from './AdaptableLayout';
import StyleSheet from '../PlatformStyleSheet';
import Layout from './Layout';

type Props = {|
  +menuComponent: React.Node,
  +containerComponent: React.Node,
|};

/**
 * The layout has 2 columns. One small on the left and one larger on the right.
 * Left column should be visible ONLY on mobile devices. Examples:
 *
 * Tablet in landscape mode
 * ========================
 *
 *  PART 1              PART 2
 * .-------------------.----------------------------------------.
 * |                   |      .--------------------------.      |
 * |    <- 520pt –>    | 86pt |    <- fluid layout ->    | 86pt |
 * |                   |      |                          |      |
 * |                   |      `--------------------------`      |
 * `-------- ~ --------`------------------ ~ -------------------`
 *
 * Tablet in portrait mode (width is less than 2x 520pt)
 * =======================
 *
 *  PART 1              PART 2
 * .-------------------.-------------------.
 * |                   |                   |
 * |     <- 50% –>     |    <- fluid ->    |
 * |                   |                   |
 * |                   |                   |
 * `-------- ~ --------`-------- ~ --------`
 *
 * Mobile
 * ======
 *
 * PART 1               (there is no PART 2)
 * .-------------------.
 * |                   |
 * |    <- fluid –>    |
 * |                   |
 * |                   |
 * `-------- ~ --------`
 */
export default function LayoutDoubleColumn(props: Props) {
  return (
    <AdaptableLayout
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

function NarrowLayout(props: {| +menuComponent: React.Node |}) {
  // $FlowFixMe Errors after moving rn modules from untyped to declarations
  return <View style={styleSheet.menuNarrow}>{props.menuComponent}</View>;
}

function WideLayout(props: Props) {
  return (
    <Layout>
      {/* $FlowFixMe Errors after moving rn modules from untyped to
       * declarations */}
      <View style={styleSheet.wrapper}>
        {/* $FlowFixMe Errors after moving rn modules from untyped to
         * declarations */}
        <View style={[styleSheet.menu, styleSheet.menuWide]}>{props.menuComponent}</View>
        {/* $FlowFixMe Errors after moving rn modules from untyped to
         * declarations */}
        <View style={styleSheet.container}>{props.containerComponent}</View>
      </View>
    </Layout>
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
    maxWidth: '50%',
    borderEndWidth: 1,
    borderEndColor: defaultTokens.paletteInkLighter,
  },
  container: {
    flex: 1,
  },
});
