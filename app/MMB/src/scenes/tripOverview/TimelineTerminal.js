// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import TimelineRow from './TimelineRow';
import type { TimelineTerminal as TimelineTerminalType } from './__generated__/TimelineTerminal.graphql';

type Props = {|
  +icon: React.Element<typeof TextIcon>,
  +data: TimelineTerminalType,
|};

const TimelineTerminal = ({ data, icon }: Props) => {
  const terminal = data.terminal;
  const iata = data.airport?.code ?? '';
  const city = data.airport?.city?.name ?? '';

  if (terminal == null) {
    return null;
  }
  return (
    <TimelineRow
      icon={icon}
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
