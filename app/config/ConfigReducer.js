// @flow

type ConfigReducerState = {
  dataSaverEnabled: boolean,
};

type ConfigReducerActions = {| type: 'TOGGLE_DATA_SAVER' |};

const InitialConfigState: ConfigReducerState = {
  // enabled data saver disables images downloading to save data transfers
  dataSaverEnabled: false,
};

export default (
  state: ConfigReducerState = InitialConfigState,
  action: ConfigReducerActions,
): ConfigReducerState => {
  switch (action.type) {
    case 'TOGGLE_DATA_SAVER':
      return {
        ...state,
        dataSaverEnabled: !state.dataSaverEnabled,
      };
    default:
      return state;
  }
};
