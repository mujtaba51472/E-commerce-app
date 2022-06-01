 import { actionTypes } from "../constants/actionTypes";

// action creator for   all products coming from the api 
 export const setProducts = (products)=> {
     return {
         type: actionTypes.SET_PRODUCT,
         payload:products
     }
 }
 //action creator for the those product which have been selected 
 export const selectedProduct = (product)=> {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
export const removeSelectedProduct =()=> {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
    }
}