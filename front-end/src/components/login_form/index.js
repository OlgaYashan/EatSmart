import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import LogoImg from "./logo.png"
import "./index.scss"; 

export default class LoginForm extends Component {
    state = {
        login:"",
        password:"",
        messageOpened: true
    }

    handleNotTyping = () =>{ this.setState({messageOpened:false});}
    handleLogin = e => { this.setState({login:e.target.value});  }
    handlePassword = e => { this.setState({password:e.target.value});}
    handleSubmit = () =>{
       // const {checkUser} = this.props;
       // checkUser(this.state.login,this.state.password);
      this.setState({messageOpened:true});
      const {authorization} = this.props;
      const {login, password} = this.state;
      authorization(login,password);
       
    }

    openMessage = () =>{
      return(<Message
        error
        header="Oops..."
        content='Wrong login or password. Please, try again!'
        /> )
    }
    closeMessage = () =>{
      
      const {error} = this.props;
      if (error){
        this.setState({messageOpened: false});
      } 
    }

    render(){
      const {error} = this.props;
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
              <Image size="huge" src={LogoImg} /> Log-in to your account
            </Header>
            
            {error  && messageOpened && this.openMessage()}
            <Form inverted size='large' >
            
              <Segment inverted stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' 
                  onChange={this.handleLogin} 
                  onClick={this.closeMessage} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handlePassword}
                  onClick={this.closeMessage}
                />
                <Button color='olive' fluid size='large' onClick={this.handleSubmit}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message color ="olive">
              New to us? Sign Up
            </Message>
          </Grid.Column>
        </Grid>
       
      </div> )
    }
}