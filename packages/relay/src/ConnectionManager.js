// @flow strict

import NetInfo from '@react-native-community/netinfo';

type ConnectionType =
  // iOS & Android
  | 'none'
  | 'cellular'
  | 'unknown'
  | 'wifi'
  // Android only
  | 'bluetooth'
  | 'ethernet'
  | 'wimax';

class ConnectionManager {
  connectionType: ConnectionType;

  constructor() {
    NetInfo.addEventListener('connectionChange', this.handleConnectionChange);
  }

  handleConnectionChange = ({ type }: { type: ConnectionType, ... }) => {
    this.connectionType = type;
  };

  isConnected = () => {
    return this.connectionType !== 'none' && this.connectionType !== 'unknown';
  };
}

export default new ConnectionManager();
