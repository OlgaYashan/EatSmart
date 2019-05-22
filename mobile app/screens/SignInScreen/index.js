import React, {Component} from 'react';

import {connect} from 'react-redux';
import {View, Text, StyleSheet, AsyncStorage, Button, 
  ImageBackground, Image, TextInput, Dimensions,TouchableOpacity,
  SafeAreaView, KeyboardAvoidingView} from 'react-native';
import  bgImage  from "./Mobile.png";
import  logo  from "../../pic/fav.png";
import { mapStateToProps, mapDispatchToProps } from "./container";

import Icon from 'react-native-vector-icons/Ionicons'

const {width: WIDTH} = Dimensions.get('window');

 class SignInScreen extends Component{

  constructor(){
    super()
    this.state = {
      showPass:true,
      press:false,
      message: true,
      login:"",
      password:""
    }
  }


  showPass=()=>{
    if(this.state.press==false){
      this.setState({showPass:false, press:true})
    }
    else{
      this.setState({showPass:true, press:false})
    }
  }
  handleAuthorize = () =>{
    this.setState({message:true});
   console.log(this.state.login,this.state.password);
    this.props.authorizeUser(this.state.login,this.state.password);
  }

  componentDidUpdate(prevProps){
    console.log(this.props.user.name);
    console.log(this.props.loading);
    console.log(this.props.error);
    
    if(this.state.login == this.props.user.login){

    this._signInAsync();}
    
 
  }

  componentWillMount(){
    this.props.clearUser();
  }

  _signInAsync = async () => {
   
    await AsyncStorage.setItem('userToken', this.props.user.name);
    this.props.navigation.navigate('App');
  };

  

  closeMessage=()=>{
    this.setState({message:false});
  }

 openMessage=()=>{
    this.setState({message:true});
  }


    static navigationOptions = {
      headerStyle:{
          backgroundColor: '#BDB76B',
          height:1
      }
  }
    
      render() {
        const {user, loading, error} = this.props;
     
        return (
         
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior='padding'style={styles.container}>
              <View style={styles.logoContainer}>
              <Text style={styles.logoText}> EatSmart </Text>
                <Image source={logo} style={styles.logo} />
                
              </View>
              {this.props.error  &&  this.state.message && !this.props.loading && <View style={styles.ErrorContainer} >
      <Text  style={styles.Error}> Erorr </Text></View>  }
                
              
              <View style={styles.inputContainer}>
              <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}/>
                  <TextInput
                    style={styles.input}
                    placeholder={'Логін'}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({login:text,message:false})}

                  />
              </View> 
              <View style={styles.inputContainer}>
              <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}/>
                  <TextInput
                    style={styles.input}
                    placeholder={'Пароль'}
                    secureTextEntry={this.state.showPass}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({password:text,message:false})}
                  />
                   <TouchableOpacity style={styles.btnEye} onPress={this.showPass}>

                    <Icon name={this.state.press == false ? 'ios-eye':'ios-eye-off'} size={23} color={'rgba(255,255,255,0.7)'}/>
                  </TouchableOpacity>   
              </View> 
      
            <TouchableOpacity onPress={this.handleAuthorize} style={styles.btnLogin}>
                    <Text style={styles.text}>Увійти</Text>
                  </TouchableOpacity>
                  </KeyboardAvoidingView>
                  </SafeAreaView>
                  
          </ImageBackground> 
        
        );
      }

     
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection:'column',
      justifyContent: "center", 
      alignItems: "center"
  },
  backgroundContainer:{
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer:{
    alignItems:"center",
    marginBottom: 10,
    flexDirection:'row',
    marginTop: 50,
  },
  logo:{
    width: 50,
    height: 50
  },
  logoText:{
    color: '#6B8E23',
    fontSize: 40,
    fontWeight: '500',
    marginTop: 5,
    opacity: 0.9
  },
  inputContainer:{
    marginTop:10
  },
  input:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },
  inputIcon:{
    position: 'absolute',
    top: 8,
    left: 37
  },
 
  btnEye:{
    position: 'absolute',
    top:10,
    right: 37
  },
  btnLogin:{
    width: 100,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#A0CB1B',
    justifyContent: "center",
    marginTop: 20
  },
  text:{
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign:'center'
  },
  Error:{
    color:'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign:'center'
  },
  ErrorContainer:{
    width: 100,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#E38047',
    justifyContent: "center",
    opacity: 0.8
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);