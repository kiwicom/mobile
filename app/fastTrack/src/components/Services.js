// @flow stric

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Icon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Service = {
  icon: string,
  name: string,
};

type Props = {|
  +services: Service[],
|};

const Services = ({ services }: Props) => (
  <React.Fragment>
    <Text style={style.title}>
      <Translation passThrough="Services included" />
    </Text>
    <View style={style.list}>
      {services.map(service => (
        <View style={style.item} key={service.name}>
          <Icon name={service.icon} color={defaultTokens.colorIconSecondary} />
          <Text style={style.name}>
            <Translation passThrough={service.name} />
          </Text>
        </View>
      ))}
    </View>
  </React.Fragment>
);

Services.defaultProps = {
  services: [
    { icon: 'walk', name: 'Fast track security route' },
    { icon: 'baggage-checked', name: 'Baggage handling assistance' },
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
