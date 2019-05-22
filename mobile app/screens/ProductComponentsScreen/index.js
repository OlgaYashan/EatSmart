import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {  Container,Content} from 'native-base';

import {connect} from 'react-redux';
import { Card, ListItem,Button,Header } from 'react-native-elements';
import img from './product.png'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ProductComponentsScreen extends Component{

    renderCards=()=>{
        const { product } = this.props.navigation.state.params;
        return product.components.map((component, i) => {
        return(
            <Card key={i}>
                   <ListItem
                    title={component.name}
                    leftIcon={<Icon name='ios-leaf' size={26} color='#3CB371'/>}
                     />    
                <Text style={{marginBottom: 10, color:'#696969'}}>
                    {"тип: " + component.type}
                </Text>
                <Text style={{marginBottom: 10, color:'#696969'}}>
                    {"опис: " + component.description}
                </Text>
                
            </Card>
        )
    })
    }

    render(){
        const { product,page } = this.props.navigation.state.params;
        return(
            <Container style={styles.home}>
                <Header
                    backgroundColor='#A0CB1B'
                    centerComponent={{ text: `${product.name}: компоненти`, style: { color: '#fff' } }}
                   
                    >
                         <Button buttonStyle={styles.btn} title="Назад" onPress={()=>this.props.navigation.navigate(page)} />
                    </Header>
                <Content style={styles.container}>
                {this.renderCards()}
                </Content>
            </Container>
        );
    }
}



  const styles = StyleSheet.create({
    home:{
        flex: 1,
        marginBottom:20
      },
        container: {
          flex: 1,
          paddingBottom: 10
        },
    btn:{
        backgroundColor: '#6B8E23'
    }
  });