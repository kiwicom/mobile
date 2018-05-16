// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';

// TODO: rename to DateTime component, create shared Date and Time components (?)
function RouteStop(props) {
  const localDateTime = new Date(props.data.localTime);

  const date = DateFormatter(localDateTime).formatToDate();
  const time = DateFormatter(localDateTime).formatToTime();

  return (
    <React.Fragment>
      <Translation passThrough={JSON.stringify(props.data)} />
      <Translation passThrough={date} />
      <Translation passThrough={time} />
    </React.Fragment>
  );
}

export default createFragmentContainer(
  RouteStop,
  graphql`
    fragment RouteStop on RouteStop {
      localTime
    }
  `,
);
