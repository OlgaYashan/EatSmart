import React, { Component } from "react";
import "./index.scss";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

class Recipes extends Component {
  componentDidMount = () => {
    this.props.loadRecipes();
  };

  renderRecipes = () => {
    const { recipes } = this.props;
    return recipes.map((recipe, index) => {
      return <h1 key={index}>{recipe.title}</h1>;
    });
  };

  render() {
    const { error, loading } = this.props;

    return (
      <div className="recipies-list">
        {this.renderRecipes()}
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error: {error}</h1>}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
