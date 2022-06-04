import axios from 'axios'
// action creator for   all products coming from the api 
 export const fetchinProducts = ()=> async(dispatch)=> {
  dispatch({
      type: "FETCHING_PRODUCT_INIT",

  })

  const resp = await axios.get('https://fakestoreapi.com/products')
  console.log('myres', resp)
  try {
      if(resp){
          dispatch({
              type:"FETCHING_PRODUCT_SUCCESS",
              payload:resp
          })
      }
      
  } catch (error) {
      const errorMsg = error;
      dispatch({
          type:"FETCHING_PRODUCT_FAIL",
          payload:errorMsg
      })
      
  }

 }



//  showing detail of the single product 
 export const fetchingSingleProduct = ({id})=> async(dispatch)=> {
     console.log('idddddddd' , id)
    dispatch({
        type: "SINGLE_FETCHING_PRODUCT_INIT",
  
    })
  
    const resp = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log('sing'  , resp) 
    try {
        if(resp){
            dispatch({
                type:"SINGLE_FETCHING_PRODUCT_SUCCESS",
                payload:resp
            })
        }
        
    } catch (error) {
        const errorMsg = error;
        dispatch({
            type:"SINGLE_FETCHING_PRODUCT_FAIL",
            payload:errorMsg
        })
        
    }
  
   }


//    export const removeSelectedProduct =()=> {
//     return {
//         type: "PRODUCT_REMOVED",
//     }
// }  





 