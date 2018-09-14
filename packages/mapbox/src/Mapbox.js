// @flow

import Mapbox from '@mapbox/react-native-mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

export default Mapbox;
