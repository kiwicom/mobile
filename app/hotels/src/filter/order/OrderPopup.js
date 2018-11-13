// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { ButtonPopup, Text, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';

import type { OrderByEnum } from '../FilterParametersType';
import OrderCheckbox from './OrderCheckbox';

const ordersOptions = [
  {
    key: 'PRICE',
    title: <Translation id="hotels_search.filter.order_popup.price" />,
  },
  {
    key: 'DISTANCE',
    title: <Translation id="hotels_search.filter.order_popup.distance" />,
  },
  {
    key: 'STARS',
    title: <Translation id="hotels_search.filter.order_popup.stars" />,
  },
];

type Props = {|
  +onClose: () => void,
  +onSave: (orderBy: OrderByEnum | null) => void,
  +isVisible: boolean,
  +orderBy: OrderByEnum | null,
|};

type State = {|
  currentOrder: OrderByEnum | null,
|};
export default class OrderPopup extends React.Component<Props, State> {
  state = {
    currentOrder: this.props.orderBy,
  };

  onSave = () => {
    this.props.onSave(this.state.currentOrder);
  };

  onClose = () => {
    this.setState({ currentOrder: null });
    this.props.onClose();
  };

  setOrder = (currentOrder: OrderByEnum | null) => {
    this.setState({ currentOrder });
  };

  render = () => (
    <ButtonPopup
      buttonTitle={<Translation id="shared.button.save" />}
      buttonCloseTitle={<Translation id="shared.button.close" />}
      onSave={this.onSave}
      onClose={this.onClose}
      isVisible={this.props.isVisible}
    >
      <Text style={styles.title}>
        <Translation id="hotels_search.filter.order_popup.title" />
      </Text>
      {ordersOptions.map((option, index) => (
        <React.Fragment key={option.key}>
          {index !== 0 && (
            <View style={styles.separator}>
              <SeparatorFullWidth color={defaultTokens.paletteInkLighter} />
            </View>
          )}
          <OrderCheckbox
            onPress={this.setOrder}
            isChecked={this.state.currentOrder === option.key}
            checkKey={option.key}
          >
            {option.title}
          </OrderCheckbox>
        </React.Fragment>
      ))}
    </ButtonPopup>
  );
}

const styles = StyleSheet.create({
  title: {
    color: defaultTokens.colorHeading,
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 15,
    paddingBottom: 10,
  },
  separator: {
    marginEnd: -15,
  },
});
