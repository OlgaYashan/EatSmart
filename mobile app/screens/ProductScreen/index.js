import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {  Container,Content} from 'native-base';
import { mapStateToProps, mapDispatchToProps } from "./container";
import {connect} from 'react-redux';
import { Card,Icon, ListItem,Button,Header,CheckBox } from 'react-native-elements';
import img from './product.png'


 class ProductScreen extends Component{

    state = {
        pickedProduct:{name:""},
        loadDone: false,
        checked:false,
        message: false
    }

    componentWillUnmount(){
        this.props.clearProduct();
        console.log(this.props.user.name);
        console.log(this.state.pickedProduct.name);
        if(this.state.pickedProduct.name!=""){
            var newUser = this.props.user;
            newUser.history.unshift(this.state.pickedProduct);
            newUser.lastProducts.unshift(this.state.pickedProduct);
            this.props.updateUser(newUser);
        }
    }

    findProduct(){
        const {user} = this.props;
        var forbidenComponents = user.forbidenComponents;
        var dietComponents = user.diet.forbidenComponents;
        var resFC = forbidenComponents.concat(dietComponents);
        
        var productComponents = this.props.product.components;
     
        for (var i=0; i<productComponents.length;i++){
            for(var j=0; j<resFC.length; j++){
                console.log(productComponents[i].name);
                console.log(resFC[j].name);
                if(productComponents[i].name==resFC[j].name){
                    this.setState({message:true});
                }
            }
        }
    }

    

    componentWillMount(){
        const { barCode } = this.props.navigation.state.params;
        this.props.loadProduct(barCode);
          console.log(barCode);
    }

    componentDidUpdate(prevProps){
        if(prevProps.product.name != this.props.product.name){
            this.loadDone();
            this.findProduct();
           
        }

       
    }

    messageOpen=()=>{
        this.setState({message:true})
    }

    loadDone=()=>{
        this.setState({loadDone:true})
    }

    renderComponents=(product)=>{
        return product.components.map((component, i) => {
            return( <ListItem
                key={i}
                leftIcon={<Icon name='pocket' type='zocial' color='#A0CB1B'/>}
                title={component.name}
                subtitle={<View style={styles.subtitleView}>
                            <Text >{component.type}</Text>
                            <Text >{component.description}</Text>
                        </View>}
              />);
        
        });
    }

    handleChecked = (product)=>{
        
        if(this.state.checked == false){
            this.setState({pickedProduct: product})
        }
        else{
            this.setState({pickedProduct: {name:""}})
        }
        this.setState({checked: !this.state.checked})
       
    }

    renderCard=()=>{
       const {product} = this.props;
        return(
            <View>
                 {this.state.loadDone && 
            
            <Card
                
                title={product.name}
                >
                  <Image
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    
                    source={img}
                />    
                <Text style={{marginBottom: 10, color:'#696969'}}>
                    {"виробник: " + product.id_producer}
                </Text>
                <Content>
                   {this.renderComponents(product)}
                </Content>
                <CheckBox
                    center
                    title='Click Here to Remove This Item'
                    iconRight
                    iconType='material'
                    checkedIcon='done'
                    uncheckedIcon='add'
                    checkedColor='#A0CB1B'
                    checked={this.state.checked}
                    onPress={()=>this.handleChecked(product)}
                    />
            </Card>}
            </View>
        )
    
    }

    render(){
        
        return(
            <Container >
                <Header backgroundColor='#A0CB1B'>
                    <Button title="Назад" onPress={()=>this.props.navigation.navigate('Продукти')} />
                </Header>
                {this.state.message && <Text style={{margin: 10,alignSelf:'center', color:'#DC143C'}}>Forbiden</Text>}
                <Content style={styles.container}>
                {this.renderCard()}
                </Content>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductScreen);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    }
  });