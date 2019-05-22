import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {  Container,Content} from 'native-base';
import { mapStateToProps, mapDispatchToProps } from "./container";
import {connect} from 'react-redux';
import { Card, ListItem,Button,Header } from 'react-native-elements';
import img from './product.png'

import Icon from 'react-native-vector-icons/Ionicons'


 class ProductsScreen extends Component{

    componentWillMount(){
        this.props.loadProducts();
    }

    static  navigationOptions = {
        drawerIcon:(
          <Icon name='ios-cart' size={26} color='#3CB371'/>
  
        )
    }

    renderComponents=(product)=>{
        return product.components.map((component, i) => {
            return( <ListItem
                key={i}
                leftIcon={<Icon name='pocket' type='zocial' color='#A0CB1B'/>}
                title={component.name}
                subtitle={component.type}
              />);
        
        });
    }

    renderCards=()=>{
        return this.props.products.map((product, i) => {
        return(
            <Card
                key={i}
                title={product.name}
                >
                  <Image
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    
                    source={img}
                />    
                <Text style={{marginBottom: 10, color:'#696969'}}>
                    {"виробник: " + product.id_producer}
                </Text>
                {/*<Content>
                    {this.renderComponents(product)}
                </Content>*/}
                <Button  
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#A0CB1B'}}
                    title='Cклад' 
                    onPress={()=> this.props.navigation.navigate('ProductComponents', { product: product,page: 'Продукти' })}/>
            </Card>
        )
    })
    }

    render(){
        return(
            <Container style={styles.home} >
                <Header
                    backgroundColor='#A0CB1B'
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Продукти', style: { color: '#fff' } }}
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
  )(ProductsScreen);

  const styles = StyleSheet.create({
    home:{
        flex: 1,
        marginBottom:20
      },
        container: {
          flex: 1,
          paddingBottom: 10
        },
  });