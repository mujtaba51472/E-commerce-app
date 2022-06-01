import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/actions/productAction'

const ProductListing = () => {
    const products = useSelector(state => state.allProducts.products)
    console.log("productssss" , products)
   const dispatch= useDispatch()

    const fetchedProducts = async ()=> {
          const resp = await axios.get("https://fakestoreapi.com/products")
          .catch(err=> console.log(err))
          dispatch(setProducts(resp.data))


    }

    useEffect(()=> {
      fetchedProducts()

    } , [])
  return (
    <div className='ui grid container'>
        <ProductComponent/>

    </div>
  )
}

export default ProductListing