# Available components

```
import {
  AllHotels,
  AllHotelsMap,
  SingleHotel,
  Gallery,
} from '@kiwicom/native-hotels';
```

## AllHotels

```
<AllHotels />
```

## AllHotelsMap

```
<AllHotelsMap />
```

#### Notes: 

- **Native**: Follow the [instruction](https://github.com/react-community/react-native-maps/blob/master/docs/installation.md) how to install maps and provide Google maps API key in `AndroidManifest.xml`:
    ```
    <application>
        <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
        <meta-data
          android:name="com.google.android.geo.API_KEY"
          android:value="Your Google maps API Key Here"/>
    </application>
    ```
- **React Native**: Currently you need to set Google Maps Api key manually to make it work on Android (see app.json), follow instructions in Expo [MapView Docs](https://docs.expo.io/versions/latest/sdk/map-view.html#deploying-to-a-standalone-app-on-android)

## SingleHotel

```
<SingleHotel />
```

## Gallery

```
<Gallery />
```
