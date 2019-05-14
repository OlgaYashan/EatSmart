import React, { Component } from "react";
import "./index.scss";
import CustomList from './../../components/list'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

class ComponentList extends Component {

    componentWillMount(){
        this.props.loadComponents();
    }

    render() {
        return (
          <CustomList user={this.props.user} 
                    components={this.props.components} 
                    addComponent={this.props.addComponent}
                    deleteComponent={this.props.deleteComponent}
                    updateComponent={this.props.updateComponent}
                    loadComponents={this.props.loadComponents}/>
        );
      }
    }
    
    export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(ComponentList);