// @flow

export opaque type AccessToken: string = string;

export const createAccessToken = (accessToken: string = ''): AccessToken =>
  accessToken;
