import React, { Component } from "react";
import "./index.scss";
import GridSearch from '../../components/grid_search'

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

class ProductsGrid extends Component {
  componentDidMount = () => {
    this.props.loadProducts();
    this.props.loadComponents();
  };

  deleteProductandReload=(product)=>{

    this.props.deleteProduct(product);

  }

  myIndexOf = (arr, o) =>{  
    console.log(arr.length); 
    for (var i = 0; i < arr.length; i++) {
      
        if (arr[i].name == o.name) {
            return i;
        }
    }
    return -1;
}

  updateProductsArray = (newArr) =>{
    var stateArr = this.props.user.lastProducts;
    var newArr = newArr;
    for(var i=newArr.length-1; i>=0; i--){
      if(this.myIndexOf(stateArr,newArr[i])!=-1){
        var index = this.myIndexOf(stateArr,newArr[i]);
        stateArr.splice(index,1);
        stateArr.unshift(newArr[i]);
      }
      else{
        stateArr.unshift(newArr[i]);
      }
    }
    var newUser = this.props.user;
    newUser.lastProducts =  stateArr;
    this.props.updateUser(newUser);
  }

  renderProducts = () => {
    const { products, user } = this.props;
    return (<GridSearch editeProduct={this.props.editProduct} deleteProduct={this.deleteProductandReload} updateProductsArray={this.updateProductsArray} loadProducts={this.props.loadProducts}  addProduct={this.props.addProduct} user={user} source={products} components={this.props.components} />);
  };

  render() {
    const { error, loading } = this.props;
    return (
      <div className="recipies-list">
        {this.renderProducts()}
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error: {error}</h1>}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsGrid);
