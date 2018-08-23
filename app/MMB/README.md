This package implement Manage My Booking (MMB) feature.

```
src/
├── components/                       - generic components reused accross all scenes in MMB
├── navigation/                       - React Navigation related files
├── scenes/                           - navigation independent (more or less) scenes
└── MainMenu.js                       - main file with defined items
```

usage: 

```js
import { ManageMyBookingPackage } from '@kiwicom/react-MMB';
// With simple token: 
const render = () => <ManageMyBookingPackage
          dimensions={this.props.dimensions}
          currency="EUR"
          bookingId="<bookingId>" 
          simpleToken="<simpletoken>"
          version="<app-version>"
          bookingComAffiliate="<booking_com_affialiate>" // For opening hotels from tripservices
          dataSaverEnabled={false}
        />

// With token: 
const render = () => <ManageMyBookingPackage
          dimensions={this.props.dimensions}
          currency="EUR"
          accessToken="<token>"
          version="<app-version>"
          bookingComAffiliate="<booking_com_affialiate>" // For opening hotels from tripservices
          dataSaverEnabled={false}
        />
```