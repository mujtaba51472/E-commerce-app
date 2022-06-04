import React, { Component } from "react";
import { connect } from "react-redux";
class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      loading: false,
    };
  }
  componentDidMount(){
    this.fetchingProduct()
  }
  fetchingProduct =  ()=> {
    this.setState(({
      loading:true
    }))
    let {product}= this.state
    if(this.props.product.singleProductFetchingSuccess){
      product=this.props.product.data
      
     

  }
  this.setState({
    product,
    loading:false


  })
  }
  
 
 

  render() {
    const { image, title, price, category, description } = this.state.product;

    return (
      <>

          <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image}/>
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("sngeee", state.product);
  return {
    product: state.product,
  };
};
export default connect(mapStateToProps, null)(ProductDetail);
