// @flow strict

import * as React from 'react';
import {
  type TranslationType,
  GeneralError,
  TranslationFragment,
  Translation,
} from '@kiwicom/mobile-shared';

import CloseModal from '../components/CloseModal';
import { type HotelsContextState, HotelsContext } from '../HotelsContext';

type Props = {|
  +errorMessages: $ReadOnlyArray<TranslationType>,
|};

export default function InputErrorScreen(props: Props) {
  const { closeHotels }: HotelsContextState = React.useContext(HotelsContext);
  return (
    <>
      <GeneralError
        errorMessage={
          <TranslationFragment>
            {props.errorMessages.map((message, index) => (
              <React.Fragment key={index}>
                {message}
                <Translation passThrough={'\n'} />
              </React.Fragment>
            ))}
          </TranslationFragment>
        }
      />
      <CloseModal onPress={closeHotels} />
    </>
  );
}
