// @flow strict

export type CancellablePromiseType = {|
  cancel: () => void,
  promise: Promise<*>,
|};

const CancellablePromise = (
  incomingPromise: Promise<*>,
): CancellablePromiseType => {
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

export default CancellablePromise;
