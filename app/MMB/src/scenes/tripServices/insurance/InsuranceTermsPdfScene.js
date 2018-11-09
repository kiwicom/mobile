// @flow strict

import * as React from 'react';
import { PublicApiRenderer, graphql } from '@kiwicom/mobile-relay';
import PdfViewer from '@kiwicom/mobile-pdf';

import type { InsuranceTermsPdfSceneQueryResponse as Props } from './__generated__/InsuranceTermsPdfSceneQuery.graphql';

const renderPdfViewer = (props: Props) => {
  const documents = props.allDocuments?.edges ?? [];
  const insuranceTermsDocument = documents.find(
    document => document?.node?.__typename === 'InsuranceTerms',
  );
  const node = insuranceTermsDocument?.node ?? {};
  const uri = node.url || '';
  return <PdfViewer uri={uri} />;
};

const InsuranceTermsPdfScene = () => {
  return (
    <PublicApiRenderer
      query={graphql`
        query InsuranceTermsPdfSceneQuery {
          allDocuments {
            edges {
              node {
                ... on InsuranceTerms {
                  url
                  __typename
                }
              }
            }
          }
        }
      `}
      render={renderPdfViewer}
    />
  );
};

export default InsuranceTermsPdfScene;
