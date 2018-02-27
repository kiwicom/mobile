```js
import HotelsStandalonePackage from '@kiwicom/react-native-app-hotels';

const render = () => <HotelsStandalonePackage
  bookingComAffiliate="123456"
  language="en"
  currency="EUR"
  onBackClicked={() => goToHomepage()}
  dataSaverEnabled={false}

  // coordinates of the user's location or `null`
  coordinates={{
    latitude: 51.5,
    longitude: 0,
  }}
/>
```

This package is exported with name `KiwiHotels` into native code.
