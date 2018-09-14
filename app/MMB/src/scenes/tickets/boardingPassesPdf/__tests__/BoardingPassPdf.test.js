// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

import { BoardingPassPdf } from '../BoardingPassPdf';

jest.mock('rn-fetch-blob', () => {
  return {
    config: () => ({
      fetch: async () => ({
        path: () => {},
      }),
    }),
    polyfill: () => {},
    fs: {
      dirs: {
        DocumentDir: 'ait',
      },
      exists: () => {},
    },
  };
});

const getWrapper = (
  bookingId: number = 123456,
  BoardingPassUrl: string = 'https://somedomain.com/folder/subfolder/file.pdf',
  flightNumber: string = '123_321',
) =>
  renderer.render(
    <BoardingPassPdf
      bookingId={bookingId}
      boardingPassUrl={BoardingPassUrl}
      flightNumber={flightNumber}
    />,
  );

describe('BoardingPassPdf', () => {
  it('renders', () => {
    const wrapper = getWrapper();

    expect(wrapper).toMatchInlineSnapshot(`
<PdfViewAndStore
  fileName="boardingPasses/123456/123_321.pdf"
  overwriteExisting={false}
  url="https://somedomain.com/folder/subfolder/file.pdf"
/>
`);
  });

  it('show error if bookingId is missing', () => {
    // $FlowExpectedError: Intentionally testing what happens with null value
    const wrapper = getWrapper(null);
    expect(wrapper).toMatchInlineSnapshot(`
<GeneralError
  errorMessage={
    <Translation
      id="mmb.boarding_passes.not_available"
    />
  }
/>
`);
  });

  it('show error if boardingPassUrl is missing', () => {
    // $FlowExpectedError: Intentionally testing what happens with null value
    const wrapper = getWrapper(123, null);
    expect(wrapper).toMatchInlineSnapshot(`
<GeneralError
  errorMessage={
    <Translation
      id="mmb.boarding_passes.not_available"
    />
  }
/>
`);
  });

  it('show error if flightNumber is missing', () => {
    // $FlowExpectedError: Intentionally testing what happens with null value
    const wrapper = getWrapper(123, 'test', null);
    expect(wrapper).toMatchInlineSnapshot(`
<GeneralError
  errorMessage={
    <Translation
      id="mmb.boarding_passes.not_available"
    />
  }
/>
`);
  });
});
