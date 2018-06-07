// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { TitledMenuGroup } from '@kiwicom/mobile-navigation';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import CallMenuItem from './CallMenuItem';
import type { CallSupportQueryResponse } from './__generated__/CallSupportQuery.graphql';

function CallSupport(rendererProps: CallSupportQueryResponse) {
  const phoneNumbers =
    idx(rendererProps, _ => _.customerSupport.phoneNumbers) || [];

  return (
    <ScrollView>
      {/* TODO: only one number based on locale of the device */}

      <TitledMenuGroup
        title={<Translation id="mmb.support.phone.all_numbers" />}
      >
        {phoneNumbers.map((phoneNumber, index) => {
          if (!phoneNumber) {
            return null;
          }

          return (
            <CallMenuItem
              key={index}
              title={<Translation passThrough={phoneNumber.number} />}
              description={
                <Translation
                  passThrough={phoneNumber.availabilityDescription}
                />
              }
            />
          );
        })}
      </TitledMenuGroup>
    </ScrollView>
  );
}

export default function CallSupportQueryRenderer() {
  return (
    <PublicApiRenderer
      query={graphql`
        query CallSupportQuery {
          customerSupport {
            phoneNumbers {
              number
              availabilityDescription
            }
          }
        }
      `}
      render={CallSupport}
    />
  );
}
