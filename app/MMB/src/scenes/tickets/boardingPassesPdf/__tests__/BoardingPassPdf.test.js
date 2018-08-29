// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

import { getPdfFilenameFromUrl, BoardingPassPdf } from '../BoardingPassPdf';

jest.mock('react-native-fetch-blob', () => {
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

const bookingId = 123456;

describe('BoardingPassPdf', () => {
  it('renders', () => {
    const wrapper = renderer.render(
      <BoardingPassPdf
        bookingId={bookingId}
        boardingPassUrl="https://somedomain.com/folder/subfolder/file.pdf"
      />,
    );

    expect(wrapper.props.fileName).toBe(
      'boardingPasses/file-bookingId:123456.pdf',
    );
  });
});

describe('getPdfFilenameFromUrl', () => {
  it('should return correct filename given the URL of a pdf', () => {
    const url =
      'https://somedomainname.com/numbers1234/Vienna-Palma%2CMajorca_1234567890_5bafa3bd88fbf8e8c90a0a.pdf?v=12345676';

    expect(getPdfFilenameFromUrl(url, bookingId)).toBe(
      'Vienna-Palma%2CMajorca_1234567890_5bafa3bd88fbf8e8c90a0a-bookingId:123456',
    );
    const pdf = 'somePdf.pdf';
    expect(getPdfFilenameFromUrl(pdf, bookingId)).toBe(
      'somePdf-bookingId:123456',
    );
  });

  it('should return null if given a URL not containing .pdf', () => {
    const url =
      'https://somedomainname.com/numbers1234/Vienna-Palma%2CMajorca_1234567890_5bafa3bd88fbf8e8c90a0a.doc?v=12345676';

    expect(getPdfFilenameFromUrl(url, bookingId)).toBe(null);
    const pdf = 'someNonPdf.xls';
    expect(getPdfFilenameFromUrl(pdf, bookingId)).toBe(null);
  });
});
