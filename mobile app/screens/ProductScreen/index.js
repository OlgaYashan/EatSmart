import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import {  Container,Content} from 'native-base';
import { mapStateToProps, mapDispatchToProps } from "./container";
import {connect} from 'react-redux';
import { Card, ListItem,Button,Header,CheckBox, Overlay, withTheme} from 'react-native-elements';
import img from './product.png'
import Icon from 'react-native-vector-icons/Ionicons'

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

 class ProductScreen extends Component{

    state = {
        pickedProduct:{name:""},
        loadDone: false,
        notPickedProduct: {name:""},
        checked:false,
        message: false,
        error:false
    }

    myIndexOf = (arr, o) =>{  

        for (var i = 0; i < arr.length; i++) {
          
            if (arr[i].name == o.name) {
                return i;
            }
        }
        return -1;
    }

    componentWillUnmount(){
      if(!this.props.error){
          
        this.props.clearProduct();
        if(this.state.pickedProduct.name!=""){
            var newUser = this.props.user;
            
                newUser.history.unshift(this.state.pickedProduct); 
            
            if(this.myIndexOf(newUser.lastProducts,this.state.pickedProduct)!=-1){
                var i = this.myIndexOf(newUser.lastProducts,this.state.pickedProduct);
                newUser.lastProducts.splice(i,1);
                newUser.lastProducts.unshift(this.state.pickedProduct);
            }
            else{
                newUser.lastProducts.unshift(this.state.pickedProduct); 
            }
            
            this.props.updateUser(newUser);
        }
        if(this.state.notPickedProduct.name!=""){
            var newUser = this.props.user;
            if(this.myIndexOf(newUser.lastProducts,this.state.notPickedProduct)!=-1){
                var i = this.myIndexOf(newUser.lastProducts,this.state.notPickedProduct);
                newUser.lastProducts.splice(i,1);
                newUser.lastProducts.unshift(this.state.notPickedProduct);
            }
            else{
                newUser.lastProducts.unshift(this.state.notPickedProduct); 
            }
            this.props.updateUser(newUser);
        }
        }
    
    }

    findProduct(){
        this.setnotPickedProduct();
        const {user} = this.props;
        var forbidenComponents = user.forbidenComponents;
        var dietComponents = user.diet.forbidenComponents;
        var resFC = forbidenComponents.concat(dietComponents);
        
        var productComponents = this.props.product.components;
     
        for (var i=0; i<productComponents.length;i++){
            for(var j=0; j<resFC.length; j++){
          
                if(productComponents[i].name==resFC[j].name){
                    this.setState({message:true});
                }
            }
        }
    }

    

    componentWillMount(){
        const { barCode } = this.props.navigation.state.params;
        this.props.loadProduct(barCode);

    }

    componentDidUpdate(prevProps){
        console.log(this.props.loading);
        console.log(this.props.error);
        if(!this.props.error || !this.props.loading){
            if(prevProps.product.name != this.props.product.name){
                    this.loadDone();
                    this.findProduct();   
                    console.log('yep')
        }
    }

       
    }

    setnotPickedProduct=()=>{
        this.setState({notPickedProduct:this.props.product})
    }

    messageOpen=()=>{
        this.setState({message:true})
    }

    loadDone=()=>{
        this.setState({loadDone:true})
    }
    loadError=()=>{
        this.setState({error:true})
    }

    renderComponents=(product)=>{
        return product.components.map((component, i) => {
            return( <ListItem
                bottomDivider = {true}
                key={i}
                leftIcon={<Icon name='ios-leaf' size={26} color='#3CB371'/>}
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
            this.setState({pickedProduct: {name:""}, notPickedProduct:product})
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
                    containerStyle={styles.check}
                    center
                    title='Я це буду їсти'
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
            <Container style={styles.home} >
                   
             
                <Content>
                <Header centerComponent={{ text: 'Продукт', style: { color: '#fff' } }} backgroundColor='#A0CB1B'>
                    <Button buttonStyle={styles.btn} title="Назад" onPress={()=>this.props.navigation.navigate('Відсканувати')} />
                </Header>

                {this.props.error && !this.props.loading && <Content contentContainerStyle={styles.content}>
                    <Text style={styles.textError}>Продукт з таким штрих-кодом відсутній у базі. Розробників вже про це повідомлено:)</Text>
                    
                </Content>}
                {this.state.message && 
                    <Overlay
                    overlayStyle={styles.overlay}
                    width={WIDTH-80}
                    height={HEIGHT-500}
                    isVisible={this.state.message}
                    onBackdropPress={() => this.setState({ message: false })}
                  >
                    <Text style={styles.text}>Цей продукт є небезпечним для вас, адже містить заборонені компоненти!</Text>
                  </Overlay>
                }
                <Content style={styles.container}>
                {this.renderCard()}
                </Content>
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
    home:{
        flex: 1,
        marginBottom:20
      },
        container: {
          flex: 1,
          paddingBottom: 10
        },
    overlay:{
        
        backgroundColor: '#FA8072',
        borderRadius: 25,
        justifyContent: "center",
        

    },
    text:{
        color: '#E0FFFF',
        fontSize: 16,
        textAlign:'center'
    },
    textError:{
        color: '#696969',
        fontSize: 16,
        textAlign:'center',
        marginTop:40,
        padding:10
    },
    btn:{
        backgroundColor: '#6B8E23'
    },
    content:{
        justifyContent: "center",
        alignItems: 'center',
    },
    cancel: {
        fontSize: 16,
        textAlign: 'center',
        color: '#A0CB1B',
        position: 'absolute',
        bottom: 30,
        left: 160
    
      },

    check:{
marginTop:10
    }
  });