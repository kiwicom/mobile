// @flow strict

import { NetInfo } from 'react-native';

type ConnectionType = 'none' | 'wifi' | 'cellular' | 'unknown';

class ConnectionManager {
  connectionType: ConnectionType;

  constructor() {
    NetInfo.addEventListener('connectionChange', this.handleConnectionChange);
  }

  handleConnectionChange = ({ type }: { type: ConnectionType }) => {
    this.connectionType = type;
  };

  isConnected = () => {
    return this.connectionType !== 'none' && this.connectionType !== 'unknown';
  };
}

export default new ConnectionManager();
