import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {  Container,Content} from 'native-base';
import { mapStateToProps, mapDispatchToProps } from "./container";
import {connect} from 'react-redux';
import { Card, ListItem,Button,Header,CheckBox } from 'react-native-elements';
import img from './product.png'

import Icon from 'react-native-vector-icons/Ionicons'

 class SettingsFCScreen extends Component{


    componentWillMount(){
        this.props.loadComponents();
    }

    static  navigationOptions = {
        drawerIcon:(
          <Icon name='ios-leaf' size={26} color='#3CB371'/>
  
        )
    }




    renderCards=()=>{
        return this.props.components.map((component, i) => {
        return(
            <Card key={i}>
                   <ListItem
                    
                    title={component.name}
                    leftIcon={<Icon name='ios-leaf' size={26} color='#3CB371'/>}
                     />    
                <Text style={{marginBottom: 10, color:'#696969'}}>
                    {"тип: " + component.type}
                </Text>
                <Button  
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#A0CB1B'}}
                    title='Більше інформації' 
                    onPress={()=> this.props.navigation.navigate('Component', { component: component })}/>
                
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
                    centerComponent={{ text: 'Компоненти', style: { color: '#fff' } }}
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
  )(SettingsFCScreen);

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