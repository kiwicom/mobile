// @flow

import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { NetworkImage } from '@kiwicom/react-native-app-common';

type Props = {|
  onTilePress: (imageIndex: number) => void,
  imageIndex: number,
  width: number,
  lastInRow: boolean,
  gap: number,
  imageUrl: string,
|};

export default class GalleryGridTile extends React.Component<Props> {
  handleTilePress = () => this.props.onTilePress(this.props.imageIndex);

  render = () => {
    const style: Object = {
      width: this.props.width,
      height: this.props.width, // width is intentional because we want square tiles
      marginBottom: 2,
    };
    if (!this.props.lastInRow) {
      style.marginRight = this.props.gap;
    }

    return (
      <TouchableOpacity onPress={this.handleTilePress}>
        <NetworkImage
          source={{ uri: this.props.imageUrl }}
          style={style}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };
}
