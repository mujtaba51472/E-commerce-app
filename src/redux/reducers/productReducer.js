import { actionTypes } from "../constants/actionTypes";

const initialProduct = {
  products: [],
};

export const productReducer = (state = initialProduct, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCT:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
