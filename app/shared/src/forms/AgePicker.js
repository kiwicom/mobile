// @flow

import * as React from 'react';
import { Picker, View } from 'react-native';

import BarPopup from '../popup/BarPopup';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  isVisible: boolean,
  onChange: (selectedValue: number) => void,
  onClose: Function,
  max: number,
  min: number,
  selectedValue?: number | null,
|};

type State = {|
  selectedValue: number | null,
|};

const styles = StyleSheet.create({
  pickerContainer: {
    paddingHorizontal: 2,
  },
});

export default class AgePicker extends React.Component<Props, State> {
  state = {
    selectedValue: null,
  };

  componentWillReceiveProps = ({ selectedValue }: Props) =>
    this.setState({ selectedValue });

  handleValueChange = (selectedValue: number | null) =>
    this.setState({ selectedValue });

  onSave = () =>
    this.props.onChange(this.state.selectedValue || this.props.min);

  renderItems = (min: number, max: number) => {
    const items = [];
    for (let i = min; i <= max; i++) {
      // String type casting for label is needed, int causes failure.
      const label = i === 0 ? 'Less than year' : String(i);
      items.push(<Picker.Item label={label} value={i} key={i} />);
    }
    return items;
  };

  render() {
    const { min, max } = this.props;
    return (
      <BarPopup
        buttonTitle="Done"
        isVisible={this.props.isVisible}
        onClose={this.props.onClose}
        onSave={this.onSave}
      >
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={this.state.selectedValue}
            onValueChange={this.handleValueChange}
          >
            {this.renderItems(min || min === 0 ? min : 1, max)}
          </Picker>
        </View>
      </BarPopup>
    );
  }
}
