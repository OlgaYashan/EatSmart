import React, { Component } from "react";
import "./index.scss";
import GridSearch from '../../components/grid_search'

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

class ProductsGrid extends Component {
  componentDidMount = () => {
    this.props.loadProducts();
  };

  renderProducts = () => {
    const { products } = this.props;
    return (<GridSearch source={products}/>);
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
