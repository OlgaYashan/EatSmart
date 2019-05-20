import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {  Container,Content} from 'native-base';

import {connect} from 'react-redux';
import { Card,Icon, ListItem,Button,Header } from 'react-native-elements';
import img from './product.png'


export default class ProductComponentsScreen extends Component{

    renderCards=()=>{
        const { product } = this.props.navigation.state.params;
        return product.components.map((component, i) => {
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
        const { product } = this.props.navigation.state.params;
        return(
            <Container >
                <Header
                    backgroundColor='#A0CB1B'
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: `${product.name}: компоненти`, style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                     <Button title="Назад" onPress={()=>this.props.navigation.navigate('Продукти')} />
                <Content style={styles.container}>
                {this.renderCards()}
                </Content>
            </Container>
        );
    }
}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    }
  });