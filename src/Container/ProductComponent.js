// class base
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import * as ProductAction from "../redux/actions/ProductActions/productAction";

class ProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.fetchingProducts();
  }

  fetchingProducts = async () => {
    let { products } = this.state;
    this.setState({
      loading: true,
    });
    await this.props.fetchinProducts();
    if (this.props.allProducts.productFetchedSuccess) {
      products = this.props.allProducts.products.data || [];

      console.log("myproduct", products);
    }
    this.setState({
      products,
    });
    this.setState({
      loading: false,
    });
  };

  fetchingSingleProduct = async (id) => {
    console.log("myid", id);
   
    await this.props.fetchingSingleProduct(id);
  };
  render() {
    return (
      <div style={{ marginTop: 100, marginLeft: 50 }}>
        {this.state.loading ? (
          <h1>Loadinnnng...</h1>
        ) : (
          this.state.products.map((product) => {
            const { id, title, image, price, category } = product;

            return (
              <div className="four wide column" key={id}>
                <Link
                  to={`/product/${id}`}
                  onClick={() => this.fetchingSingleProduct({ id })}
                >
                  <div className="ui link cards">
                    <div className="card">
                      <div className="image">
                        <img src={image} alt={title} />
                      </div>
                      <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
  };
};
export default connect(mapStateToProps, {
  fetchinProducts: ProductAction.fetchinProducts,
  fetchingSingleProduct: ProductAction.fetchingSingleProduct,
})(ProductComponent);
