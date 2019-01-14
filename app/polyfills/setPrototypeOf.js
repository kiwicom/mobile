// @flow

// see https://github.com/kiwicom/mobile/issues/1416
// $FlowExpectedError: We want to add this polyfill for android
Object.setPrototypeOf =
  Object.setPrototypeOf ||
  function(obj, proto) {
    obj.__proto__ = proto; // eslint-disable-line no-proto
    return obj;
  };
