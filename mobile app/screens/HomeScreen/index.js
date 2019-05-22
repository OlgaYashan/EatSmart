import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, AsyncStorage, Image,SafeAreaView} from 'react-native';
import { Card, ListItem, Header, Button } from 'react-native-elements';
import {  Container,Content} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import {Constants, BarCodeScanner, Permissions} from 'expo';
import { mapStateToProps, mapDispatchToProps } from "./container";
import {connect} from 'react-redux';
import img from './product.png'
import { ScrollView } from 'react-native-gesture-handler';

 class HomeScreen extends Component{

  static  navigationOptions = {
      drawerIcon:(
        <Icon name='ios-home' size={26} color='#3CB371'/>

      )
  }

  componentWillMount(){
    if(this.props.user.login==""){
      this.props.navigation.navigate('Auth');
    }
  }

  renderCards=()=>{
    return this.props.user.lastProducts.map((product, i) => {
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
                onPress={()=> this.props.navigation.navigate('ProductComponents', { product: product, page:'Дім' })}/>
        </Card>
    )
})
}
    
      render() {
        return (
          <View style={styles.home}>
            <Header containerStyle={styles.header}
                   
                    leftComponent={{ text: `${this.props.user.name}`, style: { color: '#6B8E23',marginLeft:5, fontWeight:'700' }} }
                    centerComponent={{ text: ` Останні переглянуті продукти`, style: { color: '#fff' } }}
                    rightComponent={ <Button  buttonStyle={styles.btn}  title="Вихід" onPress={this._signOutAsync} />}
                    />
                    

                     
            <Content style={styles.container}>
            {this.props.user.name!="" && this.renderCards()}
          </Content>
          </View>
    
        );
      }
    
      _showMoreApp = () => {
        this.props.navigation.navigate('Scaner');
      };
    
      _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.clearUser();
        this.props.navigation.navigate('Auth');
      };

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
   
    header:{
      backgroundColor:'#A0CB1B',
      height: 80    },
    btn:{
      backgroundColor: '#6B8E23'
      
  }
  });

  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);