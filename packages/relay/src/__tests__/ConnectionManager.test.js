// @flow

import ConnectionManager from '../ConnectionManager';

describe('ConnectionManager', () => {
  describe('isConnected', () => {
    it('returns false if connectionType is none', () => {
      ConnectionManager.handleConnectionChange({ type: 'none' });
      expect(ConnectionManager.isConnected()).toBe(false);
    });

    it('returns false if connectionType is unknown', () => {
      ConnectionManager.handleConnectionChange({ type: 'unknown' });
      expect(ConnectionManager.isConnected()).toBe(false);
    });

    it('returns true if connectionType is wifi', () => {
      ConnectionManager.handleConnectionChange({ type: 'wifi' });
      expect(ConnectionManager.isConnected()).toBe(true);
    });

    it('returns true if connectionType is cellular', () => {
      ConnectionManager.handleConnectionChange({ type: 'cellular' });
      expect(ConnectionManager.isConnected()).toBe(true);
    });
  });
});
