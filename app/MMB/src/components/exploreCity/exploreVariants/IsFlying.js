// @flow strict

import * as React from 'react';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import type { IsFlying as RouteStop } from './__generated__/IsFlying.graphql';
import ExploreText from '../ExploreText';
import ExploreButton from '../ExploreButton';

type Props = {|
  +data: RouteStop,
|};

const IsFlying = (props: Props) => {
  const destination = idx(props.data, _ => _.airport.city.name);
  const code = idx(props.data, _ => _.airport.code);
  const time = idx(props.data, _ => _.localTime);

  if (time == null || code == null || destination == null) {
    return null;
  }

  return (
    <React.Fragment>
      <ExploreText
        title={
          <Translation id="mmb.main_menu.explore_city.is_flying.enjoy_flight" />
        }
        text={
          <Translation
            id="mmb.main_menu.explore_city.is_flying.heading_to"
            values={{
              destination,
              code,
              time: DateFormatter(new Date(time)).formatToTime(),
            }}
          />
        }
      />
      <ExploreButton airportName={idx(props.data, _ => _.airport.name) || ''} />
    </React.Fragment>
  );
};

export default createFragmentContainer(
  IsFlying,
  graphql`
    fragment IsFlying on RouteStop {
      localTime
      airport {
        code
        name
        city {
          name
        }
      }
    }
  `,
);
