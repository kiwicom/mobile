# Code-push version changelog

## Target version 13.0.0

- upgrade rnkiwimobile to version `0.0.49`

### unreleased

- Expose new RN screen `AccountSettings`
  - See iOS example [here](../../ios/RNNativePlayground/ViewController.m#L241)
  - See Android example [here](../../rnandroidplayground/AccountSettingsActivity.kt)
- Expose new RN screen `AccountPriceAlerts`
  - See iOS example [here](../../ios/RNNativePlayground/ViewController.m#L250)
  - See Android example [here](../../rnandroidplayground/AccountPriceAlertsActivity.kt)
- Upgrade react-native to 0.60.5
- Upgrade native dependencies

## Target version 12.0.0

- upgrade rnkiwimobile to version `0.0.48`

### v52

- Upgraded react-native to 0.60.4
- Using hermes
- Upgraded rest of native modules to latest version.
- Improve map to list animation

## Target version 11.0.0

- Upgrade rnkiwimobile to version `0.0.47`

### v50

- Transpile named-capture-group. Caused bug in iOS devices on version less than 12.

### v49

- Upgrade react-native to 0.59.9

## Target version 10.0.0

- Upgrade rnkiwimobile to version `0.0.46`

### v51

- Transpile named-capture-group. Caused bug in iOS devices on version less than 12.

### v48

- Use new maxOccupancy in rest of application as well

### v47

- Use more descriptive names for rooms
- Show correct max number of guests on rooms. We have had some rooms that have had the same name, same amenities, but with different prices. This is because we have been using the wrong field from provider to calculate max guests in a room

### v46

- Fix issue on android where toast would show above header when animating

### v45

- Hide toast on when swiped upwards
- Defer loading map view until map header button is clicked. 

### v44

- Toast returns null when `this.state.isVisible` is false. It worked on ios, but on android filter stripe became unclickable

### v43

- Add zIndex to toast, it ended up behind filter stripe

### v42

- Add info text when dates are force changed. E.G. User selects checkin after checokut, checkout will automatically be chaged.
- Add stars behind selected stars in filter stripe. Before it would show `3,4` now it shows `3,4 stars`;

### v41

- Set max date on checkin datepicker

### v40 

- Set filters on checkin/checkout datepicker. 

### v39
- Fix Missing rating for hotel on map screen - MOBILE-4149

### v38

- Hotels: Fixed lines between options in Star Filter Popup - MOBILE-4112
- Hotels: (Android) Payment Summary and Hotel Detail card on map are swipeable - MOBILE-4113
- Hotels: PaymentSummary Row component truncates long hotel names properly (https://github.com/kiwicom/mobile/issues/1607)

### v37

- Hotel results re design - MOBILE-4064

### v36

- Refactor slider labels -> hope this solves MOBILE-3932

### v35
- Replace decimal.js with ligher decimal.js-light
- Improve sentry logging

### v34

- Added library to handle decimal prices

### v31

- Upgraded react-native and other native dependencies
- New summary layout, see [figma](https://www.figma.com/file/ayF92epBKcFcwdfE8IWIGMNa/Hotels-Results-%26-Detail?node-id=734%3A1) -> Showing only VAT for now, since we need more info from booking.com to show taxes 

## Target version 9.0.0

- Upgrade rnkiwimobile to version `0.0.43` or `0.0.44`, both are compatible with this target-version. The latter contains a patch in the initialization of code-push to fix a crash when upating fails. 

### v33

- Log all graphql errors

### v29

- Set statusbar background color on hotel detail screen, MOBILE-2920
- Fix bug where cancel button on checkout-datepicker did not work

### v28

- Get rid of Equipment part in detail(stay 22), MOBILE-2963
- Enable date change in the header, MOBILE-2972

### v27
- Upgraded react-native to version `0.58.5`

## Target version 8.0.0

- Upgrade rnkiwimobile to version `0.0.42`

### v26

- Upgraded react-native, react-native-code-push, react-native-gesture-handler and react-navigtion
- Replace `react-native-tooltips` with tooltips from `universal-components`

## Target version 7.0.0

### v32

- Log all graphql errors

### 30

- Set statusbar background color on hotel detail screen, MOBILE-2920
- Enable date change in the header, MOBILE-2972
- Add sentry logging

### v25

- Move map/list button to the right of the header on iPad, MOBILE-2427

### v24

- Fix MOBILE-2259, big icon in map

### v23(ios only)

- Small refactor in filter button icons 

### v23/v22

- Fix JIRA-2288 -> search result list have wrong height
- Fix JIRA-2289 -> No message if there are no results displayed

### v22/v21

- Add polyfill for Object.setPrototypeOf (fixes potential crash on timeout of http requests on android)
- Use log function hotelsBookNowPressed and hotelsDetailAbandoned
- Add extra padding for iPhoneX to show powered by booking.com logo
