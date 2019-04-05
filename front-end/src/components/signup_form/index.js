import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import LogoImg from "./logo.png"

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]


export class SignupForm extends Component {
    state = {
        login:"",
        password:"",
        name: "",
        surname: "",
        gender: ""
    }

   

  
    handlelogin = e => { this.setState({login:e.target.value}); }
    handlePassword = e => { this.setState({password:e.target.value}); }
    handleName = e => { this.setState({name:e.target.value}); }
    handleSurname = e => { this.setState({surname:e.target.value}); }
    handleGender = e => { this.setState({gender:e.target.value}); }

    handleSubmit = () =>{
        const {checkUser} = this.props;
        checkUser(this.state.login,this.state.password);

    }


    render(){
        return(<div className='login-form'>
        
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='olive' textAlign='center'>
              <Image size="huge" src={LogoImg} /> Sign-Up!
            </Header>
            <Form inverted size='large' >
              <Segment inverted stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' 
                  onChange={this.handleLogin}/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handlePassword}
                />
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' 
                  onChange={this.handleName}/>
                 <Form.Input fluid icon='user' iconPosition='left' placeholder='Surname' 
                  onChange={this.handleSurname}/>
                <Form.Select fluid label='Gender' options={options} placeholder='Gender'onChange={this.handleGender}  />
    
                <Button color='olive' fluid size='large' onClick={this.handleSubmit}>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
       
      </div> )
    }
}