# Available components

You will find **minimal** examples of all available components here. We are using fake `navigator` in this documentation. It may be for example [React Navigation](https://github.com/react-community/react-navigation) but in general it should be replaced with some library responsible for navigation between screens.

```
import {
  AllHotels,
  AllHotelsMap,
  SingleHotel,
  GalleryGrid,
  GalleryStripe,
} from '@kiwicom/react-native-app-hotels';
```

## AllHotels

```js
<AllHotels />
```

## AllHotelsMap

```js
<AllHotelsMap />
```

## SingleHotel

```js
<SingleHotel />
```

## Photo Gallery

Component `GalleryGrid` displays grid of photo thumbnails. The property `onGoToGalleryStripe` is called after photo tile press so you can open screen with `GalleryStripe` component (see bellow).

```js
<GalleryGrid
  hotelName="Hotel Hilton"
  onGoToGalleryStripe={(hotelName, imageUrls, imageIndex) => {
    // just pass the props to the "stripe" component
    navigator.goTo('GalleryStripeScreen', {
      hotelName,
      imageUrls,
      index: imageIndex,
    }, {
      mode: 'modalWithoutMenu'
    });
  }}
  images={[
    {
      key: '1',
      lowRes: 'http://example.com/images/hotel/1-low.jpg',
      highRes: 'http://example.com/images/hotel/1-high.jpg',
    },
    // ...
  ]}
/>
```

`GalleryStripe` is swipeable component with photos.

```js
<GalleryStripe
  hotelName="Hotel Hilton"
  imageUrls={[
    'http://example.com/images/hotel/1-high.jpg',
    'http://example.com/images/hotel/1-high.jpg',
  ]}
  goBack={() => navigator.goBack()} // or maybe "go to gallery grid"
/>
```
