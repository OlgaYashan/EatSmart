import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from "./store";
//import Home from './containers/Home';
import Home from './containers/Home'
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen/index'
import ProductsScreen from './screens/ProductsScreen/index'
import ScanerScreen from './screens/BarCodeScanerScreen/index'

export default class App extends React.Component {

  
  render() {
    return (
     <Provider store={store}>
        <AppContainer/>
     </Provider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen
    },
    {
      defaultNavigationOptions:{
        headerStyle: {
          backgroundColor: 'orange'
        }
      }
    }
)

const AppDrawerNavigator = createDrawerNavigator(
  {
  Home: Home,
  Products: ProductsScreen,
  Scaner: ScanerScreen
    },
    {
      unmountInactiveRoutes: true,
      defaultNavigationOptions:{
        headerStyle: {
          backgroundColor: 'orange'
        }
      }
})

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 