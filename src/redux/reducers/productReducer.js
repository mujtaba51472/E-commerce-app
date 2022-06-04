import { actionTypes } from "../constants/actionTypes";

const initialProduct = {
  products: [],
  productFetchedSuccess:"",
  productFetchedFailed:"",
  // for single product 
  singleProduct: {},
  singleProductFetchingSuccess:"",
  singleProductFetchingFailed:""
};

// reducer for showing multiple products 
export const productReducer = (state = initialProduct, { type, payload }) => {
  switch (type) {
    case "FETCHING_PRODUCT_INIT":
      return {
        ...state ,
        productFetchedSuccess:"",
        productFetchedFailed:""
      }
    case "FETCHING_PRODUCT_SUCCESS":
      return {
        ...state,
        products: payload,
        productFetchedSuccess:" ALl Product Fetched Successfully"
        
      };
      case "FETCHING_PRODUCT_FAIL":
        return {
          ...state,
          productFetchedFailed: payload,
        };

    default:
      return state;
  }
};


// reducer for showing single product 
export const selectedProductReducer = (state = initialProduct, { type, payload }) => {
  switch (type) {
    case "SINGLE_FETCHING_PRODUCT_INIT":
      return {
        ...state ,
        productFetchedSuccess:"",
        productFetchedFailed:""
      }
    case "SINGLE_FETCHING_PRODUCT_SUCCESS":
      return {
        ...state,
        ...payload,
        singleProductFetchingSuccess:" Single Product Fetched Successfully"
        
      };

      // case "PRODUCT_REMOVED": {
      //   return {}
      // }
      case "SINGLE_FETCHING_PRODUCT_FAIL":
        return {
          ...state,
          singleProductFetchingFailed: payload,
        };

    default:
      return state;
  }
};






// export const selectedProductReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case actionTypes.SELECTED_PRODUCT:
//       return {
//         ...state,
//         ...payload,
//       };
    
//     default:
//       return state;
//   }
// };
