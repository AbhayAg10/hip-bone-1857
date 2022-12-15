import * as types from "./actionTypes";

const initState = {
  isLoading: true,
  error: null,
  data: [],
};

const reducer = (oldstate = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_COMPANIES_REQUEST:
      return {
        ...oldstate,
        isLoading: true,
      };
    case types.GET_COMPANIES_SUCCESS:
      return {
        ...oldstate,
        isLoading: false,
        data: payload,
      };
    case types.GET_COMPANIES_FAILURE: {
      return {
        ...oldstate,
        error: payload,
      };
    }
    default:
      return oldstate;
  }
};

export { reducer };
