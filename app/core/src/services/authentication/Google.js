// @flow

/**
 * @deprecated This functionality will be removed (we are not using it).
 */
export default new class Google {
  signIn = async (): Promise<string | false> => {
    return false;
  };
}();
