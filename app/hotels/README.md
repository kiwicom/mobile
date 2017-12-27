# Available components

You will find **minimal** examples of all available components here. We are using fake `navigator` in this documentation. It may be for example [React Navigation](https://github.com/react-community/react-navigation) but in general it should be replaced with some library responsible for navigation between screens.

```
import {
  AllHotels,
  AllHotelsMap,
  SingleHotel,
  GalleryGrid,
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

#### Notes

**Native**: Follow the [instruction](https://github.com/react-community/react-native-maps/blob/master/docs/installation.md) how to install maps and provide Google maps API key in `AndroidManifest.xml`:

```xml
<application>
  <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
  <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="Your Google maps API Key Here"/>
</application>
```

**React Native**: Currently you need to set Google Maps Api key manually to make it work on Android (see app.json), follow instructions in Expo [MapView Docs](https://docs.expo.io/versions/latest/sdk/map-view.html#deploying-to-a-standalone-app-on-android).

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
