// @flow

jest.mock('react-native-pdf', () => {
  return {
    DocumentDir: () => {},
    ImageCache: {
      get: {
        clear: () => {},
      },
    },
  };
});
