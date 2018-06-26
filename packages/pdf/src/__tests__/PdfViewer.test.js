// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { View } from 'react-native';

import PdfViewer from '../PdfViewer';

it('renders', () => {
  PlaygroundRenderer.render(
    <View
      style={{
        height: 500,
        width: '100%',
      }}
    >
      <PdfViewer uri="https://images.kiwi.com/content-media/kiwicom_brand_colours.pdf" />
    </View>,
    false,
    'PdfViewer',
  );
});

it('handles errors', () => {
  const onError = jest.fn();
  const Component = new PdfViewer({
    uri: 'lol',
    onError,
  });
  // $FlowExpectedError: Intentionally overriting method to be able to test it without rendering component
  Component.setState = jest.fn();
  Component.onError();

  expect(Component.setState).toHaveBeenCalledWith({ hasLoadingFailed: true });
  expect(onError).toHaveBeenCalled();
});
