// @flow

type NavigationStateParameters = Object;

// FIXME: this is related to the packages and not navigation
type CoreStackNavigatorRouteNames =
  | 'Homepage'
  | 'HotelsPackage'
  | 'NewHotelsPackage'
  | 'SingleHotelPackage'
  | 'MMBPackage';

type HotelsStackNavigatorNames =
  | 'AllHotelsMap'
  | 'GalleryGrid'
  | 'GalleryStripe'
  | 'Payment'
  | 'SingleHotel'
  | 'SingleHotelMap'
  | 'LocationPicker'
  | 'GuestsModal';

type MMBStackNavigatorNames =
  | 'mmb.flight_services.allocated_seating'
  | 'mmb.flight_services.checked_baggage'
  | 'mmb.flight_services.musical_equipment'
  | 'mmb.flight_services.pets'
  | 'mmb.flight_services.special_assistance'
  | 'mmb.flight_services.sports_equipment'
  | 'mmb.trip_services.insurance'
  | 'mmb.trip_services.insurance.refund'
  | 'mmb.trip_services.insurance.selection.more_info'
  | 'mmb.trip_services.insurance.selection.more_info.terms'
  | 'mmb.trip_services.insurance.payment'
  | 'mmb.trip_services.insurance.selection'
  | 'mmb.trip_services.webview'
  | 'mmb.help.help'
  | 'mmb.help.support'
  | 'mmb.other.invoice'
  | 'mmb.other.open'
  | 'mmb.other.refund'
  | 'mmb.other.cancellation'
  | 'mmb.tickets.e_ticket'
  | 'mmb.tickets.boarding_pass'
  | 'mmb.timeline.invoice'
  | 'DetailScreen'
  | 'TravelDocumentScreen'
  | 'TravelDocumentModalScreen'
  | 'AppleWalletScreen'
  | 'MMBHotelsStack'
  | 'MMBMainSwitchStack'
  | 'AddressPickerScreen'
  | 'TransportationMap';

type HomepageStackNavigatorRouteNames = 'Home';
type PlaygroundNavigationRouteNames = 'Playground';

export type RouteNames =
  | CoreStackNavigatorRouteNames
  | HotelsStackNavigatorNames
  | MMBStackNavigatorNames
  | HomepageStackNavigatorRouteNames
  | PlaygroundNavigationRouteNames;

export type NavigationListener = (
  key: 'willBlur' | 'willFocus' | 'didFocus' | 'didBlur',
  // See payload https://reactnavigation.org/docs/en/navigation-prop.html#addlistener-subscribe-to-updates-to-navigation-lifecycle
  callback: (payload: Object) => void,
) => { remove: () => void };

/**
 * Based on official types with custom changes (like RouteNames)
 * @see https://github.com/flow-typed/flow-typed/tree/master/definitions/npm/react-navigation_v2.x.x
 */
export type Navigation = {
  navigate: (
    routeName:
      | RouteNames
      | {|
          routeName: RouteNames,
          params?: NavigationStateParameters,
        |},
    params?: NavigationStateParameters,
  ) => void, // In fact it returns boolean but we don't care of this result
  state: {
    params: NavigationStateParameters,
  },
  setParams: (newParameters: NavigationStateParameters) => void,
  goBack: (key?: string | null) => void,
  addListener: NavigationListener,
};
