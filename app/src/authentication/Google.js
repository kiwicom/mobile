// @flow

import Expo from 'expo';

import config from '../../config/application';

export default new class Google {
  signIn = async (): string => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: config.auth.android.clientId, // https://docs.expo.io/versions/latest/sdk/google.html#create-an-android-oauth-client-id
        iosClientId: config.auth.ios.clientId, // https://docs.expo.io/versions/latest/sdk/google.html#create-an-ios-oauth-client-id
        scopes: ['profile', 'email'],
      });

      console.warn(JSON.stringify(result));

      if (result.type === 'success') {
        return result.accessToken;
      }
      return false;
    } catch (error) {
      // TODO: log
      return false;
    }
  };
}();
