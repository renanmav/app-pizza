/**
 * ACTIONS
 */

export const Types = {
  LOGIN_REQUEST: "auth/LOGIN_REQUEST",
  LOGIN_SUCCESS: "auth/LOGIN_SUCCESS",
  LOGIN_FAILURE: "auth/LOGIN_FAILURE"
};

/**
 * REDUCER
 */

const INITIAL_STATE = {
  loading: false,
  token: ""
};

export default function auth(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return { ...state, token: actions.payload.token, loading: false };
    case Types.LOGIN_FAILURE:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  loginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { email, password }
  }),
  loginSuccess: token => ({
    type: Types.LOGIN_SUCCESS,
    payload: { token }
  }),
  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error }
  })
};
