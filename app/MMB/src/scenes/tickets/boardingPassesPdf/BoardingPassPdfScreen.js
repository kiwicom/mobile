// @flow strict

import * as React from 'react';

import BoardingPassesPdf from './BoardingPassPdf';

type Props = {|
  +boardingPassUrl: ?string,
  +flightNumber: string,
|};

const BoardingPassesPdfScreen = ({ boardingPassUrl, flightNumber }: Props) => (
  <BoardingPassesPdf
    boardingPassUrl={boardingPassUrl}
    flightNumber={flightNumber}
  />
);

export default BoardingPassesPdfScreen;
