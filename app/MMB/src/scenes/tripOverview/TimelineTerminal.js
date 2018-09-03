// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import TimelineRow from './TimelineRow';
import type { TimelineTerminal as TimelineTerminalType } from './__generated__/TimelineTerminal.graphql';

type Props = {|
  +icon: React.Element<typeof TextIcon>,
  +data: TimelineTerminalType,
|};

const TimelineTerminal = (props: Props) => {
  const terminal = idx(props.data, _ => _.terminal);
  const iata = idx(props.data, _ => _.airport.code) || '';
  const city = idx(props.data, _ => _.airport.city.name) || '';

  if (terminal == null) {
    return null;
  }
  return (
    <TimelineRow
      icon={props.icon}
      value={
        <Translation
          id="mmb.flight_overview.timeline.terminal"
          values={{
            terminal,
            city,
            iata,
          }}
        />
      }
    />
  );
};

export default createFragmentContainer(
  TimelineTerminal,
  graphql`
    fragment TimelineTerminal on RouteStop {
      terminal
      airport {
        code
        city {
          name
        }
      }
    }
  `,
);
