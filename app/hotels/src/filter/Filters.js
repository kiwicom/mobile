// @flow strict

import * as React from 'react';

type Props = {|
  +children: React.Node,
|};

export default function Filters(props: Props) {
  const activeFilters = [];
  const inactiveFilters = [];

  React.Children.forEach(props.children, child => {
    if (child.props.isActive) {
      activeFilters.push(child);
    } else {
      inactiveFilters.push(child);
    }
  });

  return (
    <React.Fragment>
      {activeFilters.map(Component => Component)}
      {inactiveFilters.map(Component => Component)}
    </React.Fragment>
  );
}
