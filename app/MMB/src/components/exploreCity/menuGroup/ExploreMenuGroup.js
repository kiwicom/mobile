// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { TextIcon } from '@kiwicom/mobile-shared';
import { MenuGroup } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import ExploreMenuItem from './ExploreMenuItem';
import type { ExploreMenuGroup as LocationType } from './__generated__/ExploreMenuGroup.graphql';

type Props = {|
  +data: LocationType,
|};

class ExploreMenuGroup extends React.Component<Props> {
  onOrderTransportPress = () => {
    console.warn('TODO');
  };

  render = () => (
    <MenuGroup>
      <ExploreMenuItem
        title={
          <Translation
            id="mmb.main_menu.explore_city.explore_menu_group.order_transport"
            values={{ iata: idx(this.props.data, _ => _.code) || '' }}
          />
        }
        onPress={this.onOrderTransportPress}
        icon={<TextIcon code=";" />}
      />
    </MenuGroup>
  );
}

export default createFragmentContainer(
  ExploreMenuGroup,
  graphql`
    fragment ExploreMenuGroup on Location {
      code
    }
  `,
);
