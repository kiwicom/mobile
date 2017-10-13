// @flow

import * as React from 'react';

import GoogleAuth from '../../../src/authentication/Google';

import GoogleButton from '../../visual/buttons/GoogleButton';

export default ({ onSuccess }) => (
  <GoogleButton
    onPress={() => {
      const success = GoogleAuth.signIn();
      if (success) {
        onSuccess(success);
      }
    }}
  />
);
