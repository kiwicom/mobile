```js
import { HotelsStandalonePackage } from '@kiwicom/react-native-app-hotels';

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
   // checkin and checkout are optional props, pass with format "YYYY-MM-DD"
  checkin="2018-12-01"
  checkout="2018-12-05"
/>
```

This package is exported with name `KiwiHotels` into native code.

``` js
import { SingleHotelStandAlonePackage } from '@kiwicom/react-native-app-hotels';

const roomsConfiguration = [{ 
  adultsCount: 1, 
  children: [{ age: 1}],
}];

const render = () => <SingleHotelStandAlonePackage
  bookingComAffiliate="123456"
  language="en"
  currency="EUR"
  onBackClicked={() => goToHomepage()}
  dataSaverEnabled={false}
  checkin="2018-05-01"
  checkout="2018-05-05" 
  roomsConfiguration={roomsConfiguration}
  hotelId="fq34rffa3="
/>
```

This package is exported with name `SingleHotel` into native code.
