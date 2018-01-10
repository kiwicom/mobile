// @flow

const fs = require('fs');
const path = require('path');

// TODO: fetch .env variables from Vault (or maybe just store the .env file itself in the Vault - this is painful)
const vault = {
  AFFILIATE_BOOKINGCOM: 'null',
  AUTH_ANDROID_GOOGLE_CLIENTID: 'null',
  AUTH_IOS_GOOGLE_CLIENTID: 'null',
  AUTH_KIWI_BACKEND: 'null',
  SENTRY_DSN: 'null',
};

const envTemplate = `
###########################################################################
###                                                                     ###
###                DO NOT UPDATE THIS FILE MANUALLY                     ###
###   To update this file please run "./scripts/configureApplication"   ###
###                                                                     ###
###########################################################################

# Affiliate number is used when sending request to the Booking.com.
# They know (thanks to this number) who is making requests and they'll
# provide branded whitelabel.
#
AFFILIATE_BOOKINGCOM=${vault.AFFILIATE_BOOKINGCOM}

# These client IDs are used by Google login.
# See: https://docs.expo.io/versions/latest/sdk/google.html
#
AUTH_ANDROID_GOOGLE_CLIENTID=${vault.AUTH_ANDROID_GOOGLE_CLIENTID}
AUTH_IOS_GOOGLE_CLIENTID=${vault.AUTH_IOS_GOOGLE_CLIENTID}

# Kiwi backend token is necessary to convert client IDs (Google) to our
# internal Kiwi token. This token is used to communicate with our API.
#
AUTH_KIWI_BACKEND=${vault.AUTH_KIWI_BACKEND}

# Sentry is used to log all errors during client runtime so we can act
# accordingly and fix all production issues.
#
SENTRY_DSN=${vault.SENTRY_DSN}
`;

fs.writeFileSync(path.join(__dirname, '..', '.env'), envTemplate);
