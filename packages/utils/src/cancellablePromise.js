// @flow

export type CancellablePromiseType = {|
  cancel: () => void,
  promise: Promise<any>,
|};

const CancellablePromise = (
  incomingPromise: Promise<any>,
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
