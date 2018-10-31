// @flow

import * as React from 'react';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { Dimensions, type DimensionType } from '@kiwicom/mobile-shared';

type InjectorProps = {|
  navigation: NavigationType,
  WrappedComponent: React.ElementType,
|};

export default class AdditionalPropsInjecter extends React.Component<
  InjectorProps,
> {
  goToGalleryStripe = (
    hotelName: string,
    highResImages: string[],
    imageIndex: number,
  ) => {
    this.props.navigation.navigate('GalleryStripe', {
      hotelName,
      imageUrls: highResImages,
      index: imageIndex,
    });
  };

  renderInner = (dimensions: DimensionType) => {
    const { WrappedComponent } = this.props;

    return (
      <WrappedComponent
        {...this.props}
        dimensions={dimensions}
        onGoToGalleryStripe={this.goToGalleryStripe}
      />
    );
  };

  render() {
    return <Dimensions.Consumer>{this.renderInner}</Dimensions.Consumer>;
  }
}
