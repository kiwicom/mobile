// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import SplitNavigationContext from '../SplitNavigationContext';

class ContextConsumer extends React.Component<{}> {
  render = () => null;
}

const getWrapper = () =>
  renderer.create(
    <SplitNavigationContext.Provider>
      <SplitNavigationContext.Consumer>
        {({ actions: { setActiveId }, activeId }) => (
          <ContextConsumer activeId={activeId} setActiveId={setActiveId} />
        )}
      </SplitNavigationContext.Consumer>
    </SplitNavigationContext.Provider>,
  );

describe('SplitNavigationContext', () => {
  it('sets active id', () => {
    const wrapper = getWrapper();
    const instance = wrapper.root.findByType(ContextConsumer);
    const newActiveId = 'active-lol';

    expect(instance.props.activeId).not.toEqual(newActiveId);

    instance.props.setActiveId(newActiveId);
    expect(instance.props.activeId).toEqual(newActiveId);
  });
});
