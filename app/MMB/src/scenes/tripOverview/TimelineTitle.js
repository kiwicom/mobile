// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import {
  Translation,
  DateFormatter,
  Alert,
  type AlertTranslationType,
} from '@kiwicom/mobile-localization';
import {
  StyleSheet,
  Color,
  Text,
  Touchable,
  TextIcon,
} from '@kiwicom/mobile-shared';
import idx from 'idx';

import TripOverviewContext from './TripOverviewContext';
import type { TimelineTitle as TimelineTitleDataType } from './__generated__/TimelineTitle.graphql';

type Warning = {|
  +text: AlertTranslationType,
  +timelineTitle: {|
    +localTime: ?Date,
    +iataCode: ?string,
  |},
|};

type PropsWithContext = {|
  +data: TimelineTitleDataType,
  +warnings: ?(Warning[]),
|};

type State = {|
  warning: ?Warning,
|};

class TimelineTitle extends React.Component<PropsWithContext, State> {
  constructor(props) {
    super(props);
    this.state = {
      warning: null,
    };
  }
  componentDidUpdate(prevProps) {
    const { warnings } = this.props;
    if (prevProps.warnings && warnings) {
      if (prevProps.warnings.length !== warnings.length) {
        const data = this.props.data;
        const localTime = idx(data, _ => _.localTime);
        const iataCode = idx(data, _ => _.airport.locationId);

        const warning = warnings.find(
          _warning =>
            _warning.timelineTitle.localTime == localTime &&
            _warning.timelineTitle.iataCode == iataCode,
        );
        this.setState({ warning });
      }
    }
  }

  onPress = () => {
    if (this.state.warning) {
      Alert.translatedAlert(undefined, this.state.warning.text);
    }
  };

  render() {
    const data = this.props.data;
    const localTime = idx(data, _ => _.localTime);
    const cityName = idx(data, _ => _.airport.city.name);
    const iataCode = idx(data, _ => _.airport.locationId);
    const warningStyle = this.state.warning ? styleSheet.warningStyle : null;
    return (
      <View style={styleSheet.row}>
        <View style={styleSheet.dateTime}>
          {localTime != null && (
            <Translation
              passThrough={DateFormatter(new Date(localTime)).formatToTime()}
            />
          )}

          <Translation passThrough=" " />

          {localTime != null && (
            <Text style={styleSheet.date}>
              <Translation
                passThrough={DateFormatter(new Date(localTime)).formatToDate()}
              />
            </Text>
          )}
        </View>

        <Touchable onPress={this.onPress} disabled={!this.state.warning}>
          <View style={styleSheet.warningRow}>
            <Translation passThrough={cityName} />
            <Translation passThrough=" " />
            <Text style={[styleSheet.iataCode, warningStyle]}>
              <Translation passThrough={iataCode} />
            </Text>
            <Translation passThrough=" " />
            {this.state.warning ? (
              <TextIcon code="4" style={styleSheet.warningStyle} />
            ) : null}
          </View>
        </Touchable>
      </View>
    );
  }
}

type Props = {|
  +data: TimelineTitleDataType,
|};

function TimelineTitleWithContext(props: Props) {
  return (
    <TripOverviewContext.Consumer>
      {context => (
        <TimelineTitle
          data={props.data}
          warnings={context ? context.warnings : null}
        />
      )}
    </TripOverviewContext.Consumer>
  );
}

export default createFragmentContainer(
  TimelineTitleWithContext,
  graphql`
    fragment TimelineTitle on RouteStop {
      localTime
      airport {
        locationId
        city {
          name
        }
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  dateTime: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  date: {
    color: Color.textLight,
  },
  iataCode: {
    color: Color.textLight,
  },
  row: {
    flexDirection: 'row',
  },
  warningStyle: {
    color: Color.red.normal,
  },
  warningRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
