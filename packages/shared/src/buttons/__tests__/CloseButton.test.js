// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Button } from '@kiwicom/orbit-react-native';

import CloseButton from '../CloseButton';

const shallow = new ShallowRenderer();

it('renders', () => {
  expect(shallow.render(<CloseButton onPress={jest.fn()} />)).toMatchInlineSnapshot(`
    <Button
      onClick={[MockFunction]}
      type="secondary"
    >
      <ButtonTitle
        style={
          Object {
            "fontSize": 16,
            "fontWeight": "800",
          }
        }
        text={
          <Translation
            id="shared.button.close"
          />
        }
      />
    </Button>
  `);
});

it('calls on press when pressed', () => {
  const onPress = jest.fn();
  const wrapper = create(<CloseButton onPress={onPress} />);

  const button = wrapper.root.findByType(Button);
  button.props.onClick();

  expect(onPress).toHaveBeenCalledWith();
});
