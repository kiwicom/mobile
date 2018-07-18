// @flow strict

export type CancellablePromiseType = {|
  cancel: () => void,
  promise: Promise<*>,
|};

export default (incomingPromise: Promise<*>) => {
  let resolve;
  let reject;

  const promise = new Promise((originalResolve, originalReject) => {
    resolve = originalResolve;
    reject = originalReject;
  });

  incomingPromise.then(resolve).then(reject);

  return {
    promise,
    cancel: () => {
      reject('cancelled');
    },
  };
};
