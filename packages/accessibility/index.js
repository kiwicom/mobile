// @flow strict

type AccessibilityTraitsValues =
  | 'none'
  | 'button'
  | 'link'
  | 'header'
  | 'search'
  | 'image'
  | 'selected'
  | 'plays'
  | 'key'
  | 'text'
  | 'summary'
  | 'disabled'
  | 'frequentUpdates'
  | 'startsMedia'
  | 'adjustable'
  | 'allowsDirectInteraction'
  | 'pageTurn';

// See: https://facebook.github.io/react-native/docs/accessibility.html
export type AccessibilityProps = {|
  accessible?: boolean,
  accessibilityLabel?: string,
  accessibilityTraits?:
    | AccessibilityTraitsValues
    | $ReadOnlyArray<AccessibilityTraitsValues>,
  accessibilityViewIsModal?: boolean, // iOS only
  onAccessibilityTap?: () => void, // iOS only
  onMagicTap?: () => void, // iOS only
  accessibilityComponentType?:
    | 'none'
    | 'button'
    | 'radiobutton_checked'
    | 'radiobutton_unchecked',
  accessibilityLiveRegion?: 'none' | 'polite' | 'assertive', // Android only
  importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants', // Android only
|};
