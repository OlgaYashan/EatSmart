import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {  Container,Content} from 'native-base';
import { mapStateToProps, mapDispatchToProps } from "./container";
import {connect} from 'react-redux';
import { Card,Icon, ListItem,Button,Header } from 'react-native-elements';
import img from './product.png'


 class ComponentsScreen extends Component{

    componentWillMount(){
        this.props.loadComponents();
    }



    renderCards=()=>{
        return this.props.components.map((component, i) => {
        return(
            <Card key={i}>
                   <ListItem
                    roundAvatar
                    title={component.name}
                    avatar={img}
                     />    
                <Text style={{marginBottom: 10, color:'#696969'}}>
                    {"тип: " + component.type}
                </Text>
                
            </Card>
        )
    })
    }

    render(){
        return(
            <Container >
                <Header
                    backgroundColor='#A0CB1B'
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Компоненти', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                <Content style={styles.container}>
                {this.renderCards()}
                </Content>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComponentsScreen);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    }
  });