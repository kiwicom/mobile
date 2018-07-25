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
  ErrorMessage,
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
  error: {|
    idNumber: boolean,
    expiryDate: boolean,
  |},
|};

const noop = () => {};

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
      error: {
        idNumber: false,
        expiryDate: true,
      },
    };
  }

  static navigationOptions = ({ navigation }: Props) => {
    function goBack() {
      navigation.goBack(null);
    }
    const onSave = navigation.state.params.onSave || noop;
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
        <HeaderButton
          onPress={onSave}
          disabled={navigation.state.params.disabled}
        >
          <Translation id="mmb.missing_informaiton.travel_document_modal_screen.save" />
        </HeaderButton>
      ),
      gesturesEnabled: false,
    };
  };

  componentDidMount = () => {
    this.props.navigation.setParams({ onSave: this.onSave, disabled: true });
  };

  onIdNumberChange = (idNumber: string) => {
    this.setState(
      state => ({
        idNumber,
        error: {
          ...state.error,
          idNumber: idNumber.length > 0 && idNumber.length < 5,
        },
      }),
      this.validate,
    );
  };

  onDateChange = (expiryDate: Date) => {
    this.setState(
      state => ({
        expiryDate,
        error: {
          ...state.error,
          expiryDate: false,
        },
      }),
      this.validate,
    );
  };

  onNoExpiryChange = (noExpiry: boolean) => {
    this.setState(
      state => ({
        noExpiry,
        expiryDate: null,
        error: {
          ...state.error,
          expiryDate: !noExpiry,
        },
      }),
      this.validate,
    );
  };

  onSave = () => {
    // TODO: Send mutation
    this.props.navigation.goBack();
  };

  validate = () => {
    // Not using this.state.error.idNumber because if this.state.idNumber.length === 0
    // we want to disable save button, but not show error message under input
    const hasError =
      this.state.idNumber.length < 5 || this.state.error.expiryDate;
    this.props.navigation.setParams({ disabled: hasError });
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
        {this.state.error.idNumber && (
          <ErrorMessage style={styles.error}>
            <Translation id="mmb.missing_informaiton.travel_document_modal_screen.id_number_error" />
          </ErrorMessage>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text
          style={[
            styles.label,
            this.state.noExpiry ? styles.noExpiry : styles.expiry,
          ]}
        >
          <Translation id="mmb.missing_informaiton.travel_document_modal_screen.passport_or_id_expiry" />
        </Text>
        <View style={styles.row}>
          <View style={styles.datePickerContainer}>
            <DatePicker
              date={this.state.expiryDate}
              onDateChange={this.onDateChange}
              minDate={new Date()} // TODO: Should probably be the date of the last leg
              formatFunction="formatToBirthday"
              disabled={this.state.noExpiry}
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
    backgroundColor: Color.white,
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
  error: {
    alignSelf: 'flex-end',
  },
  noExpiry: {
    color: Color.labelDisabled,
  },
  expiry: {
    color: Color.textLight,
  },
});
