import React, {Component} from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {View, Button} from 'react-native';
//import {Actions} from 'react-native-router-flux';

import { mapStateToProps, mapDispatchToProps } from "./container";

class Home extends Component{

    componentDidMount = () => {
        this.props.loadProducts();
      };

      



    render(){
        return(
            <View>
                <Text>Hello</Text>
        
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);
  


/*
export default connect(state => ({
    counter: state.counter.count,
    routes: state.routes
}),
    (dispatch) => ({
        actions: bindActionCreators(counterActions, dispatch)
    })
)(Home);*/