import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, AsyncStorage,Button} from 'react-native';
import { Header } from 'react-native-elements';
import {  Container,Content} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import {Constants, BarCodeScanner, Permissions} from 'expo';
import { mapStateToProps, mapDispatchToProps } from "./container";
import {connect} from 'react-redux';

 class HomeScreen extends Component{


    
      render() {
        return (
          <Container>
            <Header
                    backgroundColor='#A0CB1B'
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Продукти', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    />
            <Content style={styles.container}>
            <Button title="Show me more of the app" onPress={this._showMoreApp} />
            <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
          </Content>
          </Container>
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
    container: {
      flex: 1,
      padding: 10
    }
  });

  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);