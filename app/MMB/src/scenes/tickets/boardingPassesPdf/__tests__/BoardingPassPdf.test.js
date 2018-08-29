// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

import BoardingPassPdf, { getPdfFilenameFromUrl } from '../BoardingPassPdf';

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

describe('BoardingPassPdf', () => {
  it('renders', () => {
    const wrapper = renderer.render(
      <BoardingPassPdf boardingPassUrl="https://somedomain.com/folder/subfolder/file.pdf" />,
    );

    expect(wrapper.props.fileName).toBe('boardingPasses/file.pdf');
  });
});

describe('getPdfFilenameFromUrl', () => {
  it('should return correct filename given the URL of a pdf', () => {
    const url =
      'https://somedomainname.com/numbers1234/Vienna-Palma%2CMajorca_1234567890_5bafa3bd88fbf8e8c90a0a.pdf?v=12345676';

    expect(getPdfFilenameFromUrl(url)).toBe(
      'Vienna-Palma%2CMajorca_1234567890_5bafa3bd88fbf8e8c90a0a',
    );
    const pdf = 'somePdf.pdf';
    expect(getPdfFilenameFromUrl(pdf)).toBe('somePdf');
  });

  it('should return null if given a URL not containing .pdf', () => {
    const url =
      'https://somedomainname.com/numbers1234/Vienna-Palma%2CMajorca_1234567890_5bafa3bd88fbf8e8c90a0a.doc?v=12345676';

    expect(getPdfFilenameFromUrl(url)).toBe(null);
    const pdf = 'someNonPdf.xls';
    expect(getPdfFilenameFromUrl(pdf)).toBe(null);
  });
});
