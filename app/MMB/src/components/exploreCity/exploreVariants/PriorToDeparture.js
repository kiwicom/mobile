// @flow strict

import * as React from 'react';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import ExploreText from '../ExploreText';
import ExploreButton from '../ExploreButton';
import type { PriorToDeparture as SegmentType } from './__generated__/PriorToDeparture.graphql';

type Props = {|
  +data: SegmentType,
|};

export const PriorToDeparture = (props: Props) => {
  const rawDepartureTime = idx(props.data, _ => _.departure.localTime);

  if (rawDepartureTime == null) {
    return null;
  }
  const airportName = idx(props.data, _ => _.arrival.airport.name) || '';
  const text = [
    <Translation
      id="mmb.main_menu.explore_city.prior_to_departure.flying_to_destination"
      values={{
        destination: airportName,
        time: DateFormatter(new Date(rawDepartureTime)).formatToTime(),
      }}
      key="flying-soon"
    />,
  ];
  const gate = idx(props.data, _ => _.departure.gate);
  const recheckRequired = idx(props.data, _ => _.recheckRequired);

  if (gate && !recheckRequired) {
    text.push(<Translation passThrough=" " key="space" />);
    text.push(
      <Translation
        id="mmb.main_menu.explore_city.prior_to_departure.go_to_gate"
        values={{ gate }}
        key="go-to-gate"
      />,
    );
  } else if (recheckRequired && !gate) {
    text.push(<Translation passThrough=" " key="space" />);
    text.push(
      <Translation
        id="mmb.main_menu.explore_city.prior_to_departure.recheck_your_bags"
        key="recheck-bags"
      />,
    );
  } else if (recheckRequired && gate) {
    text.push(<Translation passThrough=" " key="space" />);
    text.push(
      <Translation
        id="mmb.main_menu.explore_city.prior_to_departure.recheck_your_bags_and_go_to_gate"
        values={{ gate }}
        key="recheck-bags-and-go-to-gate"
      />,
    );
  }

  return (
    <React.Fragment>
      <ExploreText
        title={
          <Translation id="mmb.main_menu.explore_city.prior_to_departure.flying_soon" />
        }
        text={text}
      />
      <ExploreButton airportName={airportName} />
    </React.Fragment>
  );
};

export default createFragmentContainer(
  PriorToDeparture,
  graphql`
    fragment PriorToDeparture on Leg {
      recheckRequired
      departure {
        localTime
        gate
        airport {
          name
        }
      }
      arrival {
        airport {
          name
        }
      }
    }
  `,
);
