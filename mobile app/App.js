import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
 


export default class App extends React.Component {

  
  render() {
    return (
     <Provider store={store}>
        <AppContainer/>
     </Provider>
    );
  }
}




const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppDrawerNavigator = createDrawerNavigator(
  {
  Дім: HomeScreen,
  Продукти: ProductsScreen,
  Компоненти: ComponentsScreen,
  Відсканувати: ScanerScreen
    },
    {
      unmountInactiveRoutes: true,
      initialRouteName:'Дім',
      drawerOpenRoute:'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute:'DrawerToggle'
})

const AppContainer = createAppContainer(createSwitchNavigator(
  {AuthLoading: AuthLoadingScreen,
    App:AppDrawerNavigator,
  Auth: AuthStack,
  ProductComponents:ProductComponentsScreen,
  Product:ProductScreen
},

  {
    unmountInactiveRoutes: true,
    initialRouteName: 'AuthLoading'
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 