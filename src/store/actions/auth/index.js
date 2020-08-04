export const AUTH_LOGIN_START = 'AUTH_LOGIN_START';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';

export const authStart = () => {
  return {
    type: AUTH_LOGIN_START,
  };
};

export const authSuccess = user => {
  return {
    type: AUTH_LOGIN_SUCCESS,
    user: user,
  };
};

export const authFail = error => {
  return {
    type: AUTH_LOGIN_FAIL,
    error: error,
  };
};

export const authLogin = form => {
  return async dispatch => {
    dispatch(authStart());
    const resp = await fetch('/login',{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(form), // body data type must match "Content-Type" header
    });

    if (resp.status === 200) {
      const user = await resp.json();
      dispatch(authSuccess(user));
    } else {
      // status !== 200, something went wrong
      // grab the response and show the error
      const err = await resp.json()
      dispatch(authFail(err));
    }
  };
};
