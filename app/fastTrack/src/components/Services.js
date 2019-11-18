// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Icon, Translation } from '@kiwicom/mobile-shared';
import { type TranslationKeysType } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Service = {|
  +id: number,
  +icon: string,
  +translation: TranslationKeysType,
|};

type Props = {|
  +services: Service[],
|};

const Services = ({ services }: Props) => (
  <React.Fragment>
    <Text style={style.title}>
      <Translation id="mmb.fast_track.banner.services_label.bergamo.bergamo_stopover" />
    </Text>
    <View style={style.list}>
      {services.map((service: Service) => (
        <View style={style.item} key={service.id}>
          <Icon name={service.icon} color={defaultTokens.colorIconSecondary} />
          <Text style={style.name}>
            <Translation id={service.translation} />
          </Text>
        </View>
      ))}
    </View>
  </React.Fragment>
);

Services.defaultProps = {
  services: [
    {
      id: 1,
      icon: 'walk',
      translation: 'mmb.fast_track.banner.services_security_route.bergamo.bergamo_stopover',
    },
    {
      id: 2,
      icon: 'baggage-checked',
      translation: 'mmb.fast_track.banner.services_handling_assistance.bergamo.bergamo_stopover',
    },
  ],
};

export default Services;

const style = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: defaultTokens.paletteInkLight,
  },
  list: {
    marginTop: 8,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    marginStart: 4,
    fontWeight: 'bold',
    color: defaultTokens.paletteInkNormal,
  },
});
