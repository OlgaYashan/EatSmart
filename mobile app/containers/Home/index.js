import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
//import {Actions} from 'react-native-router-flux';

import { mapStateToProps, mapDispatchToProps } from "./container";



class Home extends Component{

    state = {
        ol: ""
    }

    componentDidMount = () => {
        this.props.loadProducts();
        this.setState({ol: "Olga"})
      };



    render(){
        return(
                
                <Text>{this.state.ol}</Text>
             
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);