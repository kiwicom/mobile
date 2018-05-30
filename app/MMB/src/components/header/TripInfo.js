// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import TripInfoOneWay from './TripInfoOneWay';
import TripInfoReturn from './TripInfoReturn';
import TripInfoMulticity from './TripInfoMulticity';
import type { TripInfo as TripInfoType } from './__generated__/TripInfo.graphql';

type Props = {|
  data: TripInfoType,
|};

function TripInfo(props: Props) {
  const data = idx(props, _ => _.data);
  const type = idx(data, _ => _.type);

  return (
    <React.Fragment>
      {type === 'ONE_WAY' && <TripInfoOneWay data={data && data.oneWay} />}
      {type === 'RETURN' && <TripInfoReturn data={data && data.return} />}
      {type === 'MULTICITY' && (
        <TripInfoMulticity data={data && data.multicity} />
      )}
    </React.Fragment>
  );
}

export default createFragmentContainer(
  TripInfo,
  graphql`
    fragment TripInfo on Booking {
      type
      oneWay {
        ...TripInfoOneWay
      }
      return {
        ...TripInfoReturn
      }
      multicity {
        ...TripInfoMulticity
      }
    }
  `,
);
