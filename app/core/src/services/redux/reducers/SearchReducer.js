// @flow

import type { ReduxState, ReduxActions } from '../../../types/Redux';

type SearchState = $PropertyType<ReduxState, 'search'>;

const InitialSearchState: SearchState = {
  fields: {},
  lastFocusedField: '',
  systemSuggested: '',
};

export default (
  state: SearchState = InitialSearchState,
  action: ReduxActions,
): SearchState => {
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
