# Code-push version changelog

- Due to some initial testing, ios is one version behind android.
v22/v21 means v22 for android and v21 for ios

this will be evened out from v24

## Target version 8.0.0

- Upgrade rnkiwimobile to version `0.0.42`

### v26

- Upgraded react-native, react-native-code-push, react-native-gesture-handler and react-navigtion
- Replace `react-native-tooltips` with tooltips from `universal-components`

## Target version 7.0.0

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
