# Code-push version changelog

- Due to some initial testing, ios is one version behind android.
v22/v21 means v22 for android and v21 for ios

this will be evened out from v24

## Target version 10.0.0

- Upgrade rnkiwimobile to version `0.0.45`

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
