// @flow

import * as React from 'react';
import { Text } from '@kiwicom/react-native-app-shared';

import CaseTransform, {
  type SupportedTransformationsType,
} from './transformations/CaseTransform';

type Props = {|
  id: ?string | ?number,
  textTransform?: SupportedTransformationsType,
|};

/**
 * This translation component only returns the ID back without translating
 * it. It should therefore used in tests and other places where we don't
 * want to deal with translations but the Flow requires `Translation`.
 */
export default class DummyTranslation extends React.Component<Props> {
  // use this property to highlight translations for screenshoting or debugging
  highlightTranslations = false;

  render = () => (
    <Text
      style={
        this.highlightTranslations
          ? {
              backgroundColor: 'pink',
            }
          : undefined
      }
    >
      {/*
        $FlowExpectedError: we do not allow to use 'string' in the 'Text'
        components but translations are exceptions.
      */}
      {CaseTransform(this.props.id, this.props.textTransform)}
    </Text>
  );
}
