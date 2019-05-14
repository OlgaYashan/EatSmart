import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Modal,Icon } from 'semantic-ui-react'
import LogoImg from "./logo.png"
import "./index.scss"; 
import history from "../../history";

import {Link} from 'react-router-dom'
import SignUpForm from "../signup_form";

export default class LoginForm extends Component {
    state = {
        login:"",
        password:"",
        messageOpened: false,
        modal:false
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
       // const {checkUser} = this.props;
       // checkUser(this.state.login,this.state.password);
      this.setState({messageOpened:true});
      const {authorization, error,loading} = this.props;
      const {login, password} = this.state;
      authorization(login,password);      
    
       
    }
    redirect =()=>{
      history.push("/user");
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

    render(){
      const {error, loading, registration} = this.props;
      const {messageOpened} = this.state;
        return(<div className='login-form'>
        
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
     
        <Grid className="loginForm" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 350 }}>
            <Header as='h2' color='olive' textAlign='center'>
              <Image size="huge" src={LogoImg} /> Вхід
            </Header>
            
            {error  && messageOpened && this.openMessage()}
            {loading && this.closeMessage()}
            <Form inverted size='large' >
            
              <Segment inverted stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Логін' 
                  onChange={this.handleLogin} 
                  onClick={this.closeMessage} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Пароль'
                  type='password'
                  onChange={this.handlePassword}
                  onClick={this.closeMessage}
                />
                <Button color='olive' fluid size='large'  onClick={this.handleSubmit}>
               Увійти
                </Button>
              </Segment>
            </Form>
            <Message color ="olive">
              Ще не зарєстровані? 
              <br/>
              <Modal open={this.state.modal} onClose={this.close}   size="mini" dimmer="blurring" trigger={<button onClick={this.open}className="button_signup">Зареєструватися</button>}>
                                
                                <Modal.Content>
                                <SignUpForm registration={registration}/>
                                <Message className="message_signup" color ="olive">
                                    Вже зарєстровані? 
                                      <br/>
                                    <button  onClick={this.handleExit} className="button_signup"> Увійти</button>
                                   
                                                
                                  </Message>
                                </Modal.Content>
                            </Modal>
            </Message>
          </Grid.Column>
        </Grid>
       
      </div> )
    }
}