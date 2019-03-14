# Code-push version changelog

- Due to some initial testing, ios is one version behind android.
v22/v21 means v22 for android and v21 for ios

this will be evened out from v24

## Target version 7.0.0

### v30

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
