import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import store from "./store";
//import Home from './containers/Home';
import Home from './containers/Home'
import {createStackNavigator, createAppContainer, createDrawerNavigator,createSwitchNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen/index'
import ProductsScreen from './screens/ProductsScreen/index'
import ScanerScreen from './screens/BarCodeScanerScreen/index'
import SignInScreen from './screens/SignInScreen/index'
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ComponentsScreen from './screens/ComponentsScreen'
import ProductComponentsScreen from './screens/ProductComponentsScreen'
import ProductScreen from './screens/ProductScreen'
import { Body, Container, Content, Header } from 'native-base';
import {DrawerItems} from "react-navigation";
//import img from './fav.png'
import img from './apple.jpg'
import ComponentScreen from './screens/ComponentScreen'

 


export default class App extends React.Component {

  
  render() {
    return (
     <Provider store={store}>
        <AppContainer/>
     </Provider>
    );
  }
}

const CustomDrawerContentComponent = (props)=>(
  <Container>
    <Header style={{height:200, backgroundColor:'#ffff'}}>
      <Body>
        <Image 
          style={styles.drawerImage}
          source={img}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)



const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppDrawerNavigator = createDrawerNavigator(
  {
  Дім: {screen:HomeScreen},
  Продукти: {screen:ProductsScreen},
  Компоненти: {screen:ComponentsScreen},
  Відсканувати: {screen: ScanerScreen}
    },
    {
      unmountInactiveRoutes: true,
      initialRouteName:'Дім',
      contentComponent: CustomDrawerContentComponent,
      drawerOpenRoute:'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute:'DrawerToggle',
      contentOptions: {
        activeTintColor: '#9ACD32',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
          opacity: 1
        }
      }
      
})

const AppContainer = createAppContainer(createSwitchNavigator(
  {AuthLoading: AuthLoadingScreen,
    App:AppDrawerNavigator,
  Auth: AuthStack,
  ProductComponents:ProductComponentsScreen,
  Product:ProductScreen,
  Component: ComponentScreen
},

  {
    unmountInactiveRoutes: true,
    initialRouteName: 'AuthLoading'
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage:{
    height:150,
    width:150,
    alignSelf: 'center'
  }
});

 