import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Modal,Icon, Menu } from 'semantic-ui-react'

import "./index.scss"; 

export default class ProductForm extends Component {
    state = {
        login:"",
        password:"",
        activeItem: "",
        activeObj:{},
        messageOpened: false,
        modal:false,
        pickedArr: []
    }

    myIndexOf = (arr, o) =>{  
        console.log(arr.length); 
        for (var i = 0; i < arr.length; i++) {
          
            if (arr[i].name == o.name) {
                return i;
            }
        }
        return -1;
    }


    handleItemClick = (e, { name, obj }) =>{
        if(this.myIndexOf(this.state.pickedArr, obj)!=-1){
            var i = this.myIndexOf(this.state.pickedArr, obj);
            this.state.pickedArr.splice(i,1);
        }
        else{
            this.state.pickedArr.unshift(obj);
        }
        this.setState({ activeItem: name, activeObj:obj, addDone:"false",deleteDone:"false"   });
    }

    isInPicked = (obj) =>{
        if(this.myIndexOf(this.state.pickedArr, obj)!=-1){
            return true;
        }
        else{
            return false;
        }
    }

    handleExit=()=>{
      this.close();
      this.props.openLogin();

    }
    close = ()=>{
      this.setState({modal:false});
      this.props.closeLogin();
    }
    open =()=>{
      this.setState({modal:true});
    }

    handleNotTyping = () =>{ this.setState({messageOpened:false});}
    handleLogin = e => { this.setState({login:e.target.value});  }
    handlePassword = e => { this.setState({password:e.target.value});}
    handleSubmit = () =>{
      const {authorization, error,loading} = this.props;
      const {login, password} = this.state;
     
      
      
    
       
    }
 

    openMessage = () =>{
      return(<Message
        error
        header="Ой..."
        content='Введіть правильний логін та пароль!'
        /> )
    }
    closeMessage = () =>{
      
      const {error} = this.props;
      if (error){
        this.setState({messageOpened: false});
      } 
    }

    renderMenuItem = () =>{
        const { activeItem } = this.state;
        return this.props.components.map((component, i) => {
            
            
           if(this.isInPicked(component) == true){
            return( 
            <Menu.Item name={component.name} obj={component}   onClick={this.handleItemClick} className="picked"/>
            
            );}
            else{
                return( 
                <Menu.Item name={component.name} obj={component}   onClick={this.handleItemClick}/>
                );}
        })
    }

    render(){
      const {error, loading, registration} = this.props;
      const {messageOpened} = this.state;
        return(   
            <div className="productForm">
             <Header as='h2'  textAlign='center' className="productForm_text" >
              Додати продукти
            </Header>
            
        <Grid  textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Row columns="two">
          <Grid.Column style={{ maxWidth: 350 }}>
           
            {error  && messageOpened && this.openMessage()}
            {loading && this.closeMessage()}
            <Form inverted size='large' >
            
              <Segment inverted stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Назва' 
                  onChange={this.handleLogin} 
                  onClick={this.closeMessage} />
                <Form.Input
                  fluid
                  icon='suitcase'
                  iconPosition='left'
                  placeholder='Виробник'
                  onChange={this.handlePassword}
                  onClick={this.closeMessage}
                />
                <Button color='olive' fluid size='large' onClick={this.handleSubmit}>
                  Додати
                </Button>
              </Segment>
            </Form>
            
          </Grid.Column>
          <Grid.Column style={{ maxWidth: 350 }}>
          <Menu  vertical inverted className="menu__style_form">
            {this.renderMenuItem()}
            
         
          </Menu>
          </Grid.Column>
          </Grid.Row>
        </Grid></div>)
    }
}