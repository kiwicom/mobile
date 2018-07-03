// @flow strict

import * as React from 'react';

import BoardingPassesPdf from './BoardingPassPdf';

type Props = {|
  +boardingPassUrl: ?string,
|};

const BoardingPassesPdfScreen = ({ boardingPassUrl }: Props) => (
  <BoardingPassesPdf boardingPassUrl={boardingPassUrl} />
);

export default BoardingPassesPdfScreen;
