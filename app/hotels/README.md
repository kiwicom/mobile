```js
import HotelsStandalonePackage from '@kiwicom/react-native-app-hotels';

const render = () => <HotelsStandalonePackage
  bookingComAffiliate="123456"
  language="en"
  currency="EUR"
  onBackClicked={() => goToHomepage()}
  dataSaverEnabled={false}
/>
```

This package is exported with name `KiwiHotels` into native code.
