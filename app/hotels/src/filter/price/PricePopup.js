// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  ButtonPopup,
  Slider,
  StyleSheet,
  Price,
  Translation,
  AdaptableBadge,
  TranslationFragment,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SafeAreaView } from 'react-navigation';
import { Decimal } from 'decimal.js-light';

type Props = {|
  onClose: () => void,
  onSave: ({ minPrice: number, maxPrice: number }) => void,
  isVisible: boolean,
  min: Decimal,
  max: Decimal,
  start: Decimal,
  end: Decimal,
  currency: string,
  daysOfStay: number,
|};

export default function PricePopup(props: Props) {
  const { onSave: propsOnSave } = props;
  const [price, setPrice] = React.useState({
    start: new Decimal(0),
    end: new Decimal(0),
  });

  React.useEffect(() => {
    setPrice({
      start: props.start,
      end: props.end,
    });
  }, [props.end, props.start]);

  const handlePriceChanged = React.useCallback(
    ([start, end]: number[]) =>
      setPrice({
        start: new Decimal(start),
        end: new Decimal(end),
      }),
    [],
  );

  const savePrice = React.useCallback(() => {
    // If calling props.onSave here, eslint will want to add props to watcher array 😞
    propsOnSave({
      minPrice: price.start.toNumber(),
      maxPrice: price.end.toNumber(),
    });
  }, [price.end, price.start, propsOnSave]);

  return (
    <SafeAreaView>
      <ButtonPopup
        buttonTitle={<Translation id="hotels_search.filter.price_popup.save" />}
        onSave={savePrice}
        onClose={props.onClose}
        isVisible={props.isVisible}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            <Translation id="hotels_search.filter.price_popup.title" />
            <Translation passThrough=" " />
          </Text>
          <AdaptableBadge
            translation={
              <TranslationFragment>
                <Price
                  amount={price.start.times(props.daysOfStay)}
                  currency={props.currency}
                />
                <Translation passThrough=" - " />
                <Price
                  amount={price.end.times(props.daysOfStay)}
                  currency={props.currency}
                />
              </TranslationFragment>
            }
            type="info"
            circled={true}
            style={styles.priceBadge}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            startValue={price.start.toNumber()}
            endValue={price.end.toNumber()}
            min={props.min.toNumber()}
            max={props.max.toNumber()}
            onChange={handlePriceChanged}
            startLabel={
              <Price
                amount={props.min.times(props.daysOfStay)}
                currency={props.currency}
              />
            }
            endLabel={
              <Price
                amount={props.max.times(props.daysOfStay)}
                currency={props.currency}
              />
            }
          />
        </View>
      </ButtonPopup>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: defaultTokens.paletteInkNormal,
    paddingBottom: 10,
    lineHeight: 19,
  },
  sliderContainer: {
    paddingHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  priceBadge: {
    paddingHorizontal: 7,
  },
});
