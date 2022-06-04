
// classs base 
import React, { Component } from 'react'
import ProductComponent from './ProductComponent'
  export default class ProductListing extends Component {
  
  render() {
    return (
      <div className='ui grid container'>
        <ProductComponent/>
      </div>
    )
  }
}
 

