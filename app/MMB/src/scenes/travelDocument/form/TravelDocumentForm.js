// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import last from 'lodash/last';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TitleTranslation from '../../../components/TitleTranslation';
import IdInput from './IdInput';
import BookingDetailContext from '../../../context/BookingDetailContext';
import type { TravelDocumentFormQueryResponse } from './__generated__/TravelDocumentFormQuery.graphql';
import ExpiryDatePicker from './expiryPicker/ExpiryDatePicker';

type Props = {|
  +fullName: string,
  +title: string,
|};

export default class TravelDocumentForm extends React.Component<Props> {
  renderInner = (renderProps: TravelDocumentFormQueryResponse) => {
    let data = null;
    const singleBooking = renderProps.singleBooking;
    if (!singleBooking) {
      return null;
    }

    switch (singleBooking.__typename) {
      case 'BookingOneWay':
        data = singleBooking.trip;
        break;
      case 'BookingReturn':
        data = singleBooking.inbound;
        break;
      case 'BookingMulticity':
        data = last(singleBooking.trips);
        break;
      default:
        break;
    }

    return (
      <React.Fragment>
        <View style={styles.row}>
          <TextIcon code="w" style={styles.icon} />
          <TitleTranslation
            title={this.props.title}
            name={this.props.fullName}
          />
        </View>
        <View style={styles.inputContainer}>
          <IdInput />
        </View>
        <View style={styles.inputContainer}>
          <ExpiryDatePicker data={data} />
        </View>
      </React.Fragment>
    );
  };

  render() {
    return (
      <BookingDetailContext.Consumer>
        {({ bookingId, authToken }) => (
          <PublicApiRenderer
            query={graphql`
              query TravelDocumentFormQuery(
                $bookingId: Int!
                $authToken: String!
              ) {
                singleBooking(id: $bookingId, authToken: $authToken) {
                  __typename
                  ... on BookingOneWay {
                    trip {
                      ...ExpiryDatePicker
                    }
                  }

                  ... on BookingReturn {
                    inbound {
                      ...ExpiryDatePicker
                    }
                  }

                  ... on BookingMulticity {
                    trips {
                      ...ExpiryDatePicker
                    }
                  }
                }
              }
            `}
            render={this.renderInner}
            variables={{
              bookingId,
              authToken,
            }}
          />
        )}
      </BookingDetailContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: defaultTokens.colorIconAttention,
    fontSize: 16,
    paddingTop: 2,
    marginEnd: 5,
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  inputContainer: {
    marginTop: 15,
  },
});
