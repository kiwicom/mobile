// @flow

/**
 * UI components:
 *  - buttons
 *  - form elements
 *  - loading indicators
 *  - modals, popups
 *
 * These components helps us to build nice UI but they are more or less
 * useless without layout components.
 */
export { default as Button } from './src/buttons/Button';
export { default as TextButton } from './src/buttons/TextButton';
export { default as LinkButton } from './src/buttons/LinkButton';
export { default as ButtonTitle } from './src/buttons/ButtonTitle';
export {
  default as IncrementDecrementButtons,
} from './src/buttons/IncrementDecrementButtons';
export { default as AppleWalletButton } from './src/buttons/AppleWalletButton';

export { default as AgePicker } from './src/forms/AgePicker';
export { default as Checkbox } from './src/forms/Checkbox';
export { default as DatePicker } from './src/forms/datePicker/DatePicker';
export { default as NumberControl } from './src/forms/NumberControl';
export { default as Slider } from './src/forms/Slider';
export { default as TextInput } from './src/forms/TextInput';
export { default as Switch } from './src/forms/Switch';

export { default as FullPageLoading } from './src/loaders/FullPageLoading';
export { default as IconLoading } from './src/loaders/IconLoading';

export { default as Popup } from './src/popup/Popup';
export { default as BarPopup } from './src/popup/BarPopup';
export { default as ButtonPopup } from './src/popup/ButtonPopup';

export { default as Modal } from './src/Modal';

export { default as AdaptableBadge } from './src/AdaptableBadge';
export { default as DropMarker } from './src/DropMarker';
export { default as PositionMarker } from './src/PositionMarker';
export { default as Price } from './src/Price';
export { default as Stars } from './src/Stars';
export { default as Text } from './src/Text';

/**
 * Layout components:
 *  - views
 *  - errors
 *
 * These components helps us to build the layout but they are more or less
 * useless without UI components.
 */
export { default as Dimensions } from './src/view/Dimensions';
export { default as AdaptableLayout } from './src/view/AdaptableLayout';
export { default as CenteredView } from './src/view/CenteredView';
export { default as DismissKeyboardView } from './src/view/DismissKeyboardView';
export { default as LayoutDoubleColumn } from './src/view/LayoutDoubleColumn';
export { default as LayoutSingleColumn } from './src/view/LayoutSingleColumn';
export {
  default as VerticalSwipeResponder,
} from './src/view/VerticalSwipeResponder';
export { default as WebView } from './src/WebView';
export { default as SimpleCard } from './src/SimpleCard';

export { default as GeneralError } from './src/errors/GeneralError';
export { default as ErrorMessage } from './src/errors/ErrorMessage';

export { default as ReadMore } from './src/ReadMore';
export { default as BottomSheet } from './src/BottomSheet';
export { default as RefreshableScrollView } from './src/RefreshableScrollView';

/**
 * Assets:
 *  - static assets (images)
 *  - icons
 *  - image components
 */
export { default as BlackToAlpha } from './images/black-to-alpha-vertical.png';
export {
  default as AppleWalletBackground,
} from './images/apple-wallet-image.jpg';
export {
  default as AppleWalletBackgroundTablet,
} from './images/apple-wallet-image-2x.jpg';

export { default as Icon } from './src/icons/Icon';
export { default as TextIcon } from './src/icons/TextIcon';

export { default as NetworkImage } from './src/image/NetworkImage';
export { default as StretchedImage } from './src/image/StretchedImage';

/**
 * Non-UI components (components without render output):
 */
export { default as AppStateChange } from './src/AppStateChange';
export { default as CancellablePromise } from './src/CancellablePromise';
export { default as Color } from './src/Color';
export { default as CurrencyFormatter } from './src/CurrencyFormatter';
export { default as Device } from './src/Device';
export { default as GeolocationContext } from './src/GeolocationContext';
export { default as GestureController } from './src/GestureController';
export { default as LayoutAnimation } from './src/LayoutAnimation';
export { default as Logger } from './src/Logger';
export { default as StyleSheet } from './src/PlatformStyleSheet';
export { default as Touchable } from './src/Touchable';
export { default as WithStorage } from './src/WithStorage';
export { default as WithNativeNavigation } from './src/WithNativeNavigation';
export { default as WithStandaloneScreen } from './src/WithStandaloneScreen';
export { default as PassBook } from './src/PassBook';

// Flow types:

export type {
  OnFocus,
  OnLayout,
  OnDimensionsChange,
  GestureState,
  PanResponderEvent,
  WebViewStateChangeEvent,
} from './types/Events';

export type {
  StylePropType,
  StyleObjectType,
  PlatformStyleObjectType,
} from './types/Styles';

export type { CancellablePromiseType } from './src/CancellablePromise';

export type { DimensionType } from './types/Objects';
