// @flow

type SearchReducerState = {
  // we may have more fields than just "from" and "to" because of multi-city
  fields: {
    [identifier: string]: string, // identifier: value
  },
  // this is identifier of the last used field during search
  lastFocusedField: string,
  // this is what our system suggests for 'userTyped' field
  systemSuggested: string,
};

type SearchReducerActions = {|
  type: 'updateFieldValue',
  identifier: string,
  value: string,
|};

const InitialSearchState: SearchReducerState = {
  fields: {},
  lastFocusedField: '',
  systemSuggested: '',
};

export default (
  state: SearchReducerState = InitialSearchState,
  action: SearchReducerActions,
): SearchReducerState => {
  if (action.type === 'updateFieldValue') {
    return {
      ...state,
      fields: {
        ...state.fields,
        [action.identifier]: action.value,
      },
      lastFocusedField: action.identifier,
    };
  }
  return state;
};
