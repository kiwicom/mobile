// @flow

import * as React from 'react';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { Dimensions } from '@kiwicom/mobile-shared';

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

  render = () => {
    const { WrappedComponent } = this.props;
    return (
      <Dimensions.Consumer>
        {dimensions => (
          <WrappedComponent
            {...this.props}
            dimensions={dimensions}
            onGoToGalleryStripe={this.goToGalleryStripe}
          />
        )}
      </Dimensions.Consumer>
    );
  };
}
