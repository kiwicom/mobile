// @flow

import * as React from 'react';
import { SectionList } from 'react-native';

import OnLayout from './OnLayout';

type Section = {|
  +header: React.Node,
  +data: React.Node[],
  +shouldScroll?: boolean,
|};

type RenderItem = {|
  +item: React.Node[],
  +index: number,
  +section: Section,
|};

type OnLayoutArg = {|
  +height: number,
|};

type Props = {|
  +data: Section[],
|};

type Header = {
  type: 'HEADER',
  section: Section,
};

type Footer = {
  type: 'FOOTER',
  section: Section,
};

type Item = {
  type: 'ITEM',
  section: Section,
  index: number,
  item: React.Node,
};

/**
 * SectionList considers headers, items and footers to get the layout
 * /!\ Must not forget about footers with height 0
 *
 *  |---------------------------|
 *  | HEADER = section.header
 *  |---------------------------|
 *  | Item1 = section.data[0]
 *  |---------------------------|
 *  | Item2 = section.data[1]
 *  |---------------------------|
 *  | ...
 *  |---------------------------|
 *  | FOOTER = null
 *  |---------------------------|
 *
 */

type ItemLayoutInfo = {|
  height: number,
  rendered: boolean,
|};

const generateDefaultLayoutInfo = (length: number): ItemLayoutInfo[] =>
  [...Array(length)].map(() => ({
    height: 0,
    rendered: false,
  }));

export default class SectionListScrollTo extends React.Component<Props> {
  layoutInfo: ItemLayoutInfo[];
  pastOffset: number;
  sectionListRef: React.ElementRef<typeof SectionList>;
  storeSectionListRef = (ref: React.ElementRef<typeof SectionList>) =>
    (this.sectionListRef = ref);

  constructor(props: Props) {
    super(props);

    const layoutInfoLength = props.data.reduce(
      (acc, section) => acc + 1 + section.data.length + 1,
      0,
    );
    this.layoutInfo = generateDefaultLayoutInfo(layoutInfoLength);
  }

  componentDidMount() {
    this.verifyAndScroll;
  }

  componentWillUnmount() {
    clearInterval(this.verifyAndScroll);
  }

  getLayoutInfoIndex = (element: Header | Footer | Item) => {
    const sectionIndex = this.props.data.indexOf(element.section);
    const baseIndex =
      this.props.data
        .slice(0, sectionIndex)
        .reduce((acc, _section) => acc + _section.data.length, 0) +
      sectionIndex * 2;
    switch (element.type) {
      case 'HEADER':
        return baseIndex + 0;
      case 'ITEM':
        return baseIndex + 1 + element.index;
      case 'FOOTER':
        return baseIndex + 1 + element.section.data.length;
      default: {
        return 0;
      }
    }
  };

  addInfo = (height: number, element: Header | Footer | Item) => {
    if (!this.props.data) {
      return;
    }
    const isRendered = height !== 0 || element.type === 'FOOTER';
    const layoutInfoIndex = this.getLayoutInfoIndex(element);

    if (!this.layoutInfo[layoutInfoIndex]) {
      this.layoutInfo[layoutInfoIndex] = {
        height,
        rendered: isRendered,
      };
    } else {
      this.layoutInfo[layoutInfoIndex].height = height;
      this.layoutInfo[layoutInfoIndex].rendered = isRendered;
    }
  };

  computeOffset = (index: number) => {
    if (this.layoutInfo.every(item => item.rendered)) {
      return this.layoutInfo
        .slice(0, index)
        .reduce((acc, curr) => acc + curr.height, 0);
    }
    return 0;
  };

  scrollToRelevantSection = () => {
    const { data } = this.props;
    const section = data.find(_section => _section.shouldScroll);
    if (!data || !this.sectionListRef || !section) {
      return;
    }
    const sectionIndex = data.indexOf(section);
    const layoutInfoIndex = this.getLayoutInfoIndex({
      section,
      type: 'HEADER',
    });

    const viewOffset = this.layoutInfo[layoutInfoIndex].height;
    this.sectionListRef.scrollToLocation({
      sectionIndex,
      itemIndex: 0,
      viewPosition: 0,
      viewOffset,
    });
  };

  verifyAndScroll = setInterval(() => {
    if (this.layoutInfo.every(info => info.rendered)) {
      const { data } = this.props;
      const section = data.find(_section => _section.shouldScroll);
      if (section) {
        const layoutInfoIndex = this.getLayoutInfoIndex({
          section,
          type: 'HEADER',
        });
        const currentOffset = this.computeOffset(layoutInfoIndex);

        const layoutFinishedComputing = currentOffset === this.pastOffset;

        if (layoutFinishedComputing) {
          this.scrollToRelevantSection();
          clearInterval(this.verifyAndScroll);
        }
        this.pastOffset = this.computeOffset(layoutInfoIndex);
      }
    }
  }, 50);

  getItemLayout = (data: ?(Section[]), index: number) => {
    const ITEM_LENGTH_ESTIMATE = 100;
    if (
      this.layoutInfo[index] &&
      this.layoutInfo.every(info => info.rendered)
    ) {
      const offset = this.computeOffset(index);
      const length = this.layoutInfo[index].height;
      return {
        length,
        offset,
        index,
      };
    }
    return {
      length: ITEM_LENGTH_ESTIMATE,
      offset: ITEM_LENGTH_ESTIMATE * index,
      index,
    };
  };

  onLayoutRender = (element: Header | Footer | Item) => ({
    height,
  }: OnLayoutArg) => {
    this.addInfo(height, element);
    switch (element.type) {
      case 'HEADER':
        return element.section.header;
      case 'ITEM':
        return element.item;
      case 'FOOTER':
      default:
        return null;
    }
  };

  renderSectionHeader = ({ section }: { section: Section }) => (
    <OnLayout render={this.onLayoutRender({ type: 'HEADER', section })} />
  );

  renderItem = ({ item, index, section }: RenderItem) => (
    <OnLayout
      render={this.onLayoutRender({ type: 'ITEM', section, item, index })}
    />
  );

  renderSectionFooter = ({ section }: { section: Section }) => {
    this.addInfo(0, { type: 'FOOTER', section });
    return null;
  };

  keyExtractor = (item: React.Node[], index: number) => index;

  render = () => {
    if (!this.props.data) {
      return null;
    }
    return (
      <SectionList
        ref={this.storeSectionListRef}
        sections={this.props.data}
        renderSectionHeader={this.renderSectionHeader}
        renderSectionFooter={this.renderSectionFooter}
        renderItem={this.renderItem}
        getItemLayout={this.getItemLayout}
        keyExtractor={this.keyExtractor}
      />
    );
  };
}
