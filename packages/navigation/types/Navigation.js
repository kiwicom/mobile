// @flow

type NavigationStateParameters = Object;

// FIXME: this is related to the packages and not navigation
type CoreStackNavigatorRouteNames =
  | 'Homepage'
  | 'HotelsPackage'
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
  | 'mmb.trip_services.insurance.payment'
  | 'mmb.trip_services.insurance.selection'
  | 'mmb.trip_services.webview'
  | 'mmb.help.help'
  | 'mmb.help.support'
  | 'mmb.other.invoice'
  | 'mmb.other.open'
  | 'mmb.other.refund'
  | 'mmb.tickets.e_ticket'
  | 'mmb.tickets.boarding_pass'
  | 'mmb.timeline.invoice'
  | 'mmb.explore'
  | 'DetailScreen'
  | 'TravelDocumentScreen';

type HomepageStackNavigatorRouteNames = 'Home';
type PlaygroundNavigationRouteNames = 'Playground';

export type RouteNames =
  | CoreStackNavigatorRouteNames
  | HotelsStackNavigatorNames
  | MMBStackNavigatorNames
  | HomepageStackNavigatorRouteNames
  | PlaygroundNavigationRouteNames;

/**
 * @see https://reactnavigation.org/docs/navigators/navigation-prop
 */
export type Navigation = {
  navigate: ({
    routeName: RouteNames,
    key: string, // should be unique
    params?: NavigationStateParameters,
  }) => void,
  state: {
    params: NavigationStateParameters,
  },
  setParams: (newParameters: NavigationStateParameters) => void,
  goBack: (key?: string | null) => void,
};
