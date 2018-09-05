// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';

import InsuranceOverviewScreen from './screens/InsuranceOverviewScreen';
import InsuranceSelectionScreen from './screens/InsuranceSelectionScreen';
import InsurancePaymentScreen from './screens/InsurancePaymentScreen';
import InsuranceRefundScreen from './screens/InsuranceRefundScreen';
import InsuranceMoreInfoScreen from './screens/InsuranceMoreInfoScreen';
import InsuranceTermsScreen from './screens/InsuranceTermsScreen';

const MoreInfoStack = StackNavigator(
  {
    InsuranceMoreInfo: {
      screen: withMappedProps(InsuranceMoreInfoScreen),
    },
    InsuranceTerms: {
      screen: withMappedProps(InsuranceTermsScreen),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'InsuranceMoreInfo',
    mode: 'modal',
  },
);

const MainInsuranceStack = StackNavigator(
  {
    'mmb.trip_services.insurance': {
      screen: withMappedProps(InsuranceOverviewScreen),
    },
    'mmb.trip_services.insurance.selection': {
      screen: withMappedProps(InsuranceSelectionScreen),
    },
    'mmb.trip_services.insurance.payment': {
      screen: withMappedProps(InsurancePaymentScreen),
    },
    'mmb.trip_services.insurance.refund': {
      screen: withMappedProps(InsuranceRefundScreen),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'mmb.trip_services.insurance',
  },
);

export default StackNavigator(
  {
    InsuranceStack: {
      screen: MainInsuranceStack,
    },
    InsuranceMoreInfoStack: {
      screen: MoreInfoStack,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'InsuranceStack',
    headerMode: 'none',
  },
);
