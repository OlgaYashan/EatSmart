import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import {  Container,Content} from 'native-base';
import { mapStateToProps, mapDispatchToProps } from "./container";
import {connect} from 'react-redux';
import { Card, ListItem,Button,Header,CheckBox, Overlay, withTheme} from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons'

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

 class ComponenttScreen extends Component{

    state = {
         userFC:[],
         check:false,
         checked: false,
         deletedComponents:[],
         addedComponents:[],
         addComponent: false,
         deleteComponent: false

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
        var newUser = this.props.user;
        const { component } = this.props.navigation.state.params;
        var FC = newUser.forbidenComponents;
        if(this.state.addComponent==true){
            console.log("tyt")
           FC.unshift(component);
        }
        if(this.state.deleteComponent==true){
            console.log("tit")
            var k = this.myIndexOf(newUser.forbidenComponents,component);
            FC.splice(k,1);
        }

        newUser.forbidenComponents = FC;
        this.props.updateUser(newUser);

      
    }

    findComponent(){
        
        const { component } = this.props.navigation.state.params;
        const {userFC} = this.state;
        for (var i=0; i<userFC.length;i++){
           
                if(userFC[i].name==component.name){
                    this.setState({check:true});           
            }
        }
    }

    

    componentWillMount(){
        const {user} = this.props;
        const { component } = this.props.navigation.state.params;
        var forbidenComponents = user.forbidenComponents;
        for (var i=0; i<forbidenComponents.length;i++){
           
            if(forbidenComponents[i].name==component.name){
                this.setState({check:true});           
        }
    }
        this.setState({userFC: forbidenComponents  })
      
    }


    componentDidMount(){
        console.log("didmount "+this.state.check);
    }

  




    handleChecked = (component)=>{
        const { checked, check} = this.state;
       if(check == true){
           if(checked == false){
            console.log("check:var1")
               this.setState({deleteComponent:true});
           }
           if (checked == true){
            console.log("check:var2")
               this.setState({deleteComponent:false});
           }
       }
       if(check == false){
        if(checked == false){
            console.log("check:var3")
            this.setState({addComponent:true});
        }
        if (checked == true){
            console.log("check:var4")
            this.setState({addComponent:false});
        }
       }

        this.setState({checked:!this.state.checked})
    }

    renderCard=()=>{
        const { component } = this.props.navigation.state.params;
        return(
            <View>       
            
            <Card
                
                title={component.name}
                >
            
                <Text style={{marginBottom: 10, color:'#696969'}}>
                    {"тип: " + component.type}
                </Text>
                <Text style={{marginBottom: 10, color:'#696969'}}>
                    {"опис: " + component.description}
                </Text>
                    
                <CheckBox
                    center
                    title={this.state.check ?'Видалити із заборонених':'Додати у заборонені'}
                    iconRight
                    iconType='material'
                    checkedIcon='done'
                    uncheckedIcon='add'
                    checkedColor='#A0CB1B'
                    checked={this.state.checked}
                    onPress={()=>this.handleChecked(component)}
                    />
                 
               
            </Card>
            </View>
        )
    
    }

    render(){
        
        return(
            <Container >
                <Header centerComponent={{ text: 'Компонент', style: { color: '#fff' } }} backgroundColor='#A0CB1B'>
                    <Button buttonStyle={styles.btn} title="Назад" onPress={()=>this.props.navigation.navigate('Компоненти')} />
                </Header>
       
                
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
  )(ComponenttScreen);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      marginBottom:10
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
    btn:{
        backgroundColor: '#6B8E23'
    }
  });