// @flow

import * as React from 'react';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';

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
    this.props.navigation.navigate({
      routeName: 'GalleryStripe',
      key: 'key-GalleryStripe',
      params: {
        hotelName,
        imageUrls: highResImages,
        index: imageIndex,
      },
    });
  };

  render = () => {
    const { WrappedComponent } = this.props;
    return (
      <WrappedComponent
        {...this.props}
        onGoToGalleryStripe={this.goToGalleryStripe}
      />
    );
  };
}
