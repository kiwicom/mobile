// @flow

import * as React from 'react';

import GoogleAuth from '../../../src/authentication/Google';

import GoogleButton from '../../visual/buttons/GoogleButton';

type Props = {
  onSuccess: (accessToken: string) => void,
};

export default function GoogleLogin({ onSuccess }: Props) {
  return (
    <GoogleButton
      onPress={async () => {
        const success = await GoogleAuth.signIn();
        if (success) {
          onSuccess(success);
        }
      }}
    />
  );
}
