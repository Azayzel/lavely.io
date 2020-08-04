import { AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL } from '../../actions/auth';
import { updateObject } from '../../utility';

const initialState = {
  id: null,
  email: null,
  name: null,
  avatar: null,
  error: null,
  loading: false,
  loaded: false,
};

const authStart = state => {
  return updateObject(state, {
    error: null,
    loading: true,
    loaded: false,
  });
};

const authSuccess = (state, { user }) => {
  return updateObject(state, {
    ...user,
    error: null,
    loading: false,
    loaded: true,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_START:
      return authStart(state, action);
    case AUTH_LOGIN_SUCCESS:
      return authSuccess(state, action);
    case AUTH_LOGIN_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
