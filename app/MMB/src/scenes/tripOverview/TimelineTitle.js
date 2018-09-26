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
import { StyleSheet, Text, Touchable, TextIcon } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import memoize from 'memoize-one';

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

class TimelineTitle extends React.Component<PropsWithContext> {
  getWarning = memoize(
    (warnings: $ReadOnlyArray<Warning>, localTime: ?Date, iataCode: ?string) =>
      warnings.find(
        _warning =>
          _warning.timelineTitle.localTime == localTime &&
          _warning.timelineTitle.iataCode == iataCode,
      ),
  );

  onPress = () => {
    const data = this.props.data;
    const localTime = idx(data, _ => _.localTime);
    const iataCode = idx(data, _ => _.airport.locationId);
    const warnings = idx(this.props, _ => _.warnings) || [];

    const warning = this.getWarning(warnings, localTime, iataCode);
    if (warning) {
      Alert.translatedAlert(undefined, warning.text);
    }
  };

  render() {
    const data = this.props.data;
    const localTime = idx(data, _ => _.localTime);
    const cityName = idx(data, _ => _.airport.city.name);
    const iataCode = idx(data, _ => _.airport.locationId);
    const warnings = idx(this.props, _ => _.warnings) || [];
    const warning = this.getWarning(warnings, localTime, iataCode);

    const warningStyle = warning != null ? styleSheet.warningStyle : null;
    return (
      <View style={[styleSheet.row, styleSheet.underline]}>
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

        <Touchable onPress={this.onPress} disabled={warning == null}>
          <View style={styleSheet.warningRow}>
            <Translation passThrough={cityName} />
            <Translation passThrough=" " />
            <Text style={[styleSheet.iataCode, warningStyle]}>
              <Translation passThrough={iataCode} />
            </Text>
            <Translation passThrough=" " />
            {warning != null && (
              <TextIcon code="R" orbit={true} style={styleSheet.warningStyle} />
            )}
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
    color: defaultTokens.colorTextSecondary,
  },
  iataCode: {
    color: defaultTokens.colorTextSecondary,
  },
  row: {
    flexDirection: 'row',
  },
  warningStyle: {
    fontSize: 16,
    color: defaultTokens.paletteRedNormal,
  },
  warningRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  underline: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: defaultTokens.paletteInkLighter,
  },
});
