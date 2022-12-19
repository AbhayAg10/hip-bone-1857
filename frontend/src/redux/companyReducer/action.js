import axios from "axios";

import * as types from "./actionTypes";

export const getCompaniesRequest = () => {
  return {
    type: types.GET_COMPANIES_REQUEST,
  };
};

export const getCompanies = () => (dispatch) => {
  dispatch(getCompaniesRequest());

  return axios.get("https://rich-puce-peacock-kilt.cyclic.app/api/companies").then((res) => {
    dispatch({
      type: types.GET_COMPANIES_SUCCESS,
      payload: res.data,
    });
  });
};

export const getCompaniesByIndustry = (industry) => (dispatch) => {
  dispatch(getCompaniesRequest());

  return axios
    .get("https://rich-puce-peacock-kilt.cyclic.app/api/companies?industry=" + industry)
    .then((res) => {
      dispatch({
        type: types.GET_COMPANIES_SUCCESS,
        payload: res.data,
      });
    });
};
