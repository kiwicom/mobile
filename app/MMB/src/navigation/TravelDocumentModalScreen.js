// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  type NavigationType,
  HeaderTitle,
  HeaderButton,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import {
  StyleSheet,
  TextIcon,
  Color,
  TextInput,
  Text,
  DatePicker,
  Switch,
} from '@kiwicom/mobile-shared';

import TitleTranslation from '../components/TitleTranslation';

type Props = {|
  +navigation: NavigationType,
  +fullName: string,
  +title: string,
  +idNumber: string | null,
  +expiryDate: Date | null,
|};

type State = {|
  idNumber: string,
  expiryDate: Date | null,
  noExpiry: boolean,
|};

export default class TravelDocumentModalScreen extends React.Component<
  Props,
  State,
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      idNumber: props.idNumber || '',
      expiryDate: props.expiryDate,
      noExpiry: false,
    };
  }
  static navigationOptions = ({ navigation }: Props) => {
    function goBack() {
      navigation.goBack(null);
    }
    return {
      headerLeft: (
        <HeaderButton onPress={goBack}>
          <Translation id="mmb.missing_informaiton.travel_document_modal_screen.close" />
        </HeaderButton>
      ),
      headerTitle: (
        <HeaderTitle>
          <Translation id="mmb.fill_travel_document_screen_modal.title" />
        </HeaderTitle>
      ),
      headerRight: (
        <HeaderButton onPress={goBack}>
          <Translation id="mmb.missing_informaiton.travel_document_modal_screen.save" />
        </HeaderButton>
      ),
      gesturesEnabled: false,
    };
  };

  onIdNumberChange = (idNumber: string) => {
    this.setState({ idNumber });
  };

  onDateChange = (expiryDate: Date) => {
    this.setState({ expiryDate });
  };

  onNoExpiryChange = (noExpiry: boolean) => {
    this.setState({ noExpiry });
  };

  render = () => (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextIcon code="w" style={styles.icon} />
        <TitleTranslation title={this.props.title} />
        <Translation passThrough={' ' + this.props.fullName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          <Translation id="mmb.missing_informaiton.travel_document_modal_screen.passport_or_id_number" />
        </Text>
        <TextInput
          autoFocus={true}
          defaultValue={this.state.idNumber}
          onChangeText={this.onIdNumberChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          <Translation id="mmb.missing_informaiton.travel_document_modal_screen.passport_or_id_expiry" />
        </Text>
        <View style={styles.row}>
          <View style={styles.datePickerContainer}>
            <DatePicker
              date={this.state.expiryDate}
              onDateChange={this.onDateChange}
              minDate={new Date()} // TODO: Should probably be the date of the last leg
              formatFunction="formatToBirthday"
            />
          </View>
          <View style={[styles.row, styles.switchContainer]}>
            <Text style={[styles.label, styles.switchText]}>
              <Translation id="mmb.missing_informaiton.travel_document_modal_screen.no_expiry" />
            </Text>
            <Switch
              value={this.state.noExpiry}
              onValueChange={this.onNoExpiryChange}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  icon: {
    color: Color.black,
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
  label: {
    color: Color.textLight,
    marginBottom: 5,
  },
  switchContainer: {
    alignItems: 'center',
  },
  switchText: {
    marginHorizontal: 5,
  },
  datePickerContainer: {
    flex: 1,
  },
});
